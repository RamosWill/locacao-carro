import conexao from '../repository/connection.js';

export async function salvarCliente (infos) {
    const sql = `
        insert into tb_cliente (nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh)
                        values (?, ?, ?, ?, ?)
    `

    let resposta = await conexao.query(sql, [infos.nome, infos.email, infos.telefone, infos.cpf, infos.cnh]);
    // infos.id = infos.insertId;
    let dados = resposta[0]
    return dados;
};