
import { Request, Response } from "express";
import { FindReservaByLivroUseCase } from "./findReservaByLivroUseCase";

export class FindReservaByLivroController{
    async handle(request: Request, response: Response) {
        const findReservaByLivroUseCase = new FindReservaByLivroUseCase();
        const { itemEmprId } = request.body;
        const result = await findReservaByLivroUseCase.execute(itemEmprId);
        return response.json(result);
    }
}