DELIMITER ;;

CREATE PROCEDURE solution()
BEGIN
  UPDATE Users
  SET name = CONCAT(UPPER(SUBSTR(name, 1, 1)), LOWER(SUBSTR(name, 2)));
END ;;

DELIMITER ;
