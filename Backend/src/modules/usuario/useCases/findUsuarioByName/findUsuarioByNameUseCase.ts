import { prisma } from "../../../../database/prismaClient";


export class FindUsuarioByNameUseCase {
    async execute(nome: string) {
        const usuario = await prisma.usuario.findMany({
            where: {
                nome: {
                    equals: nome,
                    mode: "insensitive",
                }
            }
        })
        return usuario
    }
}