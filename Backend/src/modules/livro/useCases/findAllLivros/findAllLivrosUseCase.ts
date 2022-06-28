import { prisma } from "../../../../database/prismaClient";

export class FindAllLivrosUseCase {
    async execute() {
        const livro = await prisma.Livro.findMany()
        return livro
    }
}