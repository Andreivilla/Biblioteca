import { request, Request, Response } from "express";
import Empresta from "../database/EmprestaModel";


const EmprestaController = {
    async create(req: Request, res: Response): Promise<Response> {
        await Empresta.create(req.body)
            .then((data: any) => {
                return res.json(data)
            })
            .catch((error: { original: any; }) => {
                return res.status(400).json(error.original)
            })

        return res.status(500)
    },

    async findById(req: Request, res:Response){    
        let empresta = await Empresta.findById(req.body)
        
        return res.json(empresta);
    },
}




export default EmprestaController