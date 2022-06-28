
import { Request, Response } from "express";
import { FindBibliotecarioByIdUseCase } from "./findBibliotecarioByIdUseCase";

export class FindBibliotecarioByIdController {
    async handle(request: Request, response: Response) {
        const findBibliotecarioByIdUseCase = new FindBibliotecarioByIdUseCase();
        const { id_bibliotecario } = request.body;
        const result = await findBibliotecarioByIdUseCase.execute(id_bibliotecario);
        return response.json(result);
    }
}