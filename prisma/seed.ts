import { PrismaClient, Prisma } from '@prisma/client';

const client = new PrismaClient();

const getArtist = (): Prisma.ArtistCreateManyInput[] => [
  {
    date_of_birth: '1995-07-21',
    password: 'password123',
    phone_no: 1234567890,
    age: 27,
    address: '123 Main St, Anytown USA',
    physical_details: ['5\'9"', '160 lbs', 'brown hair'],
    expected_payment: true,
    skill: 'painting',
    a_id: "",

    id_proof: "hbjh",
    email: 'jhon@example.com',
    name: 'John Doe',
    session_details: 112,
    pp_id: "101",
    category: "Painter",
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
    a_id:"",
    id_proof: "",
    email: 'sunil@example.com',
    name: 'Sunil',
    session_details: 222,
    pp_id: "212",
    category: "Dancer",
   
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
    a_id:"",
    id_proof: "photo",
    email: 'chandhu@example.com',
    name: 'Chandhu',
    session_details:11,
    pp_id: "001",
    category: "Camere men",
   
  }
]

const getPrevprojects = (pp_id: string): Prisma.prev_projectsCreateManyInput[] => [
  {
    link: "http//",
    production_name: "acbee",
    project_name: "Akash",
    released_date: '2024-07-21',
    technician_role: "Light men",
  },
  {
    link: "http//",
    production_name: "aa2454",
    project_name: "Sharath",
    released_date: '2025-01-19',
    technician_role: "Light men",
  },
  {
    link: "http//",
    production_name: "111acbee",
    project_name: "Gagan",
    released_date: '1995-07-21',
    technician_role: "Light men",
  }
]

const getCategory = (cat_type: String, Artist: String): Prisma.role_categoryCreateManyInput[] => [
  {
    cat_type: "Painter",
  },
  {
    cat_type: "Light men",

  },
  {
    cat_type: "Script writer",

  }
]

const getSession = (): Prisma.session_detailsCreateManyInput[] => [
  {
    login_date: '2023-04-21',
    s_id: 125,
  },
  {
    login_date: '2022-01-11',
    s_id: 125,
  },
  {
    login_date: '2023-09-01',
    s_id: 125,
  }
]

const getProductionowner = (): Prisma.Production_ownerCreateInput[] => [
  {
    address: "",
    age: 12,
    date_of_birth: '2023-04-21',
    email_id: "aaazam@gmail.com",
    id_proof: "photo",
    name: "Aazma",
    password: "abc123",
    phone_no: 9574587454,
    po_id:"2165",
    session:202321,
    
  }
]
const ProductionProfile = (): Prisma.ProductionProfileCreateManyInput[] => [
  {
    address:"Tamil nadu",
    artist_id:"454",
    budget:5454,
    duration:11,
    genere:"Action",
    no_of_shooting_days:12,
    p_owner_id:"400",
    payment_provided :true,
    poster:"Death road",
    release_date:'2023-04-21',
    restrictions:"T&C",
    title:"Death road",
  },
  {
    address:"Karnataka",
    artist_id:"125",
    budget:54554,
    duration:20,
    genere:"Romantic",
    no_of_shooting_days:10,
    p_owner_id:"101",
    payment_provided :true,
    poster:"Heaven",
    release_date:'2023-04-21',
    restrictions:"T&C",
    title:"Heaven",
  },
  {
    address:"Bengaluru",
    artist_id:"787",
    budget:121224,
    duration:11,
    genere:"Sc-friction",
    no_of_shooting_days:12,
    p_owner_id:"400",
    payment_provided :true,
    poster:"Bake",
    release_date:'2023-04-21',
    restrictions:"T&C",
    title:"Death road",
  }
]
const getgenerecategory = (): Prisma.genere_categoryCreateManyInput[] => [
  {
    genere_type:"Dancer",
  },
  {
    genere_type:"Actor",
  },
  {
    genere_type:"Camera men",
  }
]
main()
    .then(() => {
        console.log("Successfully Seeded");
    })
    .catch((e) => {
        console.log(e);
    });
function main() {
  throw new Error('Function not implemented.');
}

