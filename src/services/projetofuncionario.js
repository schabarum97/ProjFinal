const db = require('../configs/pg');

const sql_get = `
    SELECT prj_fun_id, prj_id, tar_id, stt_id 
      FROM l_projeto_funcionario 
     WHERE prj_fun_id = $1`;

const getById = async (id) => {
    let projetoFuncionario = {};
    await db.query(sql_get, [id])
        .then(ret => projetoFuncionario = { total: ret.rows.length, projetoFuncionario: ret.rows })
        .catch(err => projetoFuncionario = err.stack);
    return projetoFuncionario;
};

const sql_post = `
    INSERT INTO l_projeto_funcionario (prj_id, tar_id, stt_id) 
    VALUES ($1, $2, $3)`;

const postProjetoFuncionario = async (params) => {
    const { projeto, tarefa, status } = params;
    await db.query(sql_post, [projeto, tarefa, status]);
};

const sql_put = `
    UPDATE l_projeto_funcionario 
       SET prj_id = $2, 
           tar_id = $3, 
           stt_id = $4 
     WHERE prj_fun_id = $1`;

const putProjetoFuncionario = async (params) => {
    const { id, projeto, tarefa, status } = params;
    return await db.query(sql_put, [id, projeto, tarefa, status]);
};

const sql_patch = 
   `UPDATE l_projeto_funcionario 
       SET `;

const patchProjetoFuncionario = async (params) => {
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
    return await db.query(sql, binds);
};

// Serviço para deletar uma relação projeto-funcionário
const sql_delete = 
    `DELETE FROM l_projeto_funcionario 
      WHERE prj_fun_id = $1`;

const deleteProjetoFuncionario = async (params) => {
    const { id } = params;
    await db.query(sql_delete, [id]);
};

module.exports.getById = getById;
module.exports.postProjetoFuncionario = postProjetoFuncionario;
module.exports.putProjetoFuncionario = putProjetoFuncionario;
module.exports.patchProjetoFuncionario = patchProjetoFuncionario;
module.exports.deleteProjetoFuncionario = deleteProjetoFuncionario;
