import express from 'express';
import productoController from '../../controller/productos/productos-controller';
const router = express.Router();

router.post('/', productoController);

export default router;