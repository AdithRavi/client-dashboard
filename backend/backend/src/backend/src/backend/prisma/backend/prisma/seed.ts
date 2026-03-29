import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "admin@test.com",
      password: "123",
      role: "ADMIN"
    }
  });
}

main();
