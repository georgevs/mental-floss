DELIMITER ;;

CREATE PROCEDURE raise_exception(IN error_text VARCHAR(128))
BEGIN
  DECLARE unhandled_exception CONDITION FOR SQLSTATE VALUE '45000';
  SELECT CONCAT('Assert failed: ', error_text) INTO @message_text;
  SIGNAL unhandled_exception SET MESSAGE_TEXT = @message_text;
END ;;

CREATE PROCEDURE test()
BEGIN
  IF (SELECT COUNT(*) FROM Person WHERE Id NOT IN (1,2)) THEN
    CALL raise_exception('Unexpected values');
  END IF;
END ;;

DELIMITER ;

CALL test();
