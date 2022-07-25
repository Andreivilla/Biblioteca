import { request, Request, Response } from "express";
import Livro from "../database/LivroModel";


const LivroController = {

    async index(req: Request, res: Response): Promise<Response> {
        let livro = await Livro.find()
        return res.json(livro)
    },


    async create(req: Request, res: Response): Promise<Response> {
        await Livro.create(req.body)
            .then((data: any) => {
                return res.json(data)
            })
            .catch((error: { original: any; }) => {
                return res.status(400).json(error.original)
            })

        return res.status(500)
    },

    async findByName(req: Request, res:Response){    
        let livro = await Livro.find(req.body)
        
        return res.json(livro);
    },
    
}


export default LivroController