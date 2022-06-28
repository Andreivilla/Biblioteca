import { Request, Response } from "express";
import { ResetRenovacoesUseCase } from "./resetRenovacoesUseCase";

export class ResetRenovacoesController{
    async handle(request: Request, response: Response) {
        const resetRenovacoesUseCase = new ResetRenovacoesUseCase();
        const { livroid } = request.body;

        const result = await resetRenovacoesUseCase.execute(livroid)
        return response.json(result)
    }
}