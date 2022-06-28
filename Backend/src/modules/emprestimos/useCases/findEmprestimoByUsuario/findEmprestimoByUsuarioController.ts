
import { Request, Response } from "express";
import { FindEmprestimoByUsuarioUseCase } from "./findEmprestimoByUsuarioUseCase";

export class FindEmprestimoByUsuarioController{
    async handle(request: Request, response: Response) {
        const findEmprestimoByUsuarioUseCase = new FindEmprestimoByUsuarioUseCase();
        const { usuarioId } = request.body;
        const result = await findEmprestimoByUsuarioUseCase.execute(usuarioId);
        return response.json(result);
    }
}