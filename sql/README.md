# SQL Language

[SQL card](https://leetcode.com/explore/learn/card/sql-language/)  
[SQL study plan](https://leetcode.com/study-plan/sql/?progress=x4co3wp1)


## Setup

### Create the network
```
docker network create \
  -d bridge \
  --subnet 172.20.0.0/16 \
  --gateway 172.20.0.1 \
  bridge-dev

docker network ls | grep bridge-dev
```

### Run the database
```
(read -s -p 'Password:' MYSQL_ROOT_PASSWORD ; \
docker container run --rm -d \
  --name dev-mysql \
  --network bridge-dev \
  --ip 172.20.0.201 \
  --volume "$PWD/__mysql:/var/lib/mysql" \
  --env MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
  mysql)

docker container ls --all | grep dev-mysql

mysql_config_editor set --host=172.20.0.201 --port=3306 --user=root --password

docker container stop dev-mysql
```

## Execute a solution
```
cat schema.sql solution.sql test.sql | mysql
```

## Populate and dump database
```
mysql < mydb_schema.sql 
mysql mydb < mydb_data.sql 

mysqldump --no-data --databases mydb > mydb_schema.sql
mysqldump --no-create-info mydb > mydb_data.sql
```

## Polpulate tables from test data
```
perl ./parse_data.pl << EOF | mysql leetcode
Customers=
| id | name  |
| -- | ----- |
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
Orders=
| id | customerId |
| -- | ---------- |
| 1  | 3          |
| 2  | 1          |
EOF
```
