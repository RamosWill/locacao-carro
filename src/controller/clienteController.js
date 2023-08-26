import { Router } from 'express';
import { salvarCliente } from '../repository/clienteRepository.js';

const endpoints = Router();

endpoints.post('/cliente', async (req, resp) => {
    try {
        let cliente = req.body;

        let resposta = await salvarCliente(cliente);

        resp.send("cliente adicionado com sucesso!");    
    } 
    catch (error) {
        resp.status(500).send(error.message)
    }
    
})

export default endpoints;