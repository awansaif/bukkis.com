// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export default async function handler(req, res) {
  const data = await prismaClient.user.findMany();
  res.status(200).json({ name: "John Doe", data: data });
}
