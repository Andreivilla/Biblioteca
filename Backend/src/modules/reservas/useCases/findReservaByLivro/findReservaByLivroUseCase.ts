import { prisma } from "../../../../database/prismaClient";


export class FindReservaByLivroUseCase {
    async execute(itemEmprId: number) {
        const reservas = await prisma.reserva.findMany({
            where: {
                itemEmprId: itemEmprId
            },
        });
        return reservas
    }
}