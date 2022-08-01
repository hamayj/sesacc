CREATE DATABASE sesac;

use sesac;

CREATE TABLE user (
	ID varchar(10) not null primary key,
    name varchar(5) not null default '',
    birthday date not null
);

desc user;

insert into user(id, name, birthday) values('id1','홍길동','2022-08-01');
insert into user values('id2','홍길동','2022-07-01');
insert into user (id, name) values ('song','2022-08-01');

alter table user drop column birthday;
alter table user add column birthday date not null;

select * from user;
select * from user where name = '홍길동' and id ='id1';

select * from user where name = '홍길동' order by id desc;
select * from user order by id desc limit 2;

select name, birthday from user;

/* between a and b */
select * from player where height between 160 and 180;
/* in */ 
select * from player where position in ('striker', 'goalkeeper');
select * from player where position = 'striker' or 'goalkeeper';
/* like 문자열과 형태가 일치하는 것을 찾음 _ % */ 
select * from user where name like '이%';

update user set name ='홍길동' where id != '';
select * from user;
delete from user where id='id2';

drop table user;



use sesac;

create table user (
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F', 'M', '') default '',
    birthday DATE not null,
    age int(3) not null default 0
    );
    
    desc user;
    
insert into user values('hong1234','8o4bkg','홍길동','M','1990-01-31','33');
insert into user values('sexysung','87awjkdf','성춘향','F','1992-03-31','31');
insert into user values('power70','qxur8sda','변사또','M','1970-05-02','53');
insert into user values('hanjo','jk48fn4','한조','M','1984-10-18','39');
insert into user values('widowmaker','38ewifh3','위도우','F','1976-06-27','47');
insert into user values('dvadva','k3f3ah','송하나','F','2001-06-03','22');
insert into user values('jungkrat','4ifha7f','정크랫','M','1999-11-11','24');

select * from user;
alter table user change gerder gender ENUM('F', 'M', '') default '';

select * from user order by birthday asc;
select * from user where gender='M' order by name desc;
select id, name from user where birthday like '199_-__-__'; 
select * from user where birthday like '____-06-__'; 
select * from user where gender='M' and birthday like '1970-__-__'; 
select * from user order by age desc limit 3;
select * from user where age between 25 and 50;
update user set pw='12345678' where id='hong1234';
delete from user where id='jungkrat';
