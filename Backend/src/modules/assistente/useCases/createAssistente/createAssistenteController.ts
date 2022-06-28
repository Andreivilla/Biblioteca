import { Request, Response } from "express";
import { CreateAssistenteUseCase } from "./CreateAssistenteUseCase";

export class CreateAssistenteController {
    async handle(request: Request, response: Response) {
        const createAssistenteUseCase = new CreateAssistenteUseCase();
        const {  cpf, nome, bibliotecarioId} = request.body;

        const result = await createAssistenteUseCase.execute({
            cpf, 
            nome,
            bibliotecarioId
        })
        return response.json(result)
    }
}