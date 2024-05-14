import Pedido from "../../Dto/pedidos/pedidosDto";
import pedidoRepository from "../../repositories/pedidos/pedidoRepository";
import Estado from "../../Dto/pedidos/cambiarEstado";

class pedidoService{
    static async create(pedido: Pedido){
        return await pedidoRepository.create(pedido);
    }

    static async historial(idUsuario: number){
        return await pedidoRepository.historial(idUsuario);
    }

    static async cambiarEstado(pedido: Estado){
        const [result]:any  = await pedidoRepository.getPedidoId(pedido.id);
        await pedidoRepository.cambiarEstado(pedido);
    }

    
}
export default pedidoService;