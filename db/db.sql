-- para crear la BD
CREATE DATABASE dbapi;

-- usarla
use dbapi;

-- crear una tabla
CREATE TABLE clientes (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  telefono VARCHAR(15)
);


