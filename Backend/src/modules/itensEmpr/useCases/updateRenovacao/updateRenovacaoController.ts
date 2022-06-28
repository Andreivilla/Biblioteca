import { Request, Response } from "express";
import { UpdateRenovacaoUseCase } from "./updateRenovacaoUseCase";

export class UpdateRenovacaoController{
    async handle(request: Request, response: Response) {
        const updateRenovacaoUseCase = new UpdateRenovacaoUseCase();
        const { livroid } = request.body;

        const result = await updateRenovacaoUseCase.execute(livroid)
        return response.json(result)
    }
}