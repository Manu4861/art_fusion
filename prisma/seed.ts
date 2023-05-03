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
