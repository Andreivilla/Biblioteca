import { Request, Response } from "express";
import { CreateBibliotecarioUseCase } from "./createBibliotecarioUseCase";

export class CreateBibliotecarioController {
    async handle(request: Request, response: Response) {
        const createBibliotecarioUseCase = new CreateBibliotecarioUseCase();
        const {  cpf, nome } = request.body;

        const result = await createBibliotecarioUseCase.execute({
            cpf, 
            nome
        })
        return response.json(result)
    }
}