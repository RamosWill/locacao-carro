import conexao from '../repository/connection.js';

export async function salvarCliente (infos) {
    const sql = `
        insert into tb_cliente (nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh)
                        values (?, ?, ?, ?, ?)
    `

    let resposta = await conexao.query(sql, [infos.nome, infos.email, infos.telefone, infos.cpf, infos.cnh]);
    infos.id = infos.insertId;
    let dados = resposta[0]
    return dados;
};

export async function procurarPorNome (nome) {
    const sql = `select id_cliente      as id,
                        nm_cliente      as cliente,
                        ds_email        as email,
                        ds_telefone     as telefone,
                        ds_cpf          as cpf,
                        ds_cnh          as cnh
                 from tb_cliente 
                 where nm_cliente like ? '%'
                 ;`;

    let resposta = await conexao.query(sql, [nome]);
    return resposta[0];
};

export async function procurarTodos () {
    const sql = `select id_cliente      as id,
                        nm_cliente      as cliente,
                        ds_email        as email,
                        ds_telefone     as telefone,
                        ds_cpf          as cpf,
                        ds_cnh          as cnh
                    from tb_cliente ;`

    let resposta = await conexao.query(sql);
    return resposta[0];
};

export async function alterarCliente (id, cliente) {
    const sql = `
        update  tb_cliente
           set  nm_cliente = ?, 
                ds_email = ?, 
                ds_telefone = ?, 
                ds_cpf = ?, 
                ds_cnh = ?
         where  id_cliente = ?
    `;

    const resposta = await conexao.query(sql, [cliente.nome, cliente.email, cliente.telefone, cliente.cpf, cliente.cnh, id]);
    return resposta[0];
};

export async function deletarCliente (id) {
    const sql = `
        delete from tb_cliente
                where id_cliente = ?
    `;

    let dados = conexao.query(sql, [id]);
    return dados[0];
};

