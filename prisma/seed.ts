import { PrismaClient, Prisma } from '@prisma/client';

const client = new PrismaClient();

const getartist = (): Prisma.ArtistCreateInput[] => [
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


    categorys: {
      connect: { cat_type: 'painter' }
    },
    prev_project: {
      connect: { pp_id: 'a1' }
    },
    session: {
      connect: { s_id: 123 }
    }
  }]

const Main = () => {
  return Promise.all(getartist().map((artistInput) => client.artist.create({
    data: artistInput
  })))
}

Main().then(() => {
  console.log("Successfully seeded")
}).catch((e) => {
  console.log("error")
})