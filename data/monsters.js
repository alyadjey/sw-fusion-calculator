window.MONSTERS = {
  // ===== 5★ DEMO (awaken НЕ потрібно рахувати) =====
  Dokkaebi_Lord: {
    id: "Dokkaebi_Lord",
    name: "Dokkaebi Lord",
    stars: 5,
    element: "dark",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2023/10/unit_icon_0133_0_5.png",
    recipe: [
      { id: "Yeji_and_Sapsaree", qty: 1 },
      { id: "m4_b", qty: 1 },
      { id: "m4_c", qty: 1 },
      { id: "m4_d", qty: 1 },
    ],
  },
  phoenix_demo: {
    id: "phoenix_demo",
    name: "Фенікс (demo)",
    stars: 5,
    element: "fire",
    icon: { bg: "#f2994a", text: "PH" },
    recipe: [
      { id: "m4_b", qty: 1 },
      { id: "m4_e", qty: 1 },
      { id: "m4_f", qty: 1 },
      { id: "m4_c", qty: 1 },
    ],
  },

  // ===== 4★ DEMO =====
  // craftable 4★ = 3×3★ + 1×2★
  Yeji_and_Sapsaree: {
    id: "Yeji_and_Sapsaree",
    name: "Yeji and Sapsaree",
    stars: 4,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2023/10/unit_icon_0132_1_2.png",
    recipe: [
      { id: "m3_1", qty: 1 },
      { id: "m3_2", qty: 1 },
      { id: "m3_3", qty: 1 },
      { id: "m2_1", qty: 1 },
    ],
    awaken: [
      { type: "fire", grade: "high", qty: 10 },
      { type: "fire", grade: "mid", qty: 20 },
      { type: "magic", grade: "high", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
  },

  m4_b: {
    id: "m4_b",
    name: "Монстр 4★ B (ресурс)",
    stars: 4,
    element: "water",
    icon: { bg: "#9b51e0", text: "B4" },
    recipe: null,
    awaken: [
      { type: "water", grade: "high", qty: 8 },
      { type: "water", grade: "mid", qty: 18 },
      { type: "magic", grade: "mid", qty: 12 },
      { type: "magic", grade: "low", qty: 10 },
    ],
  },

  m4_c: {
    id: "m4_c",
    name: "Монстр 4★ C (ресурс)",
    stars: 4,
    element: "fire",
    icon: { bg: "#56ccf2", text: "C4" },
    recipe: null,
    awaken: [
      { type: "fire", grade: "high", qty: 6 },
      { type: "fire", grade: "mid", qty: 22 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 12 },
    ],
  },

  m4_d: {
    id: "m4_d",
    name: "Монстр 4★ D (craft)",
    stars: 4,
    element: "dark",
    icon: { bg: "#eb5757", text: "D4" },
    recipe: [
      { id: "m3_4", qty: 1 },
      { id: "m3_5", qty: 1 },
      { id: "m3_6", qty: 1 },
      { id: "m2_2", qty: 1 },
    ],
    awaken: [
      { type: "dark", grade: "high", qty: 7 },
      { type: "dark", grade: "mid", qty: 17 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 10 },
    ],
  },

  m4_e: {
    id: "m4_e",
    name: "Монстр 4★ E (craft)",
    stars: 4,
    element: "light",
    icon: { bg: "#219653", text: "E4" },
    recipe: [
      { id: "m3_2", qty: 1 },
      { id: "m3_7", qty: 1 },
      { id: "m3_8", qty: 1 },
      { id: "m2_3", qty: 1 },
    ],
    awaken: [
      { type: "light", grade: "high", qty: 9 },
      { type: "light", grade: "mid", qty: 16 },
      { type: "magic", grade: "mid", qty: 8 },
      { type: "magic", grade: "low", qty: 12 },
    ],
  },

  m4_f: {
    id: "m4_f",
    name: "Монстр 4★ F (ресурс)",
    stars: 4,
    element: "wind",
    icon: { bg: "#bb6bd9", text: "F4" },
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 14 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 8 },
      { type: "magic", grade: "low", qty: 8 },
    ],
  },

  // ===== 3★ DEMO =====
  m3_1: {
    id: "m3_1", name: "Монстр 3★ 1", stars: 3, element: "wind",
    icon: { bg: "#34495e", text: "31" }, recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 2 },
      { type: "wind", grade: "low", qty: 15 },
      { type: "magic", grade: "low", qty: 15 },
    ],
  },
  m3_2: {
    id: "m3_2", name: "Монстр 3★ 2", stars: 3, element: "water",
    icon: { bg: "#2c3e50", text: "32" }, recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 2 },
      { type: "water", grade: "low", qty: 15 },
      { type: "magic", grade: "low", qty: 15 },
    ],
  },
  m3_3: {
    id: "m3_3", name: "Монстр 3★ 3", stars: 3, element: "fire",
    icon: { bg: "#3d5a80", text: "33" }, recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 2 },
      { type: "fire", grade: "low", qty: 15 },
      { type: "magic", grade: "low", qty: 10 },
    ],
  },
  m3_4: {
    id: "m3_4", name: "Монстр 3★ 4", stars: 3, element: "wind",
    icon: { bg: "#4c566a", text: "34" }, recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 2 },
      { type: "wind", grade: "low", qty: 12 },
      { type: "magic", grade: "low", qty: 10 },
    ],
  },
  m3_5: {
    id: "m3_5", name: "Монстр 3★ 5", stars: 3, element: "water",
    icon: { bg: "#5e6472", text: "35" }, recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 2 },
      { type: "water", grade: "low", qty: 12 },
      { type: "magic", grade: "low", qty: 10 },
    ],
  },
  m3_6: {
    id: "m3_6", name: "Монстр 3★ 6", stars: 3, element: "dark",
    icon: { bg: "#6c757d", text: "36" }, recipe: null,
    awaken: [
      { type: "dark", grade: "mid", qty: 2 },
      { type: "dark", grade: "low", qty: 12 },
      { type: "magic", grade: "low", qty: 10 },
    ],
  },
  m3_7: {
    id: "m3_7", name: "Монстр 3★ 7", stars: 3, element: "fire",
    icon: { bg: "#495057", text: "37" }, recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 2 },
      { type: "fire", grade: "low", qty: 12 },
      { type: "magic", grade: "low", qty: 10 },
    ],
  },
  m3_8: {
    id: "m3_8", name: "Монстр 3★ 8", stars: 3, element: "light",
    icon: { bg: "#343a40", text: "38" }, recipe: null,
    awaken: [
      { type: "light", grade: "mid", qty: 2 },
      { type: "light", grade: "low", qty: 12 },
      { type: "magic", grade: "low", qty: 10 },
    ],
  },

  // ===== 2★ DEMO =====
  m2_1: {
    id: "m2_1", name: "Монстр 2★ 1", stars: 2, element: "wind",
    icon: { bg: "#8d99ae", text: "21" }, recipe: null,
    awaken: [
      { type: "wind", grade: "low", qty: 3 },
      { type: "magic", grade: "low", qty: 3 },
    ],
  },
  m2_2: {
    id: "m2_2", name: "Монстр 2★ 2", stars: 2, element: "water",
    icon: { bg: "#adb5bd", text: "22" }, recipe: null,
    awaken: [
      { type: "water", grade: "low", qty: 3 },
      { type: "magic", grade: "low", qty: 3 },
    ],
  },
  m2_3: {
    id: "m2_3", name: "Монстр 2★ 3", stars: 2, element: "fire",
    icon: { bg: "#ced4da", text: "23" }, recipe: null,
    awaken: [
      { type: "fire", grade: "low", qty: 3 },
      { type: "magic", grade: "low", qty: 3 },
    ],
  },
};