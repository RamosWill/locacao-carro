import { Router } from 'express';
import { salvarCliente, procurarPorNome, procurarTodos, alterarCliente, deletarCliente } from '../repository/clienteRepository.js';

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
    
});

endpoints.get('/cliente/:nome', async (req, resp) => {
    try {
        let nome = req.params.nome;
        let resposta = await procurarPorNome(nome);

        if(resposta.length ==  0) {
            resp.send('Não conseguimos encontrar nenhum cliente com este nome!')
        } else {
            resp.send(resposta);
        }
        
    } catch (error) {
            resp.status(500).send(error.message);
        }
});

endpoints.get('/todosClientes', async (req, resp) => {
    try {
        let resposta = await procurarTodos();
        resp.send(resposta)

    } catch (error) {
            resp.status(500).send(error.message)
        }
});

endpoints.put('/cliente/:id', async (req, resp) => { ///////// verificação para nao enviar infos vazias ou sem atender quantidade minima de caracteres!!!!!!!!
    try {
        let id = req.params.id;
        let cliente = req.body;
        let resposta = await alterarCliente(id, cliente);



        resp.send('Cliente alterado com sucesso!');

    } catch (error) {
        resp.status(500).send(error.message)
    }
});

endpoints.delete('/cliente/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let cliente = req.body;

        let resposta = await deletarCliente(id, cliente);

        resp.send('Cliente deletado com sucesso!');
    } catch (error) {
        resp.status(500).send(error.message)
    }
})
        

export default endpoints;