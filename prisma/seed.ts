<<<<<<< HEAD
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

=======
import { Prisma, PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const client = new PrismaClient();

const main = async () => {
  await client.gener_on_prod.deleteMany();
  await client.productionProfiles.deleteMany();
  await client.genere_category.deleteMany();
  await client.artists.deleteMany();
  await client.prev_projects.deleteMany();

  for (let i = 0; i < 10; i++) {
    const roles = ["ARTIST", "PROD_OWNER"];
    const techroles = [
      "Camera Man",
      "Director",
      "Editor",
      "Muscian",
      "Voice Artist",
    ];
    const randomIndex = Math.floor(Math.random() * roles.length);
    await client.artists.create({
      data: {
        name: faker.name.fullName(),
        address: `${faker.address.streetAddress()}, ${faker.address.cityName()}, ${faker.address.zipCode()}`,
        age: parseInt(faker.random.numeric(2)),
        date_of_birth: faker.date.past().getUTCDate().toString(),
        email: faker.internet.email(),
        expected_payment: faker.datatype.boolean(),
        id_proof: faker.image.people(),
        password: faker.internet.password(),
        phone_no: faker.phone.number("+91 ##### #####"),
        physical_details: "Eye Color - Brown",
        // @ts-ignore
        role_type: roles[randomIndex],
        skill: faker.random.words(10),
        prev_project: {
          create: {
            link: faker.image.unsplash.technology(),
            production_name: faker.company.name(),
            project_name: faker.commerce.productName(),
            released_date: faker.date.past().toString(),
            technician_role: techroles[randomIndex],
          },
        },
      },
    });
  }

  await client.genere_category.createMany({
    data: [
      {
        genere_type: "Horor",
      },
      {
        genere_type: "Comedy",
      },
      {
        genere_type: "Thriller",
      },
      {
        genere_type: "Drama",
      },
      {
        genere_type: "Sci-Fi",
      },
    ],
  });

  const prod_owners = await client.artists.findMany({
    where: {
      role_type: "PROD_OWNER",
    },
  });

  const geners = await client.genere_category.findMany();

  await Promise.all(
    prod_owners.map(async (prod_owner) => {
      await client.productionProfiles.create({
        data: {
          address: `${faker.address.streetAddress()}, ${faker.address.cityName()}, ${faker.address.zipCode()}`,
          budget: parseInt(faker.finance.amount(8)),
          duration: parseInt(faker.random.numeric(1)),
          no_of_shooting_days: parseInt(faker.random.numeric(1)),
          p_owner_id: prod_owner.id,
          payment_provided: faker.datatype.boolean(),
          poster: faker.image.abstract(),
          release_date: faker.date.future(2),
          restrictions: `No Smoking, No alchoal`,
          title: faker.lorem.word(2),
        },
      });
    })
  );

  const production_profiles = await client.productionProfiles.findMany();
  await Promise.all(
    production_profiles.map(async (prod_profiles) => {
      const randomIndex = Math.floor(Math.random() * geners.length);
      await client.gener_on_prod.create({
        data: {
          genere: geners[randomIndex].genere_type,
          prod_id: prod_profiles.id,
        },
      });
    })
  );
};

main()
  .then(() => {
    console.log("success");
  })
  .catch((e) => {
    console.log(e);
  });
>>>>>>> fdee948052560278b939ef0557b1b713cbc26ecf
