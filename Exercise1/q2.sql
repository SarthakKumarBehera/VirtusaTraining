CREATE TABLE Product(
    id INT PRIMARY KEY,
    name VARCHAR(30),
    price INT,
    location VARCHAR(30)
);

CREATE TABLE manufacturer(
    id INT, company_name VARCHAR(30),product_id VARCHAR(5),address VARCHAR(20),
	FOREIGN KEY(id) REFERENCES Product(id) );
    
SELECT  m.company_name,p.location
FROM product p INNER JOIN manufacturer m
ON p.id = m.id;
