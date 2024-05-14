import express from 'express';
import registerController from '../../controller/users/user-controller';

const router = express.Router()

router.post('/', registerController);

export default router;