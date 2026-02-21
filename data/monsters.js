window.MONSTERS = {
  Dokkaebi_Lord: {
    id: "Dokkaebi_Lord",
    name: "Dokkaebi Lord",
    stars: 5,
    element: "dark",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2023/10/unit_icon_0133_0_5.png",
    recipe: [
      { id: "Yeji_and_Sapsaree", qty: 1 },
      { id: "Suiki", qty: 1 },
      { id: "Mellia", qty: 1 },
      { id: "Janssen", qty: 1 },
    ],
  },

  Yeji_and_Sapsaree: {
    id: "Yeji_and_Sapsaree",
    name: "Yeji and Sapsaree",
    stars: 4,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2023/10/unit_icon_0132_1_2.png",
    recipe: [
      { id: "Sath", qty: 1 },
      { id: "Tagaros", qty: 1 },
      { id: "Yaku", qty: 1 },
      { id: "Lindermen", qty: 1 },
    ],
    awaken: [
      { type: "fire", grade: "high", qty: 10 },
      { type: "fire", grade: "mid", qty: 20 },
      { type: "magic", grade: "high", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
  },

  Suiki: {
    id: "Suiki",
    name: "Suiki",
    stars: 4,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2021/02/suiki.png",
    recipe: [
      { id: "Bagir", qty: 1 },
      { id: "Ellena", qty: 1 },
      { id: "Namib", qty: 1 },
      { id: "Lala", qty: 1 },
    ],
    awaken: [
      { type: "water", grade: "high", qty: 12 },
      { type: "water", grade: "mid", qty: 15 },
      { type: "magic", grade: "mid", qty: 15 },
      { type: "magic", grade: "high", qty: 7 },
    ],
  },

  Lala: {
    id: "Lala",
    name: "Lala",
    stars: 2,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/08/Lala-Fire.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "low", qty: 20 },
      { type: "magic", grade: "low", qty: 15 },
    ],
  },

  Namib: {
    id: "Namib",
    name: "Namib",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2015/10/Namib-Wind.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "low", qty: 10 },
      { type: "wind", grade: "mid", qty: 15 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Ellena: {
    id: "Ellena",
    name: "Ellena",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Ellena_Icon.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "low", qty: 10 },
      { type: "water", grade: "mid", qty: 15 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Bagir: {
    id: "Bagir",
    name: "Bagir",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/10/Bagir_Icon.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "low", qty: 5 },
      { type: "water", grade: "mid", qty: 20 },
      { type: "magic", grade: "mid", qty: 15 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },


  Mellia: {
    id: "Mellia",
    name: "Mellia",
    stars: 4,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/09/Mellia_Icon.png",
    recipe: [
      { id: "Crane", qty: 1 },
      { id: "Ramahan", qty: 1 },
      { id: "Iselia", qty: 1 },
      { id: "Daharenos", qty: 1 },
    ],
    awaken: [
      { type: "wind", grade: "high", qty: 10 },
      { type: "wind", grade: "mid", qty: 20 },
      { type: "magic", grade: "mid", qty: 15 },
      { type: "magic", grade: "high", qty: 5 },
    ],
  },

Daharenos: {
    id: "Daharenos",
    name: "Daharenos",
    stars: 2,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Daharenos_Icon.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 5 },
      { type: "water", grade: "low", qty: 15 },
      { type: "magic", grade: "mid", qty: 5 },
      { type: "magic", grade: "low", qty: 10 },
    ],
  },

  Iselia: {
    id: "Iselia",
    name: "Iselia",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Iselia_Icon.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 5 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 15 },
    ],
  },

 Ramahan: {
    id: "Ramahan",
    name: "Ramahan",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Ramahan_Icon.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Crane: {
    id: "Crane",
    name: "Crane",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2015/10/Crane-Wind.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "low", qty: 10 },
      { type: "water", grade: "mid", qty: 15 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Janssen: {
    id: "Janssen",
    name: "Janssen",
    stars: 3,
    element: "dark",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2017/01/Janssen_Icon.png",
    recipe: null,
    awaken: [
      { type: "dark", grade: "low", qty: 15 },
      { type: "dark", grade: "mid", qty: 5 },
      { type: "magic", grade: "mid", qty: 5 },
      { type: "magic", grade: "low", qty: 10 },
    ],
  },

  Sath: {
    id: "Sath", name: "Sath", stars: 3, element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Sath_Icon.png", recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
      { type: "magic", grade: "mid", qty: 10 },
    ],
  },
  Tagaros: {
    id: "Tagaros", name: "Tagaros", stars: 3, element: "fire",
   img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Tagaros_Icon.png", recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
      { type: "magic", grade: "mid", qty: 10 },
    ],
  },
  Yaku: {
    id: "Yaku", name: "Yaku", stars: 3, element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Yaku_Icon.png", recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
      { type: "magic", grade: "mid", qty: 10 },
    ],
  },

  Lindermen: {
    id: "Lindermen", name: "Lindermen", stars: 2, element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Lindermen_Icon.png", recipe: null,
    awaken: [
      { type: "wind", grade: "low", qty: 15 },
      { type: "wind", grade: "mid", qty: 2 },
      { type: "magic", grade: "low", qty: 15 },
    ],
  },

  Phoenix: {
    id: "Phoenix",
    name: "Phoenix",
    stars: 5,
    element: "Water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2017/02/Phoenix_Water_Icon-1.png",
    recipe: [
      { id: "Arang", qty: 1 },
      { id: "Jojo", qty: 1 },
      { id: "Susano", qty: 1 },
      { id: "Mina", qty: 1 },
    ],
  },

Susano: {
    id: "Susano",
    name: "Susano",
    stars: 4,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2017/01/Susano_Icon.png",
    recipe: [
      { id: "Icaru", qty: 1 },
      { id: "Kahn", qty: 1 },
      { id: "Dagorr", qty: 1 },
      { id: "Tantra", qty: 1 },
    ],
    awaken: [
      { type: "water", grade: "high", qty: 10 },
      { type: "water", grade: "mid", qty: 20 },
      { type: "magic", grade: "high", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
  },

  Tantra: {
    id: "Tantra", name: "Tantra", stars: 2, element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Tantra_Icon.png", recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 1 },
      { type: "fire", grade: "low", qty: 15 },
      { type: "magic", grade: "low", qty: 20 },
    ],
  },

Dagorr: {
    id: "Dagorr", name: "Dagorr", stars: 3, element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Dagorr_Icon.png", recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Kahn: {
    id: "Kahn", name: "Kahn", stars: 3, element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Kahn_Icon.png", recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

Icaru: {
    id: "Icaru", name: "Icaru", stars: 3, element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Icaru_Icon.png", recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },


  Arang: {
    id: "Arang",
    name: "Arang",
    stars: 4,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2017/01/Arang_Icon.png",
    recipe: [
      { id: "Prilea", qty: 1 },
      { id: "Hina", qty: 1 },
      { id: "Kahli", qty: 1 },
      { id: "Konamiya", qty: 1 },
    ],
    awaken: [
      { type: "wind", grade: "high", qty: 10 },
      { type: "wind", grade: "mid", qty: 20 },
      { type: "magic", grade: "high", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
  },

  Jojo: {
    id: "Jojo",
    name: "Jojo",
    stars: 4,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2015/09/Jojo-Fire.png",
    recipe: [
      { id: "Garoche", qty: 1 },
      { id: "Amanda", qty: 1 },
      { id: "Kuhn", qty: 1 },
      { id: "Chichi", qty: 1 },
    ],
    awaken: [
      { type: "fire", grade: "high", qty: 10 },
      { type: "fire", grade: "mid", qty: 20 },
      { type: "magic", grade: "high", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
  },

Chichi: {
    id: "Chichi", name: "Chichi", stars: 2, element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/08/Chichi-Wind.png", recipe: null,
    awaken: [
      { type: "wind", grade: "low", qty: 20 },
      { type: "magic", grade: "low", qty: 15 },
    ],
  },

Kuhn: {
    id: "Kuhn", name: "Kuhn", stars: 3, element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Kuhn_Icon-1.png", recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Mina: {
    id: "Mina", name: "Mina", stars: 3, element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Mina_Icon.png", recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },


Amanda: {
    id: "Amanda", name: "Amanda", stars: 3, element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Cassandra_Icon.png", recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 20 },
      { type: "fire", grade: "low", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

Garoche: {
    id: "Garoche", name: "Garoche", stars: 3, element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Garoche_Icon.png", recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

 Konamiya: {
    id: "Konamiya", name: "Konamiya", stars: 2, element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Konamiya_Icon.png", recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 2 },
      { type: "water", grade: "low", qty: 15 },
      { type: "magic", grade: "low", qty: 15 },
    ],
  },

  Kahli: {
    id: "Kahli", name: "Kahli", stars: 3, element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2017/07/Kahli-1.png", recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Hina: {
    id: "Hina", name: "Hina", stars: 3, element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Hina_Icon.png", recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Prilea: {
    id: "Prilea", name: "Prilea", stars: 3, element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/08/Prilea-Wind.png", recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },


Paladin: {
    id: "Paladin",
    name: "Paladin",
    stars: 5,
    element: "light",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2017/09/Paladin_Light_Icon.png",
    recipe: [
      { id: "Harmonia", qty: 1 },
      { id: "Kaz", qty: 1 },
      { id: "Ling_Ling", qty: 1 },
      { id: "Loren", qty: 1 },
    ],
  },

  Harmonia: {
    id: "Harmonia",
    name: "Harmonia",
    stars: 4,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2017/01/Harmonia_Icon.png",
    recipe: [
      { id: "Rebecca", qty: 1 },
      { id: "Kaien", qty: 1 },
      { id: "Dagora", qty: 1 },
      { id: "Aeilene", qty: 1 },
    ],
    awaken: [
      { type: "fire", grade: "high", qty: 12 },
      { type: "fire", grade: "mid", qty: 15 },
      { type: "magic", grade: "high", qty: 10 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
},

Aeilene: {
    id: "Aeilene",
    name: "Aeilene",
    stars: 2,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Aeilene_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 5 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 15 },
    ],
},

Dagora: {
    id: "Dagora",
    name: "Dagora",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Dagora_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 5 },
      { type: "fire", grade: "low", qty: 15 },
      { type: "magic", grade: "mid", qty: 5 },
      { type: "magic", grade: "low", qty: 10 },
    ],
},

    Kaien: {
    id: "Kaien",
    name: "Kai'en",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Kaien_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 5 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 15 },
    ],
},

    Rebecca: {
    id: "Rebecca",
    name: "Rebecca",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Rebecca_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],


  },










};
