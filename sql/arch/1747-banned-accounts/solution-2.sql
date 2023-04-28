create view solution as
  select distinct l.account_id
    from LogInfo l 
      left join LogInfo r on 
        l.ip_address != r.ip_address and
        l.account_id = r.account_id
    where l.login between r.login and r.logout 
;

select * from solution;

select * from Expected;
select * from LogInfo;
