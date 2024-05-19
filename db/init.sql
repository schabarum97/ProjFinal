
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
stt_id int references t_status(stt_id) -- status do funcionário
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

INSERT INTO t_status (stt_nome, stt_tabela, stt_dataini, stt_datafim, stt_cor) 
VALUES ('Em andamento', 'P', '2024-01-01', NULL, '#FFFF00');

INSERT INTO t_status (stt_nome, stt_tabela, stt_dataini, stt_datafim, stt_cor) 
VALUES ('Concluído', 'P', '2024-01-01', NULL, '#00FF00');

INSERT INTO t_status (stt_nome, stt_tabela, stt_dataini, stt_datafim, stt_cor) 
VALUES ('Pendente', 'T', '2024-01-01', NULL, '#FF0000');

INSERT INTO t_status (stt_nome, stt_tabela, stt_dataini, stt_datafim, stt_cor) 
VALUES ('Em revisão', 'T', '2024-01-01', NULL, '#0000FF');

INSERT INTO t_status (stt_nome, stt_tabela, stt_dataini, stt_datafim, stt_cor) 
VALUES ('Aguardando aprovação', 'A', '2024-01-01', NULL, '#FF00FF');

INSERT INTO t_projeto (prj_nome, prj_descricao, prj_dataini, prj_datafim, stt_id) 
VALUES ('Projeto A', 'Descrição do Projeto A', '2024-01-01', '2024-12-31', 1);

INSERT INTO t_projeto (prj_nome, prj_descricao, prj_dataini, prj_datafim, stt_id) 
VALUES ('Projeto B', 'Descrição do Projeto B', '2024-01-01', '2024-12-31', 2);

INSERT INTO t_projeto (prj_nome, prj_descricao, prj_dataini, prj_datafim, stt_id) 
VALUES ('Projeto C', 'Descrição do Projeto C', '2024-01-01', '2024-12-31', 1);

INSERT INTO t_projeto (prj_nome, prj_descricao, prj_dataini, prj_datafim, stt_id) 
VALUES ('Projeto D', 'Descrição do Projeto D', '2024-01-01', '2024-12-31', 3);

INSERT INTO t_projeto (prj_nome, prj_descricao, prj_dataini, prj_datafim, stt_id) 
VALUES ('Projeto E', 'Descrição do Projeto E', '2024-01-01', '2024-12-31', 1);

INSERT INTO t_funcionario (fun_nome, fun_funcao, fun_email, fun_telefone, fun_cpf, stt_id) 
VALUES ('João Silva', 'Desenvolvedor', 'joao.silva@example.com', '123456789', '123.456.789-00', 1);

INSERT INTO t_funcionario (fun_nome, fun_funcao, fun_email, fun_telefone, fun_cpf, stt_id) 
VALUES ('Maria Santos', 'Observador', 'maria.santos@example.com', '987654321', '987.654.321-00', 1);

INSERT INTO t_funcionario (fun_nome, fun_funcao, fun_email, fun_telefone, fun_cpf, stt_id) 
VALUES ('José Oliveira', 'Solicitante', 'jose.oliveira@example.com', '456789123', '456.789.123-00', 1);

INSERT INTO t_funcionario (fun_nome, fun_funcao, fun_email, fun_telefone, fun_cpf, stt_id) 
VALUES ('Ana Pereira', 'Desenvolvedor', 'ana.pereira@example.com', '789123456', '789.123.456-00', 1);

INSERT INTO t_funcionario (fun_nome, fun_funcao, fun_email, fun_telefone, fun_cpf, stt_id) 
VALUES ('Carlos Souza', 'Observador', 'carlos.souza@example.com', '321654987', '321.654.987-00', 1);

INSERT INTO t_tarefas (tar_descricao, tar_dataini, tar_datafim, tar_horasTrab, stt_id, fun_id, prj_id) 
VALUES ('Desenvolver funcionalidade X', '2024-01-01', '2024-01-10', '08:00:00', 3, 1, 1);

INSERT INTO t_tarefas (tar_descricao, tar_dataini, tar_datafim, tar_horasTrab, stt_id, fun_id, prj_id) 
VALUES ('Revisar documento de requisitos', '2024-01-05', '2024-01-07', '08:00:00', 4, 4, 2);

INSERT INTO t_tarefas (tar_descricao, tar_dataini, tar_datafim, tar_horasTrab, stt_id, fun_id, prj_id) 
VALUES ('Realizar testes de integração', '2024-01-10', '2024-01-15', '08:00:00', 3, 5, 3);

INSERT INTO t_tarefas (tar_descricao, tar_dataini, tar_datafim, tar_horasTrab, stt_id, fun_id, prj_id) 
VALUES ('Levantar requisitos para nova funcionalidade', '2024-01-03', '2024-01-08', '08:00:00', 3, 3, 4);

INSERT INTO t_tarefas (tar_descricao, tar_dataini, tar_datafim, tar_horasTrab, stt_id, fun_id, prj_id) 
VALUES ('Aprovar design de interface', '2024-01-02', '2024-01-03', '08:00:00', 5, 2, 5);

INSERT INTO t_atividade (atv_descricao, atv_dataini, atv_datafim, atv_horasTrab, tar_id, stt_id) 
VALUES ('Atualizar diagrama de classes', '2024-01-05', '2024-01-07', '10:00:00', 2, 4);

INSERT INTO t_atividade (atv_descricao, atv_dataini, atv_datafim, atv_horasTrab, tar_id, stt_id) 
VALUES ('Executar testes de integração', '2024-01-10', '2024-01-15', '20:00:00', 3, 3);

INSERT INTO t_atividade (atv_descricao, atv_dataini, atv_datafim, atv_horasTrab, tar_id, stt_id) 
VALUES ('Entrevistar usuários', '2024-01-03', '2024-01-08', '15:00:00', 4, 3);

INSERT INTO t_atividade (atv_descricao, atv_dataini, atv_datafim, atv_horasTrab, tar_id, stt_id) 
VALUES ('Analisar feedback de usabilidade', '2024-01-02', '2024-01-03', '5:00:00', 5, 5);
