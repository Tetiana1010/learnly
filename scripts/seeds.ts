const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Web Development" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Filming" },
        { name: "Engineering" },
        { name: "Accounting" },
        { name: "Photography" },
      ],
    });

    console.log("Categories seeded successfully");
  } catch (error) {
    console.error("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
