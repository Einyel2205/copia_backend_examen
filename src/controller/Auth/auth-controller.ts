import { Request, Response } from "express";
import userService from "../../services/users/user.service";
import Auth from "../../Dto/Auth/AuthDto";
import generateToken from "../../helpers/generateToken";
import dotenv from 'dotenv';
dotenv.config();

let auth = async (req: Request, res: Response) => {
    try {
        const {
            email,
            contrasenia
        } = req.body;
        const login = await userService.login(new Auth(email, contrasenia));

        if (login.logueado) {
            const userId = login.userId;
            const token = generateToken({ idUsuario: userId }, process.env.SECRET_KEY, 10);
            return res.status(200).json({
                status: login.status,
                token: token,
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'Error interno'
        });
    }
}

export default auth;