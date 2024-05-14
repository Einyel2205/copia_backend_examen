import { Request, Response } from "express";
import productosService from "../../services/productos/productos.service";

let getProductos = async (req: Request, res: Response)=>{
    try {
        const productos = await productosService.getAll();
        return res.status(200).json(productos);

    } catch (error: any) {
        if(error && error.code == "ER_DUP_ENTRY"){
            return res.status(500).send({ errorInfo: error.sqlMessage}

            );
        }   
        
    }
}

export default getProductos;