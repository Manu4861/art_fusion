import { Prisma, PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const getArtist = (): Prisma.ArtistCreateInput[] => [
  {
    date_of_birth: '1995-07-21',
    password: 'password123',
    phone_no: 1234567890,
    age: 27,
    address: '123 Main St, Anytown USA',
    physical_details: ['5\'9"', '160 lbs', 'brown hair'],
    expected_payment: true,
    skill: 'painting',
    a_id:"",
    
    id_proof: "hbjh",
    email: 'jhon@example.com',
    name: 'John Doe',
    
    
    categorys: {
      connect: { cat_type: 'painter' }
    },
    prev_project: {
      connect: { pp_id: 'a1' }
    },
    session: {
      connect: { s_id: 123 }
    }
  },

  {
    date_of_birth: '1990-10-09',
    password: 'password123',
    phone_no: 9789456123,
    age: 33,
    address: 'Anytown USA',
    physical_details: ['6\'1"', '160 lbs', 'black hair'],
    expected_payment: true,
    skill: 'dancer',
    id_proof: "",
    email: 'maxee@example.com',
    name: 'Maxee',
    categorys: {
      connect: { cat_type: 'dancer' }
    },
    prev_project: {
      connect: { pp_id: 'a2' }
    },
    session: {
      connect: { s_id: 101 }
    }
  },

  {
    date_of_birth: '2000-09-10',
    password: 'password123',
    phone_no: 5478962149,
    age: 23,
    address: 'Japan',
    physical_details: ['5\'7"', '155 lbs', 'gray hair'],
    expected_payment: true,
    skill: 'camera men',
    id_proof: "",
    email: 'alex@example.com',
    name: 'Alex',
    categorys: {
      connect: { cat_type: 'camera men' }
    },
    prev_project: {
      connect: { pp_id: 'a3' }
    },
    session: {
      connect: { s_id: 201 }
    }
  },
  {
    date_of_birth: '1990-10-09',
    password: 'password123',
    phone_no: 3245879654,
    age: 33,
    address: 'New york',
    physical_details: ['6', '160 lbs', 'brown hair'],
    expected_payment: true,
    skill: 'designer',
    id_proof: "",
    email: 'zoro@example.com',
    name: 'Zoro',
    categorys: {
      connect: { cat_type: 'designer' }
    },
    prev_project: {
      connect: { pp_id: 'a4' }
    },
    session: {
      connect: { s_id: 121 }
    }
  },

  {
    date_of_birth: '1998-01-23',
    password: 'password123',
    phone_no: 1234567890,
    age: 25,
    address: '123 Main St, Anytown USA',
    physical_details: ['5\'9"', '160 lbs', 'black hair'],
    expected_payment: true,
    skill: 'writer',
    id_proof: "",
    email: 'shoyo@example.com',
    name: 'Shoyo',
    categorys: {
      connect: { cat_type: 'writer' }
    },
    prev_project: {
      connect: { pp_id: 'a5' }
    },
    session: {
      connect: { s_id: 528 }
    }
  },

  {
    date_of_birth: '1989-12-21',
    password: 'password123',
    phone_no: 2547895478,
    age: 34,
    address: 'India',
    physical_details: ['5\'9"', '160 lbs', 'black hair'],
    expected_payment: true,
    skill: 'graphic designer',
id_proof: "",
    email: 'rahul@example.com',
    name: 'Rahul',
categorys: {
      connect: { cat_type: 'graphic designer' }
    },
    prev_project: {
      connect: { pp_id: 'a6' }
    },
    session: {
      connect: { s_id: 147 }
    }
  },

  {
    date_of_birth: '2000-06-19',
    password: 'password123',
    phone_no: 8745129487,
    age: 23,
    address: 'Bengaluru',
    physical_details: ['5\'5"', '169 lbs', 'white hair'],
    expected_payment: true,
    skill: 'dancer',
 id_proof: "",
    email: 'sunil@example.com',
    name: 'Sunil',
 categorys: {
      connect: { cat_type: 'dancer' }
    },
    prev_project: {
      connect: { pp_id: 'a7' }
    },
    session: {
      connect: { s_id: 100 }
    }
  },

  {
    date_of_birth: '2002-05-09',
    password: 'password123',
    phone_no: 1234567890,
    age: 21,
    address: 'Delhi',
    physical_details: ['6\'1"', '132 lbs', 'brown hair'],
    expected_payment: true,
    skill: 'editor',
  id_proof: "",
    email: 'chandhu@example.com',
    name: 'Chandhu',
  categorys: {
      connect: { cat_type: 'editor' }
    },
    prev_project: {
      connect: { pp_id: 'a8' }
    },
    session: {
      connect: { s_id: 489 }
    }
  },

  {
    date_of_birth: '1991-03-25',
    password: 'password123',
    phone_no: 5649785429,
    age: 32,
    address: 'Tokyo',
    physical_details: ['5\'7"', '160 lbs', 'white hair'],
    expected_payment: true,
    skill: 'Animator',
   id_proof: "",
    email: 'minato@example.com',
    name: 'Minato ',
   categorys: {
      connect: { cat_type: 'Animator' }
    },
    prev_project: {
      connect: { pp_id: 'a9' }
    },
    session: {
      connect: { s_id: 654 }
    }
  },

  {
    date_of_birth: '1998-01-23',
    password: 'password123',
    phone_no: 5475142587,
    age: 25,
    address: 'USA',
    physical_details: ['5\'8"', '160 lbs', 'black hair'],
    expected_payment: true,
    skill: 'camera men',
    id_proof: "",
    email: 'santosh@example.com',
    name: 'Santosh',
    categorys: {
      connect: { cat_type: 'camera men' }
    },
    prev_project: {
      connect: { pp_id: 'a10' }
    },
    session: {
      connect: { s_id: 258 }
    }
  },
]

const Main = async() => {
await Promise.all(getArtist().map(async(userInput) => await client.artist.create({
    data: userInput
  })))
}


Main().then(() => {
  console.log("Successfully seeded")
}).catch((e) => {
  console.log("error")
})