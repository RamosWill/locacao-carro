import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import clienteController from './controller/clienteController.js';
// import tipoVeiculoController from './controller/tipoVeiculoController.js';
// import veiculoController from './controller/veiculoController.js';

const server = express();

server.use(cors());
server.use(express.json());

server.use(clienteController)
server.listen(
    process.env.PORT,
    () => console.log('api subiu ' + process.env.PORT)
)