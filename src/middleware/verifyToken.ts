import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
dotenv.config();

interface JwtPayload{
    data: {idUsuario: number},
    exp: number,
    iat: number
}

const ValidateToken = async (req: Request, res: Response, next: NextFunction) => {
    let authorization = req.get('Authorization');
    if (authorization) {
        const TOKEN = authorization.split(' ')[1];

        if (!TOKEN) {
            return res.status(401).json({
                status: 'No envio el token niño'
            });
        }
        try {
            let decoded = jwt.verify(TOKEN, process.env.SECRET_KEY as string ) as JwtPayload;
            req.body.id = decoded.data.idUsuario;
            return next();
        }catch(error){
            return res.status(403).json({
                status: 'No autorizado mostro', error: error
            });
        }   
    }else{
        return res.status(403).json({
            status: 'No envio la cabecera viejo'
        });
    }
}

export default ValidateToken;