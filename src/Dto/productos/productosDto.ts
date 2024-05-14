class Productos{
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    constructor(
        nombre: string, descripcion: string, precio: number, imagen: string,
    ){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
}

export default Productos;