import express from 'express';
import createController from '../../controller/pedidos/pedidos-controller';
import ValidateToken from '../../middleware/verifyToken';
const router = express.Router();

router.post('/', ValidateToken, createController);

export default router;