import Auth from "../../Dto/Auth/AuthDto";
import User from "../../Dto/UserDto";
import db from '../../config/config.db';
import bcrypt from 'bcryptjs';

class userRepository{
    static async register(user: User){
        const sql = "INSERT INTO users (email, contrasenia, nombre) VALUES (?,?,?) "
        const values = [user.email, user.contrasenia, user.nombre];
        return db.execute(sql, values);
    }

    static async login(auth: Auth){
        const sql = "SELECT idUsuario, contrasenia FROM users WHERE email=?";
        const values = [auth.email];
        const result: any = await db.execute(sql, values);

        if(result[0].length > 0){
            const user = result[0][0];
            console.log(user);
            
            const isPasswordValid = await bcrypt.compare(
                auth.contrasenia,
                user.contrasenia
            );
            if(isPasswordValid){
                return { userId : user.idUsuario,
                logueado: true,
                status: 'autenticación exitosa'
            };
        }
        return { logueado: false, status: "Correo o contraseña invalida" };
    }
    return { logueado: false, status: "Correo o contraseña invalida" };
    }
}

export default userRepository