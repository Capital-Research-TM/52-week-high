DROP DATABASE IF EXISTS stock;

CREATE DATABASE stock;

USE stock;

CREATE TABLE company (
  id int AUTO_INCREMENT PRIMARY KEY,
  company VARCHAR(50)
);

CREATE TABLE stockPrice (
  price int, volume int,
  date int,
  company_id int,
  FOREIGN KEY (company_id)
              REFERENCES company(id)
);


INSERT INTO company (company)
Value
('Starbucks');
