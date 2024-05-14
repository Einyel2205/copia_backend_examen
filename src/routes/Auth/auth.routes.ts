import express from 'express';
import authController from '../../controller/Auth/auth-controller';

const router = express.Router();

router.post('/', authController);


export default router