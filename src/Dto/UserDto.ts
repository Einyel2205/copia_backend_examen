class User{

    email: string;
    contrasenia: string;
    nombre: string;

    constructor(
        email: string,
        contrasenia: string,
        nombre: string
    ){
        this.email = email;
        this.contrasenia = contrasenia;
        this.nombre = nombre;
    }

}
export default User;