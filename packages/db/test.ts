import { prisma } from "./index";

const user = await prisma.user.create({
  data: { email: `test${Date.now()}@example.com`, name: "Test" },
});
console.log("Created:", user);

const users = await prisma.user.findMany();
console.log("All users:", users);

await prisma.$disconnect();