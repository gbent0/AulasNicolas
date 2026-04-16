CREATE DATABASE aula_add;
USE aula_add;
CREATE TABLE usuario(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(60) NOT NULL,
email varchar(60) not null,
senha varchar(60)
);

insert into usuario values
(1, "Rodrigo", "digo@gmail.com", "002384"),
(default, "Giovanna", "gica@gmail.com", "010807"),
(default, "Nicolas", "nico@gmail.com", "08855");

select * from usuario;
