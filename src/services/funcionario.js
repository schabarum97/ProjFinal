const db = require('../configs/pg');

const sql_get = 
    `SELECT t_funcionario.fun_id, 
            t_funcionario.fun_nome,
            t_funcionario.fun_funcao,
            t_funcionario.fun_email,
            t_funcionario.fun_telefone,
            t_funcionario.fun_cpf,
            t_funcionario.stt_id
       FROM t_funcionario
      WHERE t_funcionario.fun_id = $1`;

const getById = async (id) => {
    try {
        const result = await db.query(sql_get, [id]);
        if (result.rows.length === 0) {
            throw new Error('NotFound');
        }
        return { total: result.rows.length, funcionario: result.rows };
    } catch (err) {
        if (err.message === 'NotFound') {
            throw { status: 404, message: 'Funcionário não encontrado' };
        }
        throw { status: 500, message: 'Erro ao buscar funcionário' };
    }
};

const sql_post = 
    `INSERT INTO t_funcionario 
            (fun_nome, fun_funcao, fun_email, fun_telefone, fun_cpf, stt_id)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING fun_id`;

const postFuncionario = async (params) => {
    const { nome, funcao, email, telefone, cpf, status } = params;
    try {
        const result = await db.query(sql_post, [nome, funcao, email, telefone, cpf, status]);
        return { mensagem: 'Funcionário criado com sucesso!', id: result.rows[0].fun_id };
    } catch (err) {
        throw { status: 500, message: 'Erro ao tentar criar o Funcionário' };
    }
};

const sql_put =
    `UPDATE t_funcionario
       SET fun_nome = $2,
           fun_funcao = $3,
           fun_email = $4,
           fun_telefone = $5,
           fun_cpf = $6,
           stt_id = $7
     WHERE fun_id = $1`;

const putFuncionario = async (params) => {
    const { id, nome, funcao, email, telefone, cpf, status } = params;
    try {
        const result = await db.query(sql_put, [id, nome, funcao, email, telefone, cpf, status]);
        if (result.rowCount === 0) {
            throw new Error('NotFound');
        }
        return { mensagem: 'Funcionário atualizado com sucesso!' };
    } catch (err) {
        if (err.message === 'NotFound') {
            throw { status: 404, message: 'Funcionário não encontrado' };
        }
        throw { status: 500, message: 'Erro ao tentar atualizar o Funcionário' };
    }
};

const sql_patch = 
    `UPDATE t_funcionario 
        SET `;

const patchFuncionario = async (params) => {
    let fields = '';
    let binds = [params.id];
    let countParams = 1;
    if (params.nome) {
        countParams++;
        fields += ` fun_nome = $${countParams} `;
        binds.push(params.nome);
    }
    if (params.funcao) {
        countParams++;
        fields += (fields ? ',' : '') + ` fun_funcao = $${countParams} `;
        binds.push(params.funcao);
    }
    if (params.email) {
        countParams++;
        fields += (fields ? ',' : '') + ` fun_email = $${countParams} `;
        binds.push(params.email);
    }
    if (params.telefone) {
        countParams++;
        fields += (fields ? ',' : '') + ` fun_telefone = $${countParams} `;
        binds.push(params.telefone);
    }
    if (params.cpf) {
        countParams++;
        fields += (fields ? ',' : '') + ` fun_cpf = $${countParams} `;
        binds.push(params.cpf);
    }
    if (params.status) {
        countParams++;
        fields += (fields ? ',' : '') + ` stt_id = $${countParams} `;
        binds.push(params.status);
    }
    let sql = sql_patch + fields + ' WHERE fun_id = $1';
    try {
        const result = await db.query(sql, binds);
        if (result.rowCount === 0) {
            throw new Error('NotFound');
        }
        return { mensagem: 'Funcionário atualizado com sucesso!' };
    } catch (err) {
        if (err.message === 'NotFound') {
            throw { status: 404, message: 'Funcionário não encontrado' };
        }
        throw { status: 500, message: 'Erro ao tentar atualizar o Funcionário' };
    }
};

const sql_delete =
    `DELETE FROM t_funcionario
     WHERE fun_id = $1`;

const deleteFuncionario = async (params) => {
    const { id } = params;
    try {
        const result = await db.query(sql_delete, [id]);
        if (result.rowCount === 0) {
            throw new Error('NotFound');
        }
        return { mensagem: 'Funcionário deletado com sucesso!' };
    } catch (err) {
        if (err.message === 'NotFound') {
            throw { status: 404, message: 'Funcionário não encontrado' };
        }
        throw { status: 500, message: 'Erro ao tentar deletar o Funcionário' };
    }
};
module.exports.getById = getById;
module.exports.postFuncionario = postFuncionario;
module.exports.putFuncionario = putFuncionario;
module.exports.patchFuncionario = patchFuncionario;
module.exports.deleteFuncionario = deleteFuncionario;