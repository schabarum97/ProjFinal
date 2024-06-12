const db = require('../configs/pg');

const sql_get = `
    SELECT l_projeto_funcionario.prj_fun_id, 
            l_projeto_funcionario.prj_id, 
            t_projeto.prj_nome,
            l_projeto_funcionario.tar_id, 
            t_tarefas.tar_descricao,
            l_projeto_funcionario.stt_id,
            t_status.stt_nome
    FROM l_projeto_funcionario, t_projeto, t_tarefas, t_status
    WHERE l_projeto_funcionario.prj_id = t_projeto.prj_id
      and l_projeto_funcionario.tar_id = t_tarefas.tar_id
      and l_projeto_funcionario.stt_id = t_status.stt_id
      and prj_fun_id = $1`;

const getById = async (id) => {
    try {
        const ret = await db.query(sql_get, [id]);
        if (ret.rows.length === 0) {
            throw new Error('Relação ProjetoFuncionario não encontrada');
        }
        return { total: ret.rows.length, projetoFuncionario: ret.rows };
    } catch (err) {
        throw new Error(err.message);
    }
};

const sql_post = `
    INSERT INTO l_projeto_funcionario (prj_id, tar_id, stt_id) 
    VALUES ($1, $2, $3) RETURNING prj_fun_id`;

const postProjetoFuncionario = async (params) => {
    try {
        console.log(params)
        const { projeto, tarefa, status } = params;
        const ret = await db.query(sql_post, [projeto, tarefa, status]);
        return { mensagem: 'Relação ProjetoFuncionario criada com sucesso!', id: ret.rows[0].prj_fun_id };
    } catch (err) {
        throw new Error('Erro ao tentar criar a relação ProjetoFuncionario ' + err.message);
    }
};

const sql_put = `
    UPDATE l_projeto_funcionario 
    SET prj_id = $2, 
        tar_id = $3, 
        stt_id = $4 
    WHERE prj_fun_id = $1`;

const putProjetoFuncionario = async (params) => {
    try {
        const { id, projeto, tarefa, status } = params;
        const ret = await db.query(sql_put, [id, projeto, tarefa, status]);
        if (ret.rowCount === 0) {
            throw new Error('Relação ProjetoFuncionario não encontrada');
        }
        return { mensagem: 'Relação ProjetoFuncionario atualizada com sucesso!' };
    } catch (err) {
        throw new Error(err.message);
    }
};

const sql_patch = 
    `UPDATE l_projeto_funcionario 
    SET `;

const patchProjetoFuncionario = async (params) => {
    try {
        let fields = '';
        let binds = [];
        binds.push(params.id);
        let countParams = 1;
        
        if (params.projeto) {
            countParams++;
            fields += ` prj_id = $${countParams} `;
            binds.push(params.projeto);
        }
        if (params.tarefa) {
            countParams++;
            fields += (fields ? ',' : '') + ` tar_id = $${countParams} `;
            binds.push(params.tarefa);
        }
        if (params.status) {
            countParams++;
            fields += (fields ? ',' : '') + ` stt_id = $${countParams} `;
            binds.push(params.status);
        }

        let sql = sql_patch + fields + ' WHERE prj_fun_id = $1 ';
        const ret = await db.query(sql, binds);
        if (ret.rowCount === 0) {
            throw new Error('Relação ProjetoFuncionario não encontrada');
        }
        return { mensagem: 'Relação ProjetoFuncionario atualizada com sucesso!' };
    } catch (err) {
        throw new Error(err.message);
    }
};

const sql_delete = 
    `DELETE FROM l_projeto_funcionario 
    WHERE prj_fun_id = $1`;

const deleteProjetoFuncionario = async (params) => {
    try {
        const { id } = params;
        const ret = await db.query(sql_delete, [id]);
        if (ret.rowCount === 0) {
            throw new Error('Relação ProjetoFuncionario não encontrada');
        }
        return { mensagem: 'Relação ProjetoFuncionario deletada com sucesso!' };
    } catch (err) {
        throw new Error('Erro ao tentar deletar a relação ProjetoFuncionario ' + err.message);
    }
};

module.exports.getById = getById;
module.exports.postProjetoFuncionario = postProjetoFuncionario;
module.exports.putProjetoFuncionario = putProjetoFuncionario;
module.exports.patchProjetoFuncionario = patchProjetoFuncionario;
module.exports.deleteProjetoFuncionario = deleteProjetoFuncionario;
