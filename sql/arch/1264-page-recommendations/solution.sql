create view solution as
  with my_friends as (
    select user1_id as user_id from Friendship where user2_id = 1
    union select user2_id as user_id from Friendship where user1_id = 1
  ),
  my_likes as (
    select page_id from Likes where user_id = 1
  )
  select distinct page_id as recommended_page
  from Likes
  where user_id in (select * from my_friends)
    and page_id not in (select * from my_likes)
  ;