import { Request, Response } from "express";
import pedidoService from "../../services/pedidos/pedido.service";

let crearPedido = async (req: Request, res: Response) => {
    try {
        const idUsuario = req.body.id;
        
        if (!idUsuario) {
               return res.status(401).json({status: 'No tiene acceso nea'});
            }
            const {estado, idProducto} = req.body;
            const pedidoData = {
                estado: estado,
                idU: idUsuario,
                idP: idProducto
            }
            
            await pedidoService.create(pedidoData);

            return res.status(201).json({
                status: "Pedido realizado con exito"
            })
        } catch (error: any) {
        if(error && error.code == "ER_DUP_ENTRY"){
            return res.status(500).send({ errorInfo: error.sqlMessage}

            );
        }   
    }
}
export default crearPedido;