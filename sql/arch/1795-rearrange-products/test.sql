TRUNCATE TABLE Products;
INSERT INTO Products (product_id, store1, store2, store3) VALUES ('0', '95', '100', '105');
INSERT INTO Products (product_id, store1, store2, store3) VALUES ('1', '70', NULL, '80');

SELECT product_id, 'store1' AS store, store1 AS price FROM Products WHERE store1 IS NOT NULL
UNION
SELECT product_id, 'store2' AS store, store2 AS price FROM Products WHERE store2 IS NOT NULL
UNION
SELECT product_id, 'store3' AS store, store3 AS price FROM Products WHERE store3 IS NOT NULL;
