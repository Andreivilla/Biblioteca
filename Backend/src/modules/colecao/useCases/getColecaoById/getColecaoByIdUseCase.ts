import { prisma } from "../../../../database/prismaClient";


export class GetColecaoByIdUseCase {
    async execute(id_colecao: number) {
        const colecao = await prisma.colecao.findMany({
            where: {
                id_colecao: id_colecao,
            },
        });
        return colecao
    }
}