import { Request, Response } from "express";
import { CreateUsuarioUseCase } from "./createUsuarioUseCase";

export class CreateUsuarioController {
    async handle(request: Request, response: Response) {
        const createUsuarioUseCase = new CreateUsuarioUseCase();
        const {  multas,numLivros, nome, endereco, telefone, idtipo } = request.body;

        const result = await createUsuarioUseCase.execute({
            multas,
            numLivros,
            nome,
            endereco,
            telefone,
            idtipo
        })
        return response.json(result)
    }
}