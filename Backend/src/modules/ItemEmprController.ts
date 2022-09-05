import { request, Request, Response } from "express";
import ItemEmpr from "../database/ItemEmprModel";



const ItemEmprController = {
    async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;

        await ItemEmpr.findByIdAndUpdate(id, {
            numREnovacoes: 0
        })
            .then(data => {
                return res.json(data)
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })

        return res.status(500)

    },
}


export default ItemEmprController