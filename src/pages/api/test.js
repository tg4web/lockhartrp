import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function Test(req, res){

    try {
        await prisma.user.create({
            data: {
                id: '1',
                name: "Alice",
                age: 30,
                email: "test@mail.com"
            }
        })
        res.status(200).json({User: 'Created'})
    } catch (error) {
        console.log(error)
        res.status(400).json({ User: 'Not Created' });
    }
}
