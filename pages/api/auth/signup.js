// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export default async function handler(req, res) {
  const salt = bcrypt.genSaltSync(10);
  const password = bcrypt.hashSync(req.body.password, salt);
  const checkUserEmail = await prismaClient.user.findUnique({
    where: {
      email: req.body.email,
    },
  });
  if (checkUserEmail) {
    res.status(400).json({ error: "Email already exists" });
  }
  const checkUsername = await prismaClient.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  if (checkUsername) {
    res.status(400).json({ error: "Username already exists" });
  }
  const data = await prismaClient.user.create({
    data: {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: password,
    },
  });

  if (data) {
    res.status(200).json({ message: "User created successfully" });
  } else {
    res.status(500).json({ error: "Something went wrong" });
  }
}
