import express from 'express';
import historialPedidoController from '../../controller/pedidos/getAllController';
import ValidateToken from '../../middleware/verifyToken';

const Router = express.Router();

Router.get('/', ValidateToken, historialPedidoController);

export default Router;