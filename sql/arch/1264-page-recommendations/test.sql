Truncate table Friendship;
insert into Friendship (user1_id, user2_id) values ('1', '2');
insert into Friendship (user1_id, user2_id) values ('1', '3');
insert into Friendship (user1_id, user2_id) values ('1', '4');
insert into Friendship (user1_id, user2_id) values ('2', '3');
insert into Friendship (user1_id, user2_id) values ('2', '4');
insert into Friendship (user1_id, user2_id) values ('2', '5');
insert into Friendship (user1_id, user2_id) values ('6', '1');
Truncate table Likes;
insert into Likes (user_id, page_id) values ('1', '88');
insert into Likes (user_id, page_id) values ('2', '23');
insert into Likes (user_id, page_id) values ('3', '24');
insert into Likes (user_id, page_id) values ('4', '56');
insert into Likes (user_id, page_id) values ('5', '11');
insert into Likes (user_id, page_id) values ('6', '33');
insert into Likes (user_id, page_id) values ('2', '77');
insert into Likes (user_id, page_id) values ('3', '77');
insert into Likes (user_id, page_id) values ('6', '88');



truncate table Friendship;
insert into Friendship(user1_id,user2_id) values('1','2');
insert into Friendship(user1_id,user2_id) values('1','3');
insert into Friendship(user1_id,user2_id) values('1','4');
insert into Friendship(user1_id,user2_id) values('1','5');
insert into Friendship(user1_id,user2_id) values('1','6');
truncate table Likes;
insert into Likes(user_id,page_id) values('7','88');
insert into Likes(user_id,page_id) values('8','77');
insert into Likes(user_id,page_id) values('9','66');
insert into Likes(user_id,page_id) values('10','55');
insert into Likes(user_id,page_id) values('11','44');

select * from Friendship;
select * from Likes;

select * from solution;
