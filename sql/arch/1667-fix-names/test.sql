DELIMITER ;;

CREATE PROCEDURE asserteq(IN expected_vals VARCHAR(255), IN vals VARCHAR(255))
BEGIN
  IF expected_vals <> vals THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Assert failed: Unexpected values';
  END IF;
END ;;

CREATE FUNCTION name_values()
RETURNS VARCHAR(1024)
READS SQL DATA
BEGIN
  DECLARE result VARCHAR(1024);
  DECLARE val VARCHAR(40);
  DECLARE done INT DEFAULT FALSE;
  DECLARE table_cursor CURSOR FOR SELECT name FROM solution;
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

  OPEN table_cursor;
  FETCH table_cursor INTO val;
  WHILE NOT done DO
    SET result = CONCAT_WS(',', result, val);
    FETCH table_cursor INTO val;
  END WHILE;
  CLOSE table_cursor;

  RETURN result;
END ;;

DELIMITER ;

-- test cases

TRUNCATE TABLE Users;
INSERT INTO Users (user_id, name) VALUES ('1', 'aLice');
INSERT INTO Users (user_id, name) VALUES ('2', 'c');
INSERT INTO Users (user_id, name) VALUES ('3', 'bOB');
INSERT INTO Users (user_id, name) VALUES ('4', '');

CALL asserteq(',Alice,Bob,C', (SELECT name_values()));
