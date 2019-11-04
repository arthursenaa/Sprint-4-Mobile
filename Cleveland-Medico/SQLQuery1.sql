create database T_Medico

use T_Medico

create table Doutor
(
	IdMedico int primary key identity
	,Nome varchar (255) not null
	,DataDeNascimento Date not null
	,crm varchar (255) not null unique
	,especialidade varchar (255) not null
);

insert into Doutor(Nome, DataDeNascimento, crm, especialidade)
values ('Arthur', '2003/02/10', '123' ,'Cardiologista')
       ,('Laura', '19/06/2002', '121' , 'Ortopedista' )
	   ,('Marina', '06/05/1980', '321','Pediatria');

	   select * from Doutor

	   drop table Doutor