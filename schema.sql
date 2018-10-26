DROP DATABASE IF EXISTS Robin_Hood;

CREATE DATABASE Robin_Hood;

USE Robin_Hood;

CREATE TABLE company (
  id int AUTO_INCREMENT PRIMARY KEY,
  company VARCHAR(50)
);

CREATE TABLE stockPrice (
  price int,
  volume int,
  date int,
  company_id int,
  FOREIGN KEY (company_id)
    REFERENCES company(id)
);
