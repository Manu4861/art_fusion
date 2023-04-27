import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seeddatabase() { 
  const role_category = [
    { cat_type: "Actor" },
    { cat_type: "Dancer" },
    { cat_type: "Musician" },
    { cat_type: "Director" },
    { cat_type: "Cheorographer" },
  ];
  try {
    const createdroleCategories = await prisma.role_category.createMany({
      data: role_category,
    });
    console.log(createdroleCategories); 
  }  catch (error) {
    console.error(error);
  }

    await prisma.$disconnect(); 
}

seeddatabase()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect(); // Disconnects from the database
  });
