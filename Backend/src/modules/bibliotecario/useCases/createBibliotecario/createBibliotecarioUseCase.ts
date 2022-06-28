import { prisma } from "../../../../database/prismaClient";

interface ICreateBibliotecario {
    cpf: string,
    nome: string
}


export class CreateBibliotecarioUseCase {
    async execute({ 
      cpf, nome
    }: ICreateBibliotecario) {

        const bibliotecario = await prisma.bibliotecario.create({
            data: {
                cpf, 
                nome
            },
        });


    }
}