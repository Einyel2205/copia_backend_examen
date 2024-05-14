import Productos from "../../Dto/productos/productosDto";
import productosRepository from "../../repositories/productos/productosRepository";
 

class productosService{
    static async add(productos: Productos){
        return await productosRepository.add(productos);
    }

    static async getAll(){
        return await productosRepository.getAll();
    }
}

export default productosService;
