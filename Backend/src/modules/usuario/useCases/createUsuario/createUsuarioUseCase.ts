import { prisma } from "../../../../database/prismaClient";

interface ICreateUsuario {
    multas: number,
    numLivros: number,
    nome: string,
    endereco: string,
    telefone: string,
    idtipo: number
}



export class CreateUsuarioUseCase {
    async execute({ 
        multas,
        numLivros,
        nome,
        endereco,
        telefone,
        idtipo
    }: ICreateUsuario) {

        const usuario = await prisma.usuario.create({
            data: {
            multas,
            numLivros,
            nome,
            endereco,
            telefone,
            idtipo
            },
        });


    }
}