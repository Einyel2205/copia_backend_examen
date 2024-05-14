import { Request, Response } from "express"
import Estado from "../../Dto/pedidos/cambiarEstado";
import pedidoService from "../../services/pedidos/pedido.service";

let cambiarEstado = async(req: Request, res: Response) => {
    try {
        const id = req.body.id;
        if(!id){
            return res.status(401).json('acceso denegado');
        }

        const estado = req.body;

        const data = new Estado(
            estado.estado,
            id
        );

        await pedidoService.cambiarEstado(data);

        return res.status(200).json({
            status: 'Estado cambiado correctamente',
        });
    } catch (error) {
        console.error('Error al cambiar el estado', error);
        return res.status(500).json({
            status: "Error interno",
        })
    }
};

export default cambiarEstado;