import { prisma } from "../../../../database/prismaClient";


export class GetTipoByIdUseCase {
    async execute(id_tipo: number) {
        const tipo = await prisma.tipo.findMany({
            where: {
                id_tipo: id_tipo
            },
        });
        return tipo
    }
}