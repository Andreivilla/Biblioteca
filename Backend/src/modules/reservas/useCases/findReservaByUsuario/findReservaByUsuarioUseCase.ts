import { prisma } from "../../../../database/prismaClient";


export class FindReservaByUsuarioUseCase {
    async execute(usuarioId: number) {
        const reservas = await prisma.reserva.findMany({
            where: {
                usuarioId: usuarioId
            }
        });
        return reservas
    }
}