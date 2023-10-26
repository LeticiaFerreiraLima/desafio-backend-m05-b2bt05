CREATE TABLE categories(
	id SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR(50) NOT NULL
);

INSERT INTO categories (description) VALUES ('Informática'), ('Celulares'), 
('Beleza e Perfumaria'), 
('Mercado'),
('Livros e Papelaria'),
('Brinquedos'),
('Moda'),
('Bebê'),
('Games');

CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE products(
	id SERIAL PRIMARY KEY NOT NULL,
  description TEXT,
  amount INTEGER NOT NULL,
  price INTEGER NOT NULL,
  category_id INTEGER REFERENCES categories(id)
);

CREATE TABLE clients(
	id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  cpf TEXT UNIQUE NOT NULL,
  adress TEXT
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    client_id INTEGER references clients(id) NOT NULL,
    observation TEXT,
  	total_value INTEGER NOT NULL
);

CREATE TABLE orders_products (
    id SERIAL PRIMARY KEY,
    order_id INTEGER references orders(id),
    product_id INTEGER references products(id) NOT NULL,
    amount_product INTEGER NOT NULL,
  	product_value INTEGER NOT NULL
);