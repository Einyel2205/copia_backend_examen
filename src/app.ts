import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

//ROUTES
import register from './routes/users/register.routes';
import auth from './routes/Auth/auth.routes';
import addProductos from './routes/productos/add.routes'
import getProductos from './routes/productos/getAll.routes';
import createPedido from './routes/pedidos/create.routes';
import historialPedido from './routes/pedidos/historial.routes';
import estado from './routes/pedidos/cambiarEstado.routes';


const app = express().use(bodyParser.json());

app.use('/register', register);
app.use('/auth', auth);
app.use('/producto/add', addProductos);
app.use('/producto/getProductos', getProductos);
app.use('/pedido/create', createPedido);
app.use('/pedido/historial', historialPedido);
app.use('/pedido/estado', estado);

const PORT = process.env.PORT || 10023;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error',(error) =>{
    throw new Error(error.message)
});