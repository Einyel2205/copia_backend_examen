import express from 'express';
import getProductosController from '../../controller/productos/allProductos-controller';
import ValidateToken from '../../middleware/verifyToken';

const router = express.Router();

router.get('/', ValidateToken, getProductosController);

export default router;