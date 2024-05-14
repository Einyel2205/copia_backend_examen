import Productos from "../../Dto/productos/productosDto";
import db from '../../config/config.db';

class productosRepository{
    static async add(productos: Productos){
        const sql = 'INSERT INTO productos (nombre, descripcion, precio, imagen) VALUES (?,?,?,?)';
        const values = [productos.nombre, productos.descripcion, productos.precio, productos.imagen];
        return db.execute(sql, values);
    }

    static async getAll(){
        const sql = 'SELECT * FROM productos';
        return db.execute(sql);
    }
}
export default productosRepository;