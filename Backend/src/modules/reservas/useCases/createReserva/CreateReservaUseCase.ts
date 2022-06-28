import { prisma } from "../../../../database/prismaClient";


export class CreateReservaUseCase {
    async execute(livroid: number,usuarioId:number) {       	
        const moment = require("moment");  
        let data_reserva;

        const itemEmpr = await prisma.itemEmpr.findUnique({
            where: {
                livroid: livroid
            }
        })
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
        })
        if (livro){
            if(livro.colecaoId == 1 ){
                throw new Error("Livro de Colecao Reserva nao pode ser emprestado ou reservado")
            }
        }

        data_reserva = moment().format();
        

        const reservapronta = await prisma.reserva.create({
            data: {
                data_reserva: data_reserva,
                usuarioId: usuarioId ,
                itemEmprId: livroid
            },       
            });
            return  reservapronta  
         }

    }