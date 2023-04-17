TRUNCATE TABLE Tree;
INSERT INTO Tree (id, p_id) VALUES ('1', NULL);
INSERT INTO Tree (id, p_id) VALUES ('2', '1');
INSERT INTO Tree (id, p_id) VALUES ('3', '1');
INSERT INTO Tree (id, p_id) VALUES ('4', '2');
INSERT INTO Tree (id, p_id) VALUES ('5', '2');

SELECT * FROM Tree;

SELECT id, 'Root' AS type FROM Tree WHERE p_id IS NULL
UNION
SELECT id, 'Inner' AS type FROM Tree t1 WHERE t1.p_id IS NOT NULL AND EXISTS (SELECT 1 FROM Tree t2 WHERE t2.p_id = t1.id LIMIT 1)
UNION
SELECT id, 'Leaf' AS type FROM Tree t1 WHERE t1.p_id IS NOT NULL AND NOT EXISTS (SELECT 1 FROM Tree t2 WHERE t2.p_id = t1.id LIMIT 1)
;


SELECT id, 
  CASE WHEN p_id IS NULL THEN 'Root'
       WHEN NOT EXISTS (SELECT 1 FROM Tree t2 WHERE t2.p_id = t1.id LIMIT 1) THEN 'Leaf'
       ELSE 'Inner'
  END AS type
FROM Tree t1;