import { Request, Response } from "express";
import userService from "../../services/users/user.service";
import User from "../../Dto/UserDto";

let register = async (req: Request, res: Response) => {
    try {
        const { email, contrasenia, nombre } = req.body;
        const registerUser = await userService.register(new User(email, contrasenia, nombre));

        return res.status(201).json({
            status: 'Registro exitoso'
        })
        
    } catch (error: any) {

        if(error && error.code == "ER_DUP_ENTRY"){
            return res.status(500).send({ errorInfo: error.sqlMessage}

            );
        }        
    }    
}

export default register;