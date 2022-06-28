import { prisma } from "../../../../database/prismaClient";


export class FindAssistenteByNameUseCase {
    async execute(nome: string) {
        const assistente = await prisma.assistente.findMany({
            where: {
                nome: {
                    equals: nome,
                    mode: "insensitive",
                }
            }
        })
        return assistente
    }
}