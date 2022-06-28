import { prisma } from "../../../../database/prismaClient";


export class ResetRenovacoesUseCase {
    async execute(livroid : number) {
                const itemEmpr = await prisma.itemEmpr.update({
                    where: {
                        livroid: livroid
                    },
                    data:{
                        numRenovacoes: 0
                    }
                });

                const empresta = await prisma.empresta.deleteMany({
                    where: {
                        itemEmprId: livroid
                    }
                });
    }
}