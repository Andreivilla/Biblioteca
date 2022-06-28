
import { Request, Response } from "express";
import { FindLivroByNameUseCase } from "./findLivroByNameUseCase";

export class FindLivroByNameController {
    async handle(request: Request, response: Response) {
        const findLivroByNameUseCase = new FindLivroByNameUseCase();
        const { titulo } = request.body;
        const result = await findLivroByNameUseCase.execute(titulo);
        return response.json(result);
    }
}