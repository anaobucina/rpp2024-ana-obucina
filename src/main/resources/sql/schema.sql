DROP TABLE IF EXISTS smer cascade;
DROP TABLE IF EXISTS projekat cascade;
DROP TABLE IF EXISTS grupa cascade;
DROP TABLE IF EXISTS student cascade;

drop sequence if exists smer_seq;
drop sequence if exists projekat_seq;
drop sequence if exists grupa_seq;
drop sequence if exists student_seq;

create table smer(
	id integer not null,
	naziv varchar(100) not null,
	oznaka varchar(50) not null
);

create table grupa(
	id integer not null,
	oznaka varchar(10) not null,
	smer integer not null
);

create table student(
	id integer not null,
	ime varchar(50) not null,
	prezime varchar(50) not null,
	broj_indeksa varchar(20) not null,
	grupa integer not null,
	projekat integer not null
);

create table projekat(
	id integer not null,
	naziv varchar(100),
	oznaka varchar(10),
	opis varchar(500)
);

alter table smer add constraint PK_Smer
	primary key(id);
	
alter table grupa add constraint PK_Grupa
	primary key(id);

alter table student add constraint PK_Student
	primary key(id);
	
alter table projekat add constraint PK_Projekat
	primary key(id);
	
alter table grupa add constraint FK_Grupa
	foreign key(smer) references smer;
	
alter table student add constraint FK_Student_Grupa
	foreign key(grupa) references grupa;

alter table student add constraint FK_Student_projekat
	foreign key(projekat) references projekat;
	
create index IDXFK_Grupa_Smer
	on grupa(smer);
	
create index IDXFK_Student_Grupa
	on student(grupa);
	
create index IDXFK_Student_Projekat
	on student(projekat);
	
create sequence smer_seq
increment 1;

create sequence grupa_seq
increment 1;

create sequence projekat_seq
increment 1;

create sequence student_seq
increment 1;