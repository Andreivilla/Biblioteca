
import { Request, Response } from "express";
import { FindBibliotecarioByNameUseCase } from "./findBibliotecarioByNameUseCase";

export class FindBibliotecarioByNameController {
    async handle(request: Request, response: Response) {
        const findBibliotecarioByNameUseCase = new FindBibliotecarioByNameUseCase();
        const { nome } = request.body;
        const result = await findBibliotecarioByNameUseCase.execute(nome);
        return response.json(result);
    }
}