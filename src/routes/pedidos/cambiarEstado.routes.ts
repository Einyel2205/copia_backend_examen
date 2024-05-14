import express from 'express';
import cambiarEstadoController from '../../controller/pedidos/cambiarEstado-controller';
import ValidateToken from '../../middleware/verifyToken';

const router = express.Router();

router.patch('/', ValidateToken, cambiarEstadoController);

export default router;