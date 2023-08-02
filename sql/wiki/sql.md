# SQL Language

## Schema
```
drop schema if exists DATABASE;
create schema DATABASE;
use DATABASE;
```

## Table
```
drop table if exists TABLE;

create table TABLE (
  FIELD int [not null] [auto_increment | default = EXPR],,,
  FIELD int generated always as (EXPR),
  constraint CONSTRAINT primary key (FIELD,,,),
  constraint CONSTRAINT foreign key (FIELD,,,) references TABLE (FIELD,,,)
);

create [unique] index INDEX on TABLE (FIELD,,,);
```

## CRUD
```
select [distinct] FIELD,,, from TABLE
  [where EXPR] 
  [group by FIELD,,,] 
  [having EXPR]
  [order by FIELD [desc],,,]
  [limit N] [offset K];

with A as (select ...) select ...;
create [or replace] view VIEW as select ...;

select EXPR into @VARIABLE ...;

insert into TABLE (FIELD,,,) values (VALUE,,,),,,;
insert into TABLE (FIELD,,,) select FIELD,,, ...;

update TABLE set FIELD=VALUE,,, [where EXPR];

delete from TABLE where EXPR;

select ... union [all] select ...;
```

## Expression
```
select ...
  where FIELD op VALUE
        FIELD between VALUE and VALUE
        FIELD is [not] null
        FIELD like PATTERN        -- "abc%", "abc_", "[abc]", "[!abc]" 
        FIELD regexp REGEXP 
        FIELD [not] in (VALUE,,,)
        FIELD [not] in (select ...)
        FIELD OP [any | all] (select ...)
```

## Join
```
select ...
  from (A [left | inner | right | outer] join B on A.FIELD=B.FIELD) as C
  from (A [left | inner | right | outer] join (select ...) as B on A.FIELD=B.FIELD) as C
```

## Transactions
```
start transaction;

select ...;
insert ...;
update ...;
delete ...;

if (@correct) then
  commit;
else
  rollback;
end if;
```

## Functions
```
create function FUNCTION(VARIABLE varchar(40))
  returns varchar(40) deterministic
  return concat(upper(substr(VARIABLE, 1, 1)), lower(substr(VARIABLE, 2)));

select FUNCTION(FIELD) as FIELD,,, ...;
```

## Procedures
```
delimiter ;;

create procedure PROCEDURE(in VARIABLE varchar(128))
begin
  declare EXCEPTION condition for sqlstate value '45000';
  signal EXCEPTION set message_text = VARIABLE;
end ;;

delimiter ;

call PROCEDURE('My exception message text');
```
