import { Request, Response } from "express";
import { CreateLivroUseCase } from "./CreateLivroUseCase";

export class CreateLivroController {
    async handle(request: Request, response: Response) {
        const createLivroUseCase = new CreateLivroUseCase();
        const {   
            editora,
            isbn,
            titulo,
            autores,
            capalivro,
            colecaoId,
            itemEmprid
         } = request.body;

        const result = await createLivroUseCase.execute({
            editora,
            isbn,
            titulo,
            autores,
            capalivro,
            colecaoId,
            itemEmprid
        })
        return response.json(result)
    }
}