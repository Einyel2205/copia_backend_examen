class Pedido {
    estado: string;
    idU: number;
    idP: number;
    constructor(
        estado: string,
        idU: number,
        idP: number
    ){
        this.estado = estado;
        this.idU = idU;
        this.idP = idP;
    }
}
export default Pedido;