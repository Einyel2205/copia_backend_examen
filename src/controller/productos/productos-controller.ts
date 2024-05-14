import { Request, Response } from "express";
import productosService from "../../services/productos/productos.service";
import Productos from "../../Dto/productos/productosDto";

let add = async (req: Request, res: Response) => {
    try {
        const{
            nombre, 
            descripcion, 
            precio,
            imagen
        } = req.body;
        const addP = await productosService.add(new Productos(nombre, descripcion, precio, imagen));
        console.log(addP);
        
        return res.status(200).json({
            message: "Producto agregado",
        });

    } catch (error: any) {
        if(error && error.code == "ER_DUP_ENTRY"){
            return res.status(500).send({ errorInfo: error.sqlMessage}

            );
        }   
    }
}

export default add;