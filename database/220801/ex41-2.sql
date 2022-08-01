create database shop;
use shop; /*수영복을 팔아보자!*/ 

/*user*/ 
create table user (
	id varchar(20) not null primary key,
    name varchar(5) not null,
    age int(2),
    gender varchar(2) not null,
    email varchar(50),
    address varchar(150)
    # 총 주문 금액 해줘?
);
/*swimsuit*/
create table swimsuit (
	product_id varchar(8) not null primary key, # 그래서 primary key가 있어야 된다. (연결하려면)
	name varchar(30) not null,   # name 이 겹쳐도 되는가? -Y
    type varchar(50) not null, # type이라는 컬럼에 one-piece, bikini 다 넣어도 됨. (공통점이 더 많으면 굳이 쪼개지 않아도 됨)
    color varchar(15),
    size varchar(5) not null,
    pattern varchar(15),
    price int(7) not null,
    totallikes int # int() 칠 필요 없음.
);
/*orders*/
create table orders (  # order로 하니까 빨간줄 뜨넴... 
	order_num varchar(10) not null primary key,
	id varchar(20), 
    FOREIGN KEY (id) REFERENCES user(id),
    # swimsuit의 모든 데이터를 가져오고 싶을 때는? -> swimsuit table의 primary key를 가져오면 됨.
    product_id varchar(8),
    FOREIGN KEY (product_id) REFERENCES swimsuit(product_id),
    quantity int not null, # 물건별 수량?
	total_quantity int not null,
    total_price int not null, # 함수로 처리되는 것 맞죠..그쵸..? 
    order_date date not null,
    delivery_date date not null,
    coupon_num varchar(8)
);
	
desc swimsuit; # table을 보여주는게 아니라네.. column이라네..
alter table swimsuit add column pattern varchar(15);

insert into swimsuit(product_id, name, type, size, pattern, price ) values( '1234783','flower-onepiece', 'onepiece', 'XS', 'flower', '139000');
insert into swimsuit(product_id, name, type, size, pattern, price ) values( '1234784','flower-onepiece', 'onepiece', 'S', 'flower', '139000');
insert into swimsuit(product_id, name, type, size, pattern, price ) values( '1234785','flower-onepiece', 'onepiece', 'M', 'flower', '139000');
insert into swimsuit(product_id, name, type, size, pattern, price ) values( '1234786','flower-onepiece', 'onepiece', 'L', 'flower', '139000');
insert into swimsuit(product_id, name, type, size, pattern, price ) values( '1234787','flower-onepiece', 'onepiece', 'XL', 'flower', '139000');
insert into swimsuit(product_id, name, type, size, pattern, price ) values( '1234384','flower-bikini', 'bikini-top', 'XS', 'flower', '139000');
# 이렇게 일일히 쳐야하는 것인가요.. 함수같은거 없나요^~^

    