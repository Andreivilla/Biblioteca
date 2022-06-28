
import { Request, Response } from "express";
import { FindEmprestimoByLivroUseCase } from "./findEmprestimoByLivroUseCase";

export class FindEmprestimoByLivroController{
    async handle(request: Request, response: Response) {
        const findEmprestimoByLivroUseCase = new FindEmprestimoByLivroUseCase();
        const { itemEmprId } = request.body;
        const result = await findEmprestimoByLivroUseCase.execute(itemEmprId);
        return response.json(result);
    }
}