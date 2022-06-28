import { prisma } from "../../../../database/prismaClient";


export class FindBibliotecarioByNameUseCase {
    async execute(nome: string) {
        const bibliotecario = await prisma.bibliotecario.findMany({
            where: {
                nome: {
                    equals: nome,
                    mode: "insensitive",
                }
            }
        })
        return bibliotecario
    }
}