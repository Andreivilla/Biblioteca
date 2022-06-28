import { Request, Response } from "express";
import { FindAssistenteByIdUseCase } from "./findAssistenteByIdUseCase";

export class FindAssistenteByIdController {
    async handle(request: Request, response: Response) {
        const findAssistenteByIdUseCase = new FindAssistenteByIdUseCase();
        const { id_assistente } = request.body;
        const result = await findAssistenteByIdUseCase.execute(id_assistente);
        return response.json(result);
    }
}