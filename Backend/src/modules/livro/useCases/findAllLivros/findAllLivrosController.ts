import { Request, Response } from "express";
import { FindAllLivrosUseCase } from "./findAllLivrosUseCase";

export class FindAllLivrosController {
    async handle(request: Request, response: Response) {
        const findAllLivrosUseCase = new FindAllLivrosUseCase();
        const result = await findAllLivrosUseCase.execute();
        return response.json(result);
    }
}