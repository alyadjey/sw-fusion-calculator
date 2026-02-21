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

Ling_Ling: {
    id: "Ling_Ling",
    name: "Ling Ling",
    stars: 4,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2014/10/Ling-Ling-Wind.png",
    recipe: [
      { id: "Hiva", qty: 1 },
      { id: "Zephicus", qty: 1 },
      { id: "Raoq", qty: 1 },
      { id: "Fynn", qty: 1 },
    ],
    awaken: [
      { type: "wind", grade: "high", qty: 10 },
      { type: "wind", grade: "mid", qty: 20 },
      { type: "magic", grade: "high", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
},

Fynn: {
    id: "Fynn",
    name: "Fynn",
    stars: 2,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/07/Fynn-Water.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "low", qty: 20 },
      { type: "magic", grade: "low", qty: 15 },
    ],
},

Raoq: {
    id: "Raoq",
    name: "Raoq",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Raoq_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
},

Zephicus: {
    id: "Zephicus",
    name: "Zephicus",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2015/06/Zephicus-Wind.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
},

Hiva: {
    id: "Hiva",
    name: "Hiva",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Hiva_Icon.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
},



Kaz: {
    id: "Kaz",
    name: "Kaz",
    stars: 4,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2014/10/Kaz-Water.png",
    recipe: [
      { id: "Luan", qty: 1 },
      { id: "Purian", qty: 1 },
      { id: "Ardella", qty: 1 },
      { id: "Bremis", qty: 1 },
    ],
    awaken: [
      { type: "water", grade: "high", qty: 10 },
      { type: "water", grade: "mid", qty: 20 },
      { type: "magic", grade: "high", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
},

Loren: {
    id: "Loren",
    name: "Loren",
    stars: 3,
    element: "light",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2015/03/Loren-Light.png",
    recipe: null,
    awaken: [
      { type: "light", grade: "mid", qty: 15 },
      { type: "light", grade: "low", qty: 10 },
      { type: "light", grade: "mid", qty: 10 },
      { type: "light", grade: "low", qty: 5 },
    ],
},
Bremis: {
    id: "Bremis",
    name: "Bremis",
    stars: 2,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Bremis_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 5 },
      { type: "fire", grade: "low", qty: 15 },
      { type: "magic", grade: "mid", qty: 5 },
      { type: "magic", grade: "low", qty: 10 },
    ],
},

Ardella: {
    id: "Ardella",
    name: "Ardella",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Ardella_Icon.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 20 },
      { type: "wind", grade: "low", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
      { type: "magic", grade: "low", qty: 5 },
    ],
},

Purian: {
    id: "Purian",
    name: "Purian",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Purian_Icon.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
},


Luan: {
    id: "Luan",
    name: "Luan",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2015/08/Luan-Water.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
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

Arcane_Weapon: {
    id: "Arcane_Weapon",
    name: "Arcane Weapon",
    stars: 5,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2025/10/unit_icon_0192_0_1_Cecilia.png",
    recipe: [
      { id: "Pholus", qty: 1 },
      { id: "Shaina", qty: 1 },
      { id: "Suiki", qty: 1 },
      { id: "Sera", qty: 1 },
    ],
  },

  Shaina: {
    id: "Shaina",
    name: "Shaina",
    stars: 4,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/03/shaina.png",
    recipe: [
      { id: "Naki", qty: 1 },
      { id: "Lucasha", qty: 1 },
      { id: "Lulu", qty: 1 },
      { id: "Pigma", qty: 1 },
    ],
    awaken: [
      { type: "fire", grade: "high", qty: 5 },
      { type: "fire", grade: "mid", qty: 15 },
      { type: "magic", grade: "high", qty: 10 },
      { type: "magic", grade: "mid", qty: 20 },
    ],
  },

  Pigma: {
    id: "Pigma",
    name: "Pigma",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Pigma_Icon-1.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

   Lulu: {
    id: "Lulu",
    name: "Lulu",
    stars: 2,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/08/Lulu-Water.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "low", qty: 20 },
      { type: "magic", grade: "low", qty: 15 },
    ],
  },

  Lucasha: {
    id: "Lucasha",
    name: "Lucasha",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/08/Lucasha-Fire.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Naki: {
    id: "Naki",
    name: "Naki",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2015/03/Naki-Fire.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

Pholus: {
    id: "Pholus",
    name: "Pholus",
    stars: 4,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2025/10/unit_icon_0193_1_3_Pholus_2.png",
    recipe: [
      { id: "Copper", qty: 1 },
      { id: "Naomi", qty: 1 },
      { id: "Vidurr", qty: 1 },
      { id: "Urtau", qty: 1 },
    ],
    awaken: [
      { type: "wind", grade: "high", qty: 20 },
      { type: "wind", grade: "mid", qty: 10 },
      { type: "magic", grade: "high", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
  },

Urtau: {
    id: "Urtau",
    name: "Urtau",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2014/10/Urtau-Water.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 15 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

Vidurr: {
    id: "Vidurr",
    name: "Vidurr",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/10/Vidurr_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 20 },
      { type: "fire", grade: "low", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Naomi: {
    id: "Naomi",
    name: "Naomi",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Naomi_Icon-1.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Copper: {
    id: "Copper",
    name: "Copper",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Copper_Icon.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },


  Sera: {
    id: "Sera",
    name: "Sera",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2015/03/Sera-Water.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

Totemist: {
    id: "Totemist",
    name: "Totemist",
    stars: 5,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2021/11/unit_icon_0078_0_3.png",
    recipe: [
      { id: "Mellia", qty: 1 },
      { id: "Emma", qty: 1 },
      { id: "Verdehile", qty: 1 },
      { id: "Bernard", qty: 1 },
    ],
  },

  Verdehile: {
    id: "Verdehile",
    name: "Verdehile",
    stars: 4,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2017/01/Verdehile_Icon.png",
    recipe: [
      { id: "Fairo", qty: 1 },
      { id: "Kugo", qty: 1 },
      { id: "Vigor", qty: 1 },
      { id: "Taharus", qty: 1 },
    ],
    awaken: [
      { type: "fire", grade: "high", qty: 12 },
      { type: "fire", grade: "mid", qty: 15 },
      { type: "magic", grade: "high", qty: 10 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
  },

  Taharus: {
    id: "Taharus",
    name: "Taharus",
    stars: 2,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Taharus_Icon.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 5 },
      { type: "water", grade: "low", qty: 15 },
      { type: "magic", grade: "mid", qty: 5 },
      { type: "magic", grade: "low", qty: 10 },
    ],
  },

  Vigor: {
    id: "Vigor",
    name: "Vigor",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Vigor_Icon.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Kugo: {
    id: "Kugo",
    name: "Kugo",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Kugo_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Fairo: {
    id: "Fairo",
    name: "Fairo",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2014/12/Fairo-Fire.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Emma: {
    id: "Emma",
    name: "Emma",
    stars: 4,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2015/08/Emma-Water-N.png",
    recipe: [
      { id: "Mao", qty: 1 },
      { id: "Kernodon", qty: 1 },
      { id: "Ermeda", qty: 1 },
      { id: "Cahule", qty: 1 },
    ],
    awaken: [
      { type: "water", grade: "high", qty: 12 },
      { type: "water", grade: "mid", qty: 15 },
      { type: "magic", grade: "high", qty: 7 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
  },

  Cahule: {
    id: "Cahule",
    name: "Cahule",
    stars: 2,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Cahule_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 2 },
      { type: "fire", grade: "low", qty: 15 },
      { type: "magic", grade: "low", qty: 15 },
    ],
  },

  Ermeda: {
    id: "Ermeda",
    name: "Ermeda",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2017/03/unit_icon_0005_2_0.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Kernodon: {
    id: "Kernodon",
    name: "Kernodon",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2014/10/Kernodon-Water.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Mao: {
    id: "Mao",
    name: "Mao",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2014/10/Mao-Water.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Bernard: {
    id: "Bernard",
    name: "Bernard",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Bernard_Icon.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

Lightning_Emperor: {
    id: "Lightning_Emperor",
    name: "Lightning Emperor",
    stars: 5,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/10/Lightning_Emperor_Fire_Icon.png",
    recipe: [
      { id: "Verdehile", qty: 1 },
      { id: "Kaz", qty: 1 },
      { id: "Lupinus", qty: 1 },
      { id: "Kungen", qty: 1 },
    ],
  },

  Lupinus: {
    id: "Lupinus",
    name: "Lupinus",
    stars: 4,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2015/07/Lupinus-Wind.png",
    recipe: [
      { id: "Roger", qty: 1 },
      { id: "Moria", qty: 1 },
      { id: "Spectra", qty: 1 },
      { id: "Tarq", qty: 1 },
    ],
    awaken: [
      { type: "wind", grade: "high", qty: 10 },
      { type: "wind", grade: "mid", qty: 20 },
      { type: "magic", grade: "high", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
  },

  Tarq: {
    id: "Tarq",
    name: "Tarq",
    stars: 2,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Tarq_Icon.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 2 },
      { type: "water", grade: "low", qty: 15 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Spectra: {
    id: "Spectra",
    name: "Spectra",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Spectra_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Moria: {
    id: "Moria",
    name: "Moria",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Moria_Icon.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

Roger: {
    id: "Roger",
    name: "Roger",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Roger_Icon.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },


  Kungen: {
    id: "Kungen",
    name: "Kungen",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Kungen_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },


  Panda_Warrior: {
    id: "Panda_Warrior",
    name: "Panda Warrior",
    stars: 5,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/05/Panda-Warrior-Fire.png",
    recipe: [
      { id: "Qebehsenuef", qty: 1 },
      { id: "Ling_Ling", qty: 1 },
      { id: "Akia", qty: 1 },
      { id: "Geoffrey", qty: 1 },
    ],
  },

  Akia: {
    id: "Akia",
    name: "Akia",
    stars: 4,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2017/01/Akia_Icon.png",
    recipe: [
      { id: "Nangrim", qty: 1 },
      { id: "Krakdon", qty: 1 },
      { id: "Ramira", qty: 1 },
      { id: "Seal", qty: 1 },
    ],
    awaken: [
      { type: "fire", grade: "high", qty: 10 },
      { type: "fire", grade: "mid", qty: 20 },
      { type: "magic", grade: "high", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
  },

  Seal: {
    id: "Seal",
    name: "Seal",
    stars: 2,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Seal_Icon.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 5 },
      { type: "wind", grade: "low", qty: 15 },
      { type: "magic", grade: "mid", qty: 5 },
      { type: "magic", grade: "low", qty: 10 },
    ],
  },

  Ramira: {
    id: "Ramira",
    name: "Ramira",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/08/Ramira-Water.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Krakdon: {
    id: "Krakdon",
    name: "Krakdon",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Krakdon_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "low", qty: 20 },
      { type: "magic", grade: "mid", qty: 2 },
      { type: "magic", grade: "low", qty: 10 },
    ],
  },

  Nangrim: {
    id: "Nangrim",
    name: "Nangrim",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2015/01/nangrim.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

Qebehsenuef: {
    id: "Qebehsenuef",
    name: "Qebehsenuef",
    stars: 4,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2015/10/Qebehsenuef-Water.png",
    recipe: [
      { id: "Shailoq", qty: 1 },
      { id: "Nubia", qty: 1 },
      { id: "Ragion", qty: 1 },
      { id: "Sieq", qty: 1 },
    ],
    awaken: [
      { type: "water", grade: "high", qty: 12 },
      { type: "water", grade: "mid", qty: 15 },
      { type: "magic", grade: "high", qty: 7 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
  },

  Sieq: {
    id: "Sieq",
    name: "Sieq",
    stars: 2,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Sieq_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 2 },
      { type: "fire", grade: "low", qty: 15 },
      { type: "magic", grade: "low", qty: 15 },
    ],
  },

   Ragion: {
    id: "Ragion",
    name: "Ragion",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Ragion_Icon.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

   Nubia: {
    id: "Nubia",
    name: "Nubia",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2015/10/Nubia-Water.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Shailoq: {
    id: "Shailoq",
    name: "Shailoq",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2017/03/unit_icon_0005_0_0.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Geoffrey: {
    id: "Geoffrey",
    name: "Geoffrey",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Geoffrey_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 5 },
      { type: "fire", grade: "low", qty: 15 },
      { type: "magic", grade: "mid", qty: 5 },
      { type: "magic", grade: "low", qty: 10 },
    ],
  },

  Ifrit: {
    id: "Ifrit",
    name: "Ifrit",
    stars: 5,
    element: "dark",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2015/03/Ifrit-Dark.png",
    recipe: [
      { id: "Argen", qty: 1 },
      { id: "Akia", qty: 1 },
      { id: "Mikene", qty: 1 },
      { id: "Kumae", qty: 1 },
    ],
  },

  Mikene: {
    id: "Mikene",
    name: "Mikene",
    stars: 4,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Mikene_Icon.png",
    recipe: [
      { id: "Gruda", qty: 1 },
      { id: "Hemos", qty: 1 },
      { id: "Anduril", qty: 1 },
      { id: "Cogma", qty: 1 },
    ],
    awaken: [
      { type: "water", grade: "high", qty: 10 },
      { type: "water", grade: "mid", qty: 20 },
      { type: "magic", grade: "high", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
  },

  Cogma: {
    id: "Cogma",
    name: "Cogma",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/08/Cogma-Fire.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "low", qty: 20 },
      { type: "magic", grade: "low", qty: 15 },
    ],
  },

  Anduril: {
    id: "Anduril",
    name: "Anduril",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Anduril_Icon.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Hemos: {
    id: "Hemos",
    name: "Hemos",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Hemos_Icon.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Gruda: {
    id: "Gruda",
    name: "Gruda",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Gruda_Icon.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 15 },
      { type: "water", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },
  

  Argen: {
    id: "Argen",
    name: "Argen",
    stars: 4,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2017/01/Argen_Icon.png",
    recipe: [
      { id: "Eintau", qty: 1 },
      { id: "Velfinodon", qty: 1 },
      { id: "Iron", qty: 1 },
      { id: "Kacey", qty: 1 },
    ],
    awaken: [
      { type: "wind", grade: "high", qty: 12 },
      { type: "wind", grade: "mid", qty: 15 },
      { type: "magic", grade: "high", qty: 10 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
  },

  Kacey: {
    id: "Kacey",
    name: "Kacey",
    stars: 2,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/07/Kacey-Water.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "low", qty: 20 },
      { type: "magic", grade: "low", qty: 15 },
    ],
  },

  Iron: {
    id: "Iron",
    name: "Iron",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Iron_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

   Velfinodon: {
    id: "Velfinodon",
    name: "Velfinodon",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2014/11/Velfinodon-Wind.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Eintau: {
    id: "Eintau",
    name: "Eintau",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Eintau_Icon.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Kumae: {
    id: "Kumae",
    name: "Kumae",
    stars: 3,
    element: "dark",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Kumae_Icon.png",
    recipe: null,
    awaken: [
      { type: "dark", grade: "mid", qty: 1 },
      { type: "dark", grade: "low", qty: 15 },
      { type: "magic", grade: "low", qty: 20 },
    ],
  },

   Valkyrja: {
    id: "Valkyrja",
    name: "Valkyrja",
    stars: 5,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2017/02/Valkyrja_Wind_Icon.png",
    recipe: [
      { id: "Baretta", qty: 1 },
      { id: "Mikene", qty: 1 },
      { id: "Arang", qty: 1 },
      { id: "Shakan", qty: 1 },
    ],
  },

  Baretta: {
    id: "Baretta",
    name: "Baretta",
    stars: 4,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2017/01/Baretta_Icon.png",
    recipe: [
      { id: "Fao", qty: 1 },
      { id: "Mei", qty: 1 },
      { id: "Sharron", qty: 1 },
      { id: "Lukan", qty: 1 },
    ],
    awaken: [
      { type: "fire", grade: "high", qty: 10 },
      { type: "fire", grade: "mid", qty: 20 },
      { type: "magic", grade: "high", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
    ],
  },

  Lukan: {
    id: "Lukan",
    name: "Lukan",
    stars: 2,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2018/06/Lukan_Icon.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "low", qty: 20 },
      { type: "magic", grade: "mid", qty: 2 },
      { type: "magic", grade: "low", qty: 10 },
    ],
  },

  Sharron: {
    id: "Sharron",
    name: "Sharron",
    stars: 3,
    element: "water",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Sharron_Icon.png",
    recipe: null,
    awaken: [
      { type: "water", grade: "mid", qty: 20 },
      { type: "water", grade: "low", qty: 5 },
      { type: "magic", grade: "mid", qty: 15 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Mei: {
    id: "Mei",
    name: "Mei",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Mei_Icon.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Fao: {
    id: "Fao",
    name: "Fao",
    stars: 3,
    element: "fire",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2017/03/unit_icon_0005_1_0.png",
    recipe: null,
    awaken: [
      { type: "fire", grade: "mid", qty: 15 },
      { type: "fire", grade: "low", qty: 10 },
      { type: "magic", grade: "mid", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
    ],
  },

  Shakan: {
    id: "Shakan",
    name: "Shakan",
    stars: 3,
    element: "wind",
    img:"https://summonerswarskyarena.info/wp-content/uploads/2016/12/Shakan_Icon.png",
    recipe: null,
    awaken: [
      { type: "wind", grade: "mid", qty: 15 },
      { type: "wind", grade: "low", qty: 10 },
      { type: "magic", grade: "low", qty: 5 },
      { type: "magic", grade: "mid", qty: 10 },
    ],
  },
};
