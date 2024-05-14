import { Response, Request } from "express";
import pedidoService from "../../services/pedidos/pedido.service";

let historialPedido = async(req: Request, res: Response) => {
    try {
        const idUsuario = req.body.id;
        const historialPedido = await pedidoService.historial(idUsuario);
        return res.status(200).json(historialPedido);
    } catch (error) {
        console.error('error al obtener el historial de pedidos', error);
        return res.status(500).json({ status: 'Error interno '});
    }
}

export default historialPedido;