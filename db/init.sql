
-- tabela para armazenar todos os status usados no sistema
create table t_status (
stt_id serial primary key, -- chave pk
stt_nome varchar(100), -- descrição do status
stt_tabela varchar(1), -- identificação sobre qual tabela pode usar o status
stt_dataini timestamp, -- vigencia inicial
stt_datafim timestamp, -- vigencia final
stt_cor varchar(10) -- cor para a exibição no quadro
);
-- tabela para armazenar todos os projetos
create table t_projeto (
prj_id serial primary key, -- chave pl
prj_nome varchar(100) not null, -- nome do projeto
prj_descricao text, -- descrição detalhado do que se trata o projeto
prj_dataini date, -- vigencia inicial do projeto
prj_datafim date, -- vigencia final do projeto
stt_id int references t_status(stt_id) -- status do projeto
);

-- tabela para armazenar todos os funcionários envolvidos em projetos sendo eles observadores, desenvolvedores solicitantes
create table t_funcionario (
fun_id serial primary key, -- chave pk
fun_nome varchar(100) not null, -- nome funcionário
fun_funcao varchar(50), -- função do funcionário
fun_email varchar(100), -- email funcionário
fun_telefone varchar(20), -- telefone
fun_cpf varchar(20), -- cpf/cnpj funcionário
fun_status varchar(1) -- status do funcionário
);
-- tabela para armazenar as tarefas
create table t_tarefas (
tar_id serial primary key, -- chave pk
tar_descricao text not null, -- descrição da tarefa principal
tar_dataini date, -- vigencia inicial
tar_datafim date, -- vigencia final
tar_horasTrab time, -- horas trabalhadas na tarefa
stt_id int references t_status(stt_id), -- status da tarefa
fun_id int references t_funcionario(fun_id), -- funcionário ligado a tarefa
prj_id int references t_projeto(prj_id) -- projeto a qual a tarefa está ligada
);
-- tarefas para armazenar todas as atividades ligadas a uma tarefa
create table t_atividade (
atv_id serial primary key, -- chave pk
atv_descricao text, -- descrição do que deve ser feito na atividade
atv_dataini timestamp, -- vigencia inicial
atv_datafim timestamp, -- vigencia final
atv_horasTrab time, -- horas trabalhadas na atividade
tar_id int references t_tarefas(tar_id), -- tarefa a qual a atividade está ligada
stt_id int references t_status(stt_id) -- status da atividade
);
--tarefa para armazenar o login do sistemas
create table t_login (
log_id serial primary key, -- chave pk
log_nome text not null unique, -- nome do user que está loganda
log_salt text not null, -- salt da senha
log_pass text not null -- senha criptografada
);
-- tabela para relacionar as os projetos ligados ao funcionário e também os funcionários ligados aos projetos
create table l_projeto_funcionario (
prj_fun_id serial primary key, -- chave pk
prj_id int references t_projeto(prj_id), -- chave do projeto
tar_id int references t_tarefas(tar_id), -- chave da tarefa
stt_id int references t_status(stt_id), -- status
constraint fk_projeto_tarefa unique (prj_id, tar_id)
);
-- tabela para relacionar as atividades ligados ao funcionário e também os funcionários ligados aos atividades
create table l_funcionario_atividade (
fun_atv_id serial primary key, -- chave pk
fun_id int references t_funcionario(fun_id),
atv_id int references t_atividade(atv_id),
stt_id int references t_status(stt_id), -- status
constraint fk_funcionario_atividade unique (fun_id, atv_id)
);

INSERT INTO t_status (stt_nome, stt_tabela, stt_dataini, stt_datafim, stt_cor) VALUES
('Ativo', 'A', '2024-01-01 00:00:00', '2024-12-31 23:59:59', '#00FF00');

INSERT INTO t_status (stt_nome, stt_tabela, stt_dataini, stt_datafim, stt_cor) VALUES
('Inativo', 'A', '2024-01-01 00:00:00', '2024-12-31 23:59:59', '#FF0000');

INSERT INTO t_status (stt_nome, stt_tabela, stt_dataini, stt_datafim, stt_cor) VALUES
('Pendente', 'B', '2024-02-01 00:00:00', '2024-12-31 23:59:59', '#FFFF00');

INSERT INTO t_status (stt_nome, stt_tabela, stt_dataini, stt_datafim, stt_cor) VALUES
('Concluído', 'B', '2024-03-01 00:00:00', '2024-12-31 23:59:59', '#0000FF');

INSERT INTO t_status (stt_nome, stt_tabela, stt_dataini, stt_datafim, stt_cor) VALUES
('Cancelado', 'C', '2024-01-01 00:00:00', '2024-12-31 23:59:59', '#FFA500');
