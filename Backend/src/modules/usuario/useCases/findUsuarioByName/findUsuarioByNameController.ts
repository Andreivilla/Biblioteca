
import { Request, Response } from "express";
import { FindUsuarioByNameUseCase } from "./findUsuarioByNameUseCase";

export class FindUsuarioByNameController {
    async handle(request: Request, response: Response) {
        const findUsuarioByNameUseCase = new FindUsuarioByNameUseCase();
        const { nome } = request.body;
        const result = await findUsuarioByNameUseCase.execute(nome);
        return response.json(result);
    }
}