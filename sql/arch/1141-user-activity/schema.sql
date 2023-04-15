DROP SCHEMA IF EXISTS leetcode;
CREATE SCHEMA leetcode;
USE leetcode;

CREATE TABLE IF NOT EXISTS Activity (
  user_id INT, 
  session_id INT, 
  activity_date DATE, 
  activity_type ENUM('open_session', 'end_session', 'scroll_down', 'send_message')
);
