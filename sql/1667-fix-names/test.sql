DELIMITER ;;

CREATE PROCEDURE asserteq(IN expected_vals VARCHAR(255), IN vals VARCHAR(255))
BEGIN
  IF expected_vals <> vals THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Assert failed: Unexpected values';
  END IF;
END ;;

DELIMITER ;

-- test cases

TRUNCATE TABLE Users;
INSERT INTO Users (user_id, name) VALUES ('1', 'aLice');
INSERT INTO Users (user_id, name) VALUES ('2', 'bOB');
INSERT INTO Users (user_id, name) VALUES ('3', 'c');
INSERT INTO Users (user_id, name) VALUES ('4', '');

CALL solution();
CALL asserteq('Alice,Bob,C,', (SELECT GROUP_CONCAT(name) FROM Users));
