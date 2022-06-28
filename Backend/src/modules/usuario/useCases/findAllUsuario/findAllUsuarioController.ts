
import { Request, Response } from "express";
import { FindAllUsuarioUseCase } from "./findAllUsuarioUseCase";

export class FindAllUsuarioController {
    async handle(request: Request, response: Response) {
        const findAllUsuarioUseCase = new FindAllUsuarioUseCase();
        const result = await findAllUsuarioUseCase.execute();
        return response.json(result);
    }
}