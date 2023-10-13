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

SELECT * FROM categorias;