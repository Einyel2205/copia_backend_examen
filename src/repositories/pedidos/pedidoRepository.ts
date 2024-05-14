import Estado from "../../Dto/pedidos/cambiarEstado";
import Pedido from "../../Dto/pedidos/pedidosDto";
import db from '../../config/config.db';
import userRepository from "../users/UserRepository";

class pedidoRepository{
    static async create(pedido: Pedido){
        try {
            const sql = 'INSERT INTO pedidos (estado, idU, idP) VALUES (?,?,?)';
            const values = [pedido.estado, pedido.idU, pedido.idP];
            return db.execute(sql, values);
        } catch (error) {
            throw new Error('Error al crear el pedido mostro');
        }
    }

    static async historial(idUsuario: number){
        try {
            const sql = 'SELECT * FROM pedidos WHERE idU = ?';
            const values = [idUsuario];
            const [RESULT] = await db.execute(sql, values);
            return RESULT;
        } catch (error) {
            throw new Error('Error al buscar el historial de pedidos niño')
        }
    }

    static async cambiarEstado(estado: Estado){
        try {
            const sql = 'UPDATE pedidos SET estado = ? WHERE idPedido = ?' ;
            const values = [estado.estado, estado.id];
            return db.execute(sql, values);
        } catch (error) {
            
        }
    }

    static async getPedidoId(idPe: number){
        const sql = 'SELECT estado FROM pedidos WHERE idPedido = ?';
        const values = [idPe];
        return db.execute(sql, values);
    }
}
export default pedidoRepository;