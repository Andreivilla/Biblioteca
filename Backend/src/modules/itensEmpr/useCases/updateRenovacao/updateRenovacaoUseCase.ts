import { prisma } from "../../../../database/prismaClient";


export class UpdateRenovacaoUseCase {
    async execute(livroid : number) {
        const itemEmpr = await prisma.itemEmpr.findUnique({
            where: {
                livroid: livroid
            }
        });
        if(itemEmpr){
        
        if (itemEmpr.numRenovacoes >= 3 ){
            throw new Error("Numero de Renovacoes esgotado")
        }
        const item = await prisma.itemEmpr.update({
            where: {
                livroid: livroid
            },
            data: {
                numRenovacoes : itemEmpr.numRenovacoes+1
            }
        });

        }
    }
}