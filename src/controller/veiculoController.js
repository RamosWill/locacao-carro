import { Router } from 'express';
import { inserirVeiculo, consultar } from '../repository/veiculoRepository.js';

let endpoints = Router();

endpoints.post('/veiculo', async (req, resp) => {
    try {
        let veiculo = req.body;

        let resp = inserirVeiculo(veiculo);
        return resp;   
    } catch (error) {
        resp.status(500).send('erro: ' + error.message)
    }
})


endpoints.get('/veiculo/:pesquisa', async (req, resp) => {
    let resposta = consultar(req.params.pesquisa);
    resp.send(resposta);
})
// endpoints.put
// endpoints.delete

export default endpoints;