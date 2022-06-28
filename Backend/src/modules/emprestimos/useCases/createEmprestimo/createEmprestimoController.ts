import { Request, Response } from "express";
import { CreateEmprestimoUseCase } from "./createEmprestimoUseCase";

export class CreateEmprestimoController {
    async handle(request: Request, response: Response) {
        const createEmprestimoUseCase = new CreateEmprestimoUseCase();
        const { livroid,usuarioId } = request.body;
        const result = await createEmprestimoUseCase.execute(livroid,usuarioId);
        return response.json(result);
    }
}