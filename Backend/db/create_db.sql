-- Créer une nouvelle base de données
CREATE DATABASE sahabas_db;

-- Utiliser la base de données créée
USE sahabas_db;

-- Créer une table pour stocker les données
CREATE TABLE sahabis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    link_source VARCHAR(555),
    sahabi_name VARCHAR(200),
    definition TEXT,
    remarques TEXT
);
