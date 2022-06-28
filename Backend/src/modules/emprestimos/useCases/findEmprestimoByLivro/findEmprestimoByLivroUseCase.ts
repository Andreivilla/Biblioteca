import { prisma } from "../../../../database/prismaClient";


export class FindEmprestimoByLivroUseCase {
    async execute(itemEmprId: number) {
        const emprestimo = await prisma.empresta.findMany({
            where: {
                itemEmprId: itemEmprId
            },
        });
        return emprestimo
    }
}