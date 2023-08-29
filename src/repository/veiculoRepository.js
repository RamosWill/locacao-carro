import conexao from '../repository/connection.js';

export async function inserirVeiculo (veiculo) {
    const sql = `
            insert into tb_veiculo (ds_modelo, ds_marca, ds_ano, ds_placa, id_tipo_veiculo) 
                            values (?, ?, ?, ?, ?)
    `;

    let resposta = conexao.query(sql, [veiculo.modelo, veiculo.marca, veiculo.ano, veiculo.placa, veiculo.idTipoVeiculo]);
    // veiculo.id = resposta.insertId;
    return resposta.affectedRows;
}

export async function consultar (busca) {
    const sql = `
        select  tb_veiculo.id_veiculo as id,
            tb_tipo_veiculo.id_tipo_veiculo as idTipoVeiculo,
            tb_tipo_veiculo.ds_tipo as tipo,
            tb_veiculo.ds_modelo as modelo,
            tb_veiculo.ds_marca as marca,
            tb_veiculo.ds_ano as ano,
            tb_veiculo.ds_placa as placa
        from tb_veiculo 
        inner join tb_tipo_veiculo on tb_tipo_veiculo.id_tipo_veiculo = tb_veiculo.id_tipo_veiculo
        where ds_marca like ?
        or ds_modelo like ?
        or ds_placa like ?
        order by id_veiculo;    
    `;

    let resposta = conexao.query(sql, ['%' + busca + '%', 
                                       '%' + busca + '%', 
                                       '%' + busca + '%']);
    let dados = resposta[0]
    return dados;
}