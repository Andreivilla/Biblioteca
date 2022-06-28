import { prisma } from "../../../../database/prismaClient";


export class FindAllUsuarioUseCase {
    async execute() {
        const usuario = await prisma.usuario.findMany({
            where: {
            },
        });
        return usuario
    }
}