import { prisma } from "../../../../database/prismaClient";


export class FindLivroByNameUseCase {
    async execute(titulo: string) {
        const livro = await prisma.livro.findMany({
            where: {
                titulo: titulo,
            },
        });
        return livro
    }
}