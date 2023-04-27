import { PrismaClient, category } from '@prisma/client';

const prisma = new PrismaClient();


async function seedCategories(): Promise<category[]> {
  const categories = await prisma.category.createMany({
    data: [
      { cat_type: "Example Category 1" },
      { cat_type: "Example Category 2" },
      { cat_type: "Example Category 3" },
      { cat_type: "Example Category 4" },
      { cat_type: "Example Category 5" },
    ],
  });
  return categories;
}

seedCategories()
  .then((categories) => {
    console.log(categories); // Logs the inserted categories to the console
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect(); // Disconnects from the database
  });
