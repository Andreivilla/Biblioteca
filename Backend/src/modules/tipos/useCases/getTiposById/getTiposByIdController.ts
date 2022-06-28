import { Request, Response } from "express";
import { GetTipoByIdUseCase } from "./getTiposByIdUseCase";

export class GetTipoByIdController {
    async handle(request: Request, response: Response) {
        const getTipoByIdUseCase = new GetTipoByIdUseCase();
        const { id_tipo } = request.body;
        const result = await getTipoByIdUseCase.execute(id_tipo);
        return response.json(result);
    }
}