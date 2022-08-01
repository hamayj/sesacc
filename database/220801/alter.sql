create database member;

use member;

create table member (
	id varchar(20) not null primary key,
    name varchar(5) not null,
	age int(2),
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);

desc member;

alter table member modify id varchar(10);
alter table member alter column gender set default '여';
alter table member add interest varchar(100);
alter table member drop column age;


