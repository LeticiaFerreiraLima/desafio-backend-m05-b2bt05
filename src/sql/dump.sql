CREATE TABLE categorias(
	id SERIAL PRIMARY KEY NOT NULL,
  descricao VARCHAR(50) NOT NULL
);

INSERT INTO categorias (descricao) VALUES ('Informática'), ('Celulares'), 
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

SELECT * FROM users;