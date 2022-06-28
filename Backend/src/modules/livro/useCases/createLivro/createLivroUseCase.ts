import { prisma } from "../../../../database/prismaClient";

interface ICreateLivro {
    editora: string,
    isbn: string,
    titulo: string,
    autores: string,
    capalivro: string,
    colecaoId: number,
    itemEmprid: number
}





export class CreateLivroUseCase {
    async execute({ 
        editora,
        isbn,
        titulo,
        autores,
        capalivro,
        colecaoId,
        itemEmprid
    }: ICreateLivro) {

        const livro = await prisma.livro.create({
            data: {
                editora,
                isbn,
                titulo,
                autores,
                capalivro,
                colecaoId,
                itemEmprid
            },
        });


    }
}