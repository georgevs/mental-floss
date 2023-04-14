CREATE FUNCTION uppercase_first_letter(val VARCHAR(40))
  RETURNS VARCHAR(40) DETERMINISTIC
  RETURN CONCAT(UPPER(SUBSTR(val, 1, 1)), LOWER(SUBSTR(val, 2)));

CREATE VIEW solution AS
  SELECT user_id, uppercase_first_letter(name) AS name
  FROM Users
  ORDER BY name;
