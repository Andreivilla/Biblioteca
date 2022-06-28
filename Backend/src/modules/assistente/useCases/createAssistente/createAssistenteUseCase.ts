import { prisma } from "../../../../database/prismaClient";

interface ICreateAssistente {
    cpf: string,
    nome: string,
    bibliotecarioId: number,
}



export class CreateAssistenteUseCase {
    async execute({ 
      cpf, nome,bibliotecarioId
    }: ICreateAssistente) {

        const assistente = await prisma.assistente.create({
            data: {
                cpf, 
                nome,
                bibliotecarioId
            },
        });


    }
}