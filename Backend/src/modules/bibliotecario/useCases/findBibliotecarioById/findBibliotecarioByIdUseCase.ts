import { prisma } from "../../../../database/prismaClient";


export class FindBibliotecarioByIdUseCase {
    async execute(id_bibliotecario: number) {
        const bibliotecario = await prisma.bibliotecario.findUnique({
            where: {
                id_bibliotecario: id_bibliotecario,
            },
        });
        return bibliotecario
    }
}