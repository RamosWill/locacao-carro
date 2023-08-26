create database eliteWheelz;
use eliteWheelz;

create table tb_cliente (
	id_cliente	int primary key auto_increment,
    nm_cliente  varchar(200) not null,
    ds_email	varchar(200) not null,
    ds_telefone	varchar(200) not null,
    ds_cpf		varchar(200) not null,
    ds_cnh		varchar(200) not null
);

create table tb_veiculo (
	id_veiculo  int auto_increment,
    ds_modelo	    varchar(200) not null,
    ds_marca	    varchar(200) not null,
    ds_ano		    varchar(200) not null,
    ds_placa	    varchar(200) not null,
    id_tipo_veiculo int,
    primary key (id_veiculo),
    foreign key (id_tipo_veiculo) references tb_tipo_veiculo(id_tipo_veiculo)
);
    
create table tb_tipo_veiculo (
	id_tipo_veiculo		int primary key,
    ds_tipo				varchar(200) not null
);