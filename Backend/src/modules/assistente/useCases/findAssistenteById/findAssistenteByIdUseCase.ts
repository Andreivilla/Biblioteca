import { prisma } from "../../../../database/prismaClient";


export class FindAssistenteByIdUseCase {
    async execute(id_assistente: number) {
        const assistente = await prisma.assistente.findUnique({
            where: {
                id_assistente: id_assistente,
            },
        });
        return assistente
    }
}