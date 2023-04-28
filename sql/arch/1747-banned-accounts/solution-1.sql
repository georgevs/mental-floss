create view solution as
  select distinct l.account_id
    from LogInfo l 
      left join LogInfo r on 
        l.account_id = r.account_id and 
        l.ip_address != r.ip_address and
        ((r.login between l.login and l.logout) or
        (r.logout between l.login and l.logout))
    where r.ip_address is not null
;

select * from solution;

select * from Expected;
select * from LogInfo;
