
import { Request, Response } from "express";
import { FindReservaByUsuarioUseCase } from "./findReservaByUsuarioUseCase";

export class FindReservaByUsuarioController{
    async handle(request: Request, response: Response) {
        const findReservaByUsuarioUseCase = new FindReservaByUsuarioUseCase();
        const { usuarioId } = request.body;
        const result = await findReservaByUsuarioUseCase.execute(usuarioId);
        return response.json(result);
    }
}