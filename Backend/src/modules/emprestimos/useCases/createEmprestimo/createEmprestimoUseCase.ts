import { prisma } from "../../../../database/prismaClient";


export class CreateEmprestimoUseCase {
    async execute(livroid: number, usuarioId:number) {       	
        const moment = require("moment");  

        const itemEmpr = await prisma.itemEmpr.findUnique({
            where: {
                livroid: livroid
            }
        });
        if (itemEmpr) {
        }else {        // ou cria um novo
            const itemEmpr = await prisma.itemEmpr.create({
                data: {
                    livroid: livroid,
                    numRenovacoes: 0
                },
            });
        }

        // verificar se o livro é da colecao de reserva
        const livro = await prisma.livro.findUnique({
            where: {
                id_livro: livroid
            }
        });

        if (livro){
            if(livro.colecaoId == 1 ){
                throw new Error("Livro de Colecao Reserva nao pode ser emprestado ou reservado")
            }
        }


        // checar se o livro ja foi emprestado
        const empresta = await prisma.empresta.findFirst({
            where: {
                itemEmprId: livroid
            }
        });

        if (empresta){ //se existe emprestimo 
            throw new Error("O livro ja foi emprestado")
        }
    
        
    let data_empre = moment().format();
     //checar se tem reserva para essa data
    const reserva = await prisma.reserva.findFirst({
        where: {
            itemEmprId: livroid
        },
    });
    if (reserva){
        if (reserva.usuarioId = usuarioId){
        } else {
            throw new Error("livro reservado por outra")
        }
    } else {

    }

        const emprestapronta = await prisma.empresta.create({
            data: {
                data_empr: data_empre,
                usuarioId: usuarioId,
                itemEmprId: livroid
            }
            });
            return  emprestapronta 
    }
    
}