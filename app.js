const MONSTERS = window.MONSTERS;

const monsterGrid = document.getElementById("monsterGrid");
const treeEl = document.getElementById("tree");
const summaryEl = document.getElementById("summary");
const inventoryEl = document.getElementById("inventory");

const targetCountEl = document.getElementById("targetCount");
const segBtns = Array.from(document.querySelectorAll(".segBtn"));
const resetOwnedBtn = document.getElementById("resetOwnedBtn");

let state = {
  starsFilter: 5,
  rootId: null,
  targetCount: 1,
  owned: loadOwned(),
};

// ===== storage =====
function loadOwned() {
  try { return JSON.parse(localStorage.getItem("sw_owned_clean_v3") || "{}"); }
  catch { return {}; }
}
function saveOwned() {
  localStorage.setItem("sw_owned_clean_v3", JSON.stringify(state.owned));
}
function resetOwned() {
  state.owned = {};
  saveOwned();
  refreshAll();
}

// ===== utils =====
function clampInt(v, min = 0) {
  const n = Number(v);
  if (!Number.isFinite(n)) return min;
  return Math.max(min, Math.floor(n));
}

function svgDataUri({ bg = "#2f80ed", text = "??" } = {}) {
  const safeText = String(text).slice(0, 3).toUpperCase();
  const svg =
`<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${bg}"/>
      <stop offset="1" stop-color="#0b0f14"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="128" height="128" rx="26" fill="url(#g)"/>
  <circle cx="96" cy="30" r="10" fill="rgba(255,255,255,0.18)"/>
  <text x="64" y="74" text-anchor="middle" font-family="system-ui,Segoe UI,Arial" font-size="34" font-weight="800" fill="rgba(255,255,255,0.92)">
    ${safeText}
  </text>
</svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function getIconUrl(m) {
  if (m?.img) return m.img;
  return svgDataUri(m?.icon || {});
}

function hasRecipe(m) {
  return Array.isArray(m?.recipe) && m.recipe.length > 0;
}

function listByStars(stars) {
  const s = Number(stars);

  return Object.values(MONSTERS)
    .filter(m => {
      if (m.stars !== s) return false;

      // ✅ якщо вибрано 4★ як ціль — показуємо тільки тих, кого можна гексити (craftable)
      if (s === 4) return hasRecipe(m);

      // для 5★ (і інших зірок, якщо додаси) лишаємо як є
      return true;
    })
    .sort((a, b) => a.name.localeCompare(b.name, "uk"));
}

function add(map, id, qty) {
  map[id] = (map[id] || 0) + qty;
}

// ===== UI: selectors =====
function setStarsFilter(stars) {
  state.starsFilter = Number(stars);
  segBtns.forEach(b => b.classList.toggle("isActive", Number(b.dataset.stars) === state.starsFilter));
  renderMonsterGrid();

  const list = listByStars(state.starsFilter);
  state.rootId = list.length ? list[0].id : null;
  refreshAll();
}

function setRoot(id) {
  state.rootId = id;
  renderMonsterGrid();
  refreshAll();
}

function setTargetCount(v) {
  state.targetCount = clampInt(v, 1);
  targetCountEl.value = String(state.targetCount);
  refreshAll();
}

function renderMonsterGrid() {
  const list = listByStars(state.starsFilter);
  monsterGrid.innerHTML = "";

  for (const m of list) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "card" + (m.id === state.rootId ? " isActive" : "");

    const icon = document.createElement("div");
    icon.className = "icon";
    const img = document.createElement("img");
    img.src = getIconUrl(m);
    img.alt = m.name;
    icon.appendChild(img);

    const name = document.createElement("div");
    name.className = "cardName";
    name.textContent = m.name;

    btn.appendChild(icon);
    btn.appendChild(name);

    btn.addEventListener("click", () => setRoot(m.id));
    monsterGrid.appendChild(btn);
  }
}

// ===== CORE LOGIC =====

/**
 * Gross requirements for ingredients only (children and deeper):
 * grossNeed[childId] = how many are required in total
 * grossRoot[rootId] = targetCount (for tree display)
 */
function computeGross(rootId, targetCount) {
  const grossNeed = {};
  const grossRoot = { [rootId]: targetCount };

  function walk(id, qty) {
    const m = MONSTERS[id];
    if (!m || qty <= 0) return;
    if (!hasRecipe(m)) return;

    for (const item of m.recipe) {
      const childId = item.id;
      const childQty = qty * clampInt(item.qty, 1);
      add(grossNeed, childId, childQty);
      walk(childId, childQty);
    }
  }

  walk(rootId, targetCount);
  return { grossNeed, grossRoot };
}

/**
 * Missing with craft and inventory:
 * - uses owned first
 * - if remaining:
 *   missing[id] += remain  (even for craftable 4★)
 *   if craftable -> also require ingredients
 */
function computeMissing(rootId, targetCount, ownedMap) {
  const owned = { ...ownedMap };
  const missing = {};

  function need(id, qty) {
    const m = MONSTERS[id];
    if (!m || qty <= 0) return;

    const have = clampInt(owned[id] || 0, 0);
    const used = Math.min(have, qty);
    if (used > 0) owned[id] = have - used;

    const remain = qty - used;
    if (remain <= 0) return;

    add(missing, id, remain);

    if (hasRecipe(m)) {
      for (const item of m.recipe) {
        need(item.id, remain * clampInt(item.qty, 1));
      }
    }
  }

  need(rootId, targetCount);
  return { missing };
}

// ===== Awakening Essences =====
/**
 * Calculates total essences for all ingredients (NOT 5★).
 * Each ingredient monster is assumed to require awakening -> sum awaken[] * grossNeed[id].
 * Format: totals[type][grade] = qty
 * type: magic | wind | water | fire | light | dark
 * grade: low | mid | high
 */
function computeEssencesTotals(grossNeed) {
  const totals = {
    magic: { low: 0, mid: 0, high: 0 },
    wind: { low: 0, mid: 0, high: 0 },
    water:{ low: 0, mid: 0, high: 0 },
    fire: { low: 0, mid: 0, high: 0 },
    light:{ low: 0, mid: 0, high: 0 },
    dark: { low: 0, mid: 0, high: 0 },
  };

  for (const [id, needQty] of Object.entries(grossNeed)) {
    const m = MONSTERS[id];
    if (!m) continue;

    // ✅ 5★ ніколи не рахуємо
    if (m.stars === 5) continue;

    const awaken = Array.isArray(m.awaken) ? m.awaken : [];
    if (!awaken.length) continue;

    for (const a of awaken) {
      const type = a.type;
      const grade = a.grade;
      const qty = clampInt(a.qty, 0);

      if (!totals[type] || totals[type][grade] === undefined) continue;
      totals[type][grade] += qty * needQty;
    }
  }

  // прибираємо пусті типи (в UI)
  const cleaned = {};
  for (const [type, g] of Object.entries(totals)) {
    const sum = g.low + g.mid + g.high;
    if (sum > 0) cleaned[type] = g;
  }
  return cleaned;
}

function typeLabel(type) {
  const map = {
    magic: "Magic",
    wind: "Wind",
    water: "Water",
    fire: "Fire",
    light: "Light",
    dark: "Dark",
  };
  return map[type] || type;
}
function gradeLabel(grade) {
  const map = { low: "Low", mid: "Mid", high: "High" };
  return map[grade] || grade;
}

// ===== Inventory UI =====
function renderInventory(grossNeed) {
  inventoryEl.innerHTML = "";

  const ids = Object.keys(grossNeed)
    .sort((a, b) => (MONSTERS[a]?.name || a).localeCompare(MONSTERS[b]?.name || b, "uk"));

  if (!ids.length) {
    inventoryEl.innerHTML = `<div class="muted tiny">У цього монстра немає рецепту.</div>`;
    return;
  }

  for (const id of ids) {
    const m = MONSTERS[id];
    const have = clampInt(state.owned[id] || 0, 0);

    const item = document.createElement("div");
    item.className = "invItem";

    const icon = document.createElement("div");
    icon.className = "nodeIcon";
    const img = document.createElement("img");
    img.src = m ? getIconUrl(m) : svgDataUri({ bg: "#666", text: "??" });
    img.alt = m?.name || id;
    icon.appendChild(img);

    const meta = document.createElement("div");
    meta.className = "invMeta";

    const title = document.createElement("div");
    title.className = "invTitle";
    title.textContent = m ? m.name : `Unknown (${id})`;

    const sub = document.createElement("div");
    sub.className = "invSub";
    sub.textContent = `${m?.stars ?? "?"}★`;

    meta.appendChild(title);
    meta.appendChild(sub);

    const input = document.createElement("input");
    input.type = "number";
    input.min = "0";
    input.value = String(have);

    input.addEventListener("input", () => {
      state.owned[id] = clampInt(input.value, 0);
      saveOwned();
      refreshAll();
    });

    item.appendChild(icon);
    item.appendChild(meta);
    item.appendChild(input);

    inventoryEl.appendChild(item);
  }
}

// ===== Tree UI =====
function makeBadgesUnder(needQty, missQty, isRoot = false) {
  const wrap = document.createElement("div");
  wrap.className = "fBadgesUnder";

  const row1 = document.createElement("div");
  row1.className = "fBadgeRow";
  const b1 = document.createElement("span");
  b1.className = "fBadge ok";
  b1.textContent = isRoot ? `Ціль: ${needQty}` : `Треба: ${needQty}`;
  row1.appendChild(b1);

  const row2 = document.createElement("div");
  row2.className = "fBadgeRow";
  const b2 = document.createElement("span");
  b2.className = "fBadge " + (missQty > 0 ? "miss" : "ok");
  b2.textContent = `Не вистачає: ${missQty}`;
  row2.appendChild(b2);

  wrap.appendChild(row1);
  wrap.appendChild(row2);

  return wrap;
}

function buildFuseTreeNode(id, needMapForTree, missingMap, rootId) {
  const m = MONSTERS[id];

  const node = document.createElement("div");
  node.className = "fNode" + (hasRecipe(m) ? " hasKids" : "");

  const iconWrap = document.createElement("div");
  iconWrap.className = "fIconWrap";

  const img = document.createElement("img");
  img.src = m ? getIconUrl(m) : svgDataUri({ bg: "#666", text: "??" });
  img.alt = m?.name || id;
  iconWrap.appendChild(img);

  const needQty = needMapForTree[id] || 0;
  const missQty = Math.max(0, missingMap[id] || 0);

  node.appendChild(iconWrap);
  node.appendChild(makeBadgesUnder(needQty, missQty, id === rootId));
  // meta labels intentionally removed

  if (hasRecipe(m)) {
    const children = document.createElement("div");
    children.className = "fChildren";
    for (const item of m.recipe) {
      children.appendChild(buildFuseTreeNode(item.id, needMapForTree, missingMap, rootId));
    }
    node.appendChild(children);
  }

  return node;
}

function renderTree(rootId, grossNeed, grossRoot, missing) {
  treeEl.innerHTML = "";

  const needForTree = { ...grossNeed, ...grossRoot };

  const scaler = document.createElement("div");
  scaler.className = "treeScaler";

  const tree = document.createElement("div");
  tree.className = "fuseTree";
  tree.appendChild(buildFuseTreeNode(rootId, needForTree, missing, rootId));

  scaler.appendChild(tree);
  treeEl.appendChild(scaler);

  applyTreeAutoScale();
}

// ===== Summary UI =====
function groupRowsByStars(rows) {
  const groups = { 4: [], 3: [], 2: [], other: [] };
  for (const r of rows) {
    const s = r.stars;
    if (s === 4) groups[4].push(r);
    else if (s === 3) groups[3].push(r);
    else if (s === 2) groups[2].push(r);
    else groups.other.push(r);
  }
  for (const k of Object.keys(groups)) {
    groups[k].sort((a, b) => (b.need - a.need) || a.name.localeCompare(b.name, "uk"));
  }
  return groups;
}

function renderGroupBlock(title, rows) {
  const total = rows.reduce((s, r) => s + r.need, 0);

  const block = document.createElement("div");
  block.className = "sumBlock";

  const head = document.createElement("div");
  head.className = "sumHead";

  const t = document.createElement("div");
  t.className = "sumTitle";
  t.textContent = title;

  const tot = document.createElement("div");
  tot.className = "sumTotal";
  tot.textContent = `Сума “треба”: ${total}`;

  head.appendChild(t);
  head.appendChild(tot);

  const list = document.createElement("div");
  list.className = "sumList";

  for (const r of rows) {
    const row = document.createElement("div");
    row.className = "sumRow";

    const icon = document.createElement("div");
    icon.className = "nodeIcon";
    const img = document.createElement("img");
    img.src = r.imgUrl;
    img.alt = r.name;
    icon.appendChild(img);

    const main = document.createElement("div");
    main.className = "sumRowMain";

    const name = document.createElement("div");
    name.className = "sumRowName";
    name.textContent = r.name;

    const nums = document.createElement("div");
    nums.className = "sumRowNums";
    nums.innerHTML = `
      <span class="sumChip">Треба: <strong>${r.need}</strong></span>
      <span class="sumChip">Є: <strong>${r.have}</strong></span>
      <span class="sumChip">Не вистачає: <strong class="${r.miss ? "badBad" : "badGood"}">${r.miss}</strong></span>
    `;

    main.appendChild(name);
    main.appendChild(nums);

    row.appendChild(icon);
    row.appendChild(main);

    list.appendChild(row);
  }

  block.appendChild(head);
  block.appendChild(list);
  return block;
}

function renderEssencesBlock(essTotals) {
  const types = Object.keys(essTotals);
  if (!types.length) return "";

  // order: element first, magic last
  const order = ["wind","water","fire","light","dark","magic"];
  types.sort((a,b) => order.indexOf(a) - order.indexOf(b));

  let cards = "";
  for (const type of types) {
    const g = essTotals[type];
    const sum = (g.low||0)+(g.mid||0)+(g.high||0);

    cards += `
      <div class="essCard">
        <div class="essCardTitle">
          <span>${typeLabel(type)}</span>
          <span class="muted tiny">Сума: ${sum}</span>
        </div>
        <div class="essRows">
          <div class="essRow"><span>${gradeLabel("high")}</span><strong>${g.high || 0}</strong></div>
          <div class="essRow"><span>${gradeLabel("mid")}</span><strong>${g.mid || 0}</strong></div>
          <div class="essRow"><span>${gradeLabel("low")}</span><strong>${g.low || 0}</strong></div>
        </div>
      </div>
    `;
  }

  return `
    <div class="essPanel">
      <div class="essHead">
        <div class="essTitle">Есенції для пробудження</div>
        <div class="essSub">Рахуються для 4★/3★/2★ інгредієнтів. 5★ не рахуються.</div>
      </div>
      <div class="essGrid">${cards}</div>
    </div>
  `;
}

function renderSummary(rootId, grossNeed, missing) {
  const ingredientIds = Object.keys(grossNeed);

  if (!ingredientIds.length) {
    summaryEl.innerHTML = `<div class="muted tiny">У цього монстра немає рецепту.</div>`;
    return;
  }

  const rows = ingredientIds.map(id => {
    const m = MONSTERS[id] || { name: `Unknown (${id})`, stars: 0 };
    const need = grossNeed[id] || 0;
    const have = clampInt(state.owned[id] || 0, 0);
    const miss = clampInt(missing[id] || 0, 0);

    return {
      id,
      name: m.name,
      stars: m.stars,
      need,
      have,
      miss,
      imgUrl: getIconUrl(m),
    };
  });

  const totalNeed = rows.reduce((s, r) => s + r.need, 0);
  const totalMiss = rows.reduce((s, r) => s + r.miss, 0);

  const groups = groupRowsByStars(rows);
  const need4 = groups[4].reduce((s, r) => s + r.need, 0);
  const need3 = groups[3].reduce((s, r) => s + r.need, 0);
  const need2 = groups[2].reduce((s, r) => s + r.need, 0);

  const rootStars = MONSTERS[rootId]?.stars ?? 0;
  const show4Row = rootStars === 5; // якщо root 4★ — рядок “…з них 4★” не показуємо

  // essences totals
  const essTotals = computeEssencesTotals(grossNeed);

  summaryEl.innerHTML = `
    <div class="summaryGrid">
      <div class="summaryItem"><span>Ціль (root)</span><strong>${state.targetCount}</strong></div>
      <div class="summaryItem"><span>Усього інгредієнтів треба</span><strong>${totalNeed}</strong></div>
      ${show4Row ? `<div class="summaryItem"><span>…з них 4★</span><strong>${need4}</strong></div>` : ``}
      <div class="summaryItem"><span>…з них 3★</span><strong>${need3}</strong></div>
      <div class="summaryItem"><span>…з них 2★</span><strong>${need2}</strong></div>
      <div class="summaryItem"><span>Усього не вистачає</span><strong class="${totalMiss ? "badBad" : "badGood"}">${totalMiss}</strong></div>
    </div>

    ${renderEssencesBlock(essTotals)}

    <div class="summaryLists" id="summaryLists"></div>
  `;

  const lists = document.getElementById("summaryLists");
  if (groups[4].length) lists.appendChild(renderGroupBlock("4★ (детально)", groups[4]));
  if (groups[3].length) lists.appendChild(renderGroupBlock("3★ (детально)", groups[3]));
  if (groups[2].length) lists.appendChild(renderGroupBlock("2★ (детально)", groups[2]));
}

// ===== refresh =====
function refreshAll() {
  if (!state.rootId) {
    inventoryEl.innerHTML = "";
    treeEl.innerHTML = `<div class="muted tiny">Немає монстрів у цій категорії.</div>`;
    summaryEl.innerHTML = "";
    return;
  }

  const { grossNeed, grossRoot } = computeGross(state.rootId, state.targetCount);
  const { missing } = computeMissing(state.rootId, state.targetCount, state.owned);

  renderInventory(grossNeed);
  renderTree(state.rootId, grossNeed, grossRoot, missing);
  renderSummary(state.rootId, grossNeed, missing);
}

function applyTreeAutoScale() {
  const scaler = treeEl.querySelector(".treeScaler");
  const tree = treeEl.querySelector(".fuseTree");
  if (!scaler || !tree) return;

  // reset
  tree.style.transform = "scale(1)";
  scaler.style.height = "auto";

  // widths
  const containerW = treeEl.clientWidth;
  const treeW = tree.scrollWidth;

  // scale to fit width (no upscale)
  const scale = treeW > 0 ? Math.min(1, containerW / treeW) : 1;
  tree.style.transform = `scale(${scale})`;

  // fix layout height (because transform doesn't affect layout)
  const treeH = tree.scrollHeight;
  scaler.style.height = `${Math.ceil(treeH * scale)}px`;
}

// re-apply on resize
window.addEventListener("resize", () => applyTreeAutoScale());

// ===== events =====
segBtns.forEach(btn => btn.addEventListener("click", () => setStarsFilter(btn.dataset.stars)));
targetCountEl.addEventListener("input", () => setTargetCount(targetCountEl.value));
resetOwnedBtn.addEventListener("click", resetOwned);

// ===== init =====
setStarsFilter(5);
setTargetCount(1);