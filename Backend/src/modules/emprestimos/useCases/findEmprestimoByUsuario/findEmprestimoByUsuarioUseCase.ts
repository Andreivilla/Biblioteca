import { prisma } from "../../../../database/prismaClient";


export class FindEmprestimoByUsuarioUseCase {
    async execute(usuarioId: number) {
        const emprestimo = await prisma.empresta.findMany({
            where: {
                usuarioId: usuarioId
            }
        });
        return emprestimo
    }
}