import { Request, Response } from "express";
import { CreateReservaUseCase } from "./CreateReservaUseCase";

export class CreateReservaController {
    async handle(request: Request, response: Response) {
        const createReservaUseCase = new CreateReservaUseCase();
        const { livroid,usuarioId } = request.body;
        const result = await createReservaUseCase.execute(livroid,usuarioId);
        return response.json(result);
    }
}