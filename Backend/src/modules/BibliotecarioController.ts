import { request, Request, Response } from "express";
import Bibliotecario from "../database/BibliotecarioModel";


const BibliotecarioController = {
    async create(req: Request, res: Response): Promise<Response> {
        await Bibliotecario.create(req.body)
            .then((data: any) => {
                return res.json(data)
            })
            .catch((error: { original: any; }) => {
                return res.status(400).json(error.original)
            })

        return res.status(500)
    },
}


export default BibliotecarioController