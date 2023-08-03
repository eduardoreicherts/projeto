Create database ecommerce;

use ecommerce;
/*Informações dos clientes*/
create table clients_ecommerce(
	id_client int not null auto_increment,
    ds_name varchar(255),
    nm_cpf int,
    fl_status enum ('A', 'I') default 'A',
    dt_created_at datetime default current_timestamp,
    primary key (id_client)
);
/*Informações dos produtos*/
create table products (
	id_product int not null auto_increment,
    ds_name varchar(120) not null,
    ds_description varchar(255),
    nm_value float not null,
    ds_brand varchar(120),
    ds_status enum ('A', 'I') default 'A',
    dt_created_at datetime default current_timestamp,
    primary key (id_product)
);
/*Carrinho de compras*/
create table cart (
	id_cart int not null auto_increment,
    id_client int,
    id_product int,
    primary key (id_cart),
    foreign key (id_client) references clients_ecommerce (id_client),
    foreign key (id_product) references products (id_product)
);

select * from clients_ecommerce;
select * from cart;
select * from products;

insert into clients_ecommerce(ds_name, nm_cpf, fl_status) Values ('Eduardo', 000111222, 'A');
insert into products(ds_name, ds_description, nm_value, ds_brand) Values ('Suco', 'Sabor morango', 10.00, 'Valle');
insert into cart(id_client, id_product) Values(1, 1);

select ce.*, p.*, c.* from clients_ecommerce ce, products p, cart c Where ce.id_client = c.id_client and p.id_product = c.id_product;

alter table clients_ecommerce modify column nm_cpf bigint;

update clients_ecommerce set nm_cpf = 12312312312 where id_client = 1;

