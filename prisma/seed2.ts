import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.artist.deleteMany();
 
  for (let i = 0; i < 10; i++) {
    await prisma.artist.create({
      data: {
        email: faker.internet.email("jack"),
        password: faker.internet.password(),
        address: faker.lorem.sentences(),
        age: faker.datatype.number(),
        date_of_birth: faker.datatype.string(),
        expected_payment: faker.datatype.boolean(),
        id_proof: faker.datatype.string(),
        name: faker.name.fullName(),
        phone_no: faker.datatype.number(10),
        skill: faker.lorem.sentences(),
      },});}}

      main()
  .then(() => console.log("Data seeded successfully"))
  .catch((e) => console.log(e))
  .finally(async () => await prisma.$disconnect());