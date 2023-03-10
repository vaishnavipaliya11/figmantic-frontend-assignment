import { v4 as uuid } from "uuid";
const data = [
  {
    id: uuid(),
    img: "https://media.istockphoto.com/photos/craftsman-bungalow-house-picture-id1188457556?k=20&m=1188457556&s=612x612&w=0&h=0rrr5193EnHE06aCpq1H32UYUM2u2wFX_kw6eCs4QRY=",
    updated: "20 / 10 / 2020",
    type: "bunglow",
    time: "5",
    lessons: 5,
    Purpose: "Sales",
    status:"LIVE"
  },
  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2j5EFdb_n_nomsENBWhToyfzGeta0T7iwEg&usqp=CAU",
    updated: "20 / 10 / 2022",
    type: "flats",
    time: "5",
    lessons: 3,
    Purpose: "Sales,Marketing",
    status:"archieved"
  },
  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLhvkWLId9eDb4_kp7wxJ4Z3owICfg0Q8KQ&usqp=CAU",
    updated: "05 / 11 / 2020",
    type: "bunglow",
    time: "5",
    lessons: 3,
    Purpose: "Sales",
    status:"LIVE"
  },
  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjRu6TACQIObdvCkuP99sPB4zYVM7zvOmNQ&usqp=CAU",
    updated: "05 / 11 / 2020",
    type: "yurt",
    time: "5",
    lessons: 3,
    status:"archieved",
    Purpose: "Sales,Marketing",
  },
  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBobxYJbgGfviYGqPhqGM2kWdhk_c-FoZaw&usqp=CAU",
    updated: "20 / 10 / 2020",
    type: "bunglow",
    time: "5",
    lessons: 4,
    location: "Pune,Maharashatra",
    status:"Draft"
  },
  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22yw_yI1DXBnuoMd-T98gYVUp30tNf67NBg&usqp=CAU",
    updated: "20 / 10 / 2022",
    type: "flats",
    time: "5",
    lessons: 2,
    Purpose: "Sales ,Marketing",
    status:"LIVE"
  },

  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcDDoLo6_TaolgQirMDa-loQV9ginSt1VqQ&usqp=CAU",
    updated: "05 / 11 / 2020",
    type: "wooden",
    time: "5",
    lessons: 5,
    status:"archieved"
  },
  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlcjm-eYNwQdtcm-Tn2yjsu67HEjkZUKAew&usqp=CAU",
    updated: "20 / 10 / 2020",
    type: "flats",
    time: "5",
    lessons: 3,
    Purpose: "Sales ,Marketing",
    status:"LIVE"
  },
  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AL_WZhzbrQdgZH2cksQL7w8P_OUp1odJgA&usqp=CAU",
    updated: "20 / 10 / 2022",
    type: "wooden",
    time: "5",
    lessons: 2,
    Purpose: "Marketing",
    status:"LIVE"
  },

  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5oD-tipnpmyUsJrSvy0j1cc9I0cXO3EOLA&usqp=CAU",
    updated: "20 / 10 / 2020",
    type: "flats",
    time: "5",
    rating: 3,
    Purpose: "Marketing",
    status:"archieved"
  },
  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxq3ZdRC4uxgD0qzVSKiCxKthLU_I4CiBYWA&usqp=CAU",
    updated: "20 / 10 / 2022",
    type: "bunglow",
    time: "5",
    lessons: 2,
    Purpose: "Sales,Marketing",
    status:"LIVE"
  },
  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh3H7gKPfG2WzdJHzzaztN40VPm-IONyrveA&usqp=CAU",
    updated: "05 / 11 / 2020",
    type: "flats",
    time: "5",
    lessons: 3,
    Purpose: "Sales,Marketing",
    status:"archieved"
  },

  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvwGmgvvbe2NZEmVT2PSfed6TjarpfeRArA&usqp=CAU",
    updated: "05 / 11 / 2020",
    type: "flats",
    time: "1",
    rating: 5,
    Purpose: "Sales,Marketing",
    status:"Draft"
  },
  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh303dX5sG_k0WcYcvNM2ARau0hSbT1h6Arg&usqp=CAU",
    updated: "20 / 10 / 2022",
    type: "flats",
    time: "2",
    lessons: 4,
    Purpose: ",Marketing",
    status:"LIVE"
  },

  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2nC--OC9PuojKz8Lur0h6tyd-dAHWUtjIA&usqp=CAU",
    updated: "05 / 11 / 2020",
    type: "flats",
    time: "3",
    lessons: 4,
    Purpose: "Sales,Marketing",
    status:"archieved"
  },
  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WwhiYJQZPJWPtvWTtTMeBGGpLrk83IZG6w&usqp=CAU",
    updated: "20 / 10 / 2022",
    type: "yurt",
    time: "5",
    lessons: 2,
    Purpose: ",Marketing",
    status:"LIVE"
  },

  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpHQwYuxYGz4_7G7PzseUiLaASnUJ22b-hLQ&usqp=CAU",
    updated: "30 / 6 / 2022",
    type: "flats",
    time: "4",
    lessons: 4,
    Purpose: "Sales,Marketing",
    status:"Draft"
  },
  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX02Q1x8nsxCMe9Qc9a7fMb6ZxEScmUNAtvw&usqp=CAU",
    updated: "09 / 07 / 2022",
    type: "yurt",
    time: "5",
    lessons: 5,
    Purpose: "Sales,",
    status:"LIVE"
  },
  {
    id: uuid(),
    img: "https://i.ytimg.com/vi/-Pf2A9ZPTn0/maxresdefault.jpg",
    updated: "15 / 10 / 2022",
    type: "wooden",
    time: "8",
    rating: 2,
    Purpose: "Sales,Marketing",
    status:"archieved"
  },
  {
    id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlh6gNMTeIh7j8oCw0C_OhMlgHTCzHaOh1tg&usqp=CAU",
    updated: "05 / 11 / 2020",
    type: "yurt",
    time: "5",
    lessons: 3,
    Purpose: "Sales,",
    status:"Draft"
  },
 
];

export { data };
