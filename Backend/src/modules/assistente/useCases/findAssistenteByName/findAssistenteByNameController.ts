
import { Request, Response } from "express";
import { FindAssistenteByNameUseCase } from "./findAssistenteByNamesCase";

export class FindAssistenteByNameController {
    async handle(request: Request, response: Response) {
        const findAssistenteByNameUseCase = new FindAssistenteByNameUseCase();
        const { nome } = request.body;
        const result = await findAssistenteByNameUseCase.execute(nome);
        return response.json(result);
    }
}