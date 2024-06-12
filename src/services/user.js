const db = require("../configs/pg");
const cript = require("../utils/salt");

const sql_insert = ` insert into t_login (log_nome, log_salt, log_pass)
                values ($1, $2, $3)`;

const newUser = async (params) => {
  const { user, pass } = params;
  const { salt, hashedPassword } = cript.criarUsuario(pass);
  const result = await db.query(sql_insert, [user, salt, hashedPassword]);
  return { mensagem: "Usuário criada com sucesso!" };
};

const sql_get = `select log_id, log_nome from t_login`;

const getUser = async () => {
  result = await db.query(sql_get, []);
  return {
    total: result.rows.length,
    usuarios: result.rows,
  };
};

const sql_delete = `delete from t_login where log_id = $1`;

const deleteUser = async (params) => {
  console.log(params);
  const result = await db.query(sql_delete, [params.id]);
  if (result.rowCount === 0) {
    const error = new Error("Usuário não encontrado");
    error.status = 404;
    throw error;
  }
  return { mensagem: "Usuário deletado com sucesso!" };
};

const getUserId = async (id) => {
  const query = "SELECT log_pass, log_salt FROM t_login WHERE log_id = $1";
  const result = await db.query(query, [id]);
  if (result.rows.length === 0) {
    throw new Error("Usuário não encontrado");
  }
  return result.rows[0];
};

const sql_patch = `update t_login
            set `;

const patchPassword = async (params) => {
  let binds = [];
  const { id, name, pass, newpass } = params;
  binds.push(id);
  const userData = await getUserId(id);

  const validorPassword = cript.comparePassword(
    userData.log_pass,
    userData.log_salt,
    pass
  );
  if (validorPassword) {
    let sql = sql_patch;
    if (newpass) {
      const { salt, hashedPassword } = cript.criarUsuario(newpass);
      sql += ` log_pass = $2, log_salt = $3 `;
      binds.push(hashedPassword);
      binds.push(salt);
    }
    if (name) {
      sql += ` , log_nome = $4`;
      binds.push(name);
    }
    const result = await db.query(sql + ` where log_id = $1`, binds);
    if (result.rowCount === 0) {
        const error = new Error('Usuário não encontrado');
        error.status = 404;
        throw error;
    }
    return { mensagem: 'Dados atualizados com sucesso!' };
  } else {
    return "Senha inválida.";
  }
};

module.exports.newUser = newUser;
module.exports.getUser = getUser;
module.exports.deleteUser = deleteUser;
module.exports.patchPassword = patchPassword;
