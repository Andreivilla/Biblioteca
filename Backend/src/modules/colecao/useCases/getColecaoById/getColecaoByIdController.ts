
import { Request, Response } from "express";
import { GetColecaoByIdUseCase } from "./getColecaoByIdUseCase";

export class GetColecaoByIdController {
    async handle(request: Request, response: Response) {
        const getColecaoByIdUseCase = new GetColecaoByIdUseCase();
        const { id_colecao } = request.body;
        const result = await getColecaoByIdUseCase.execute(id_colecao);
        return response.json(result);
    }
}