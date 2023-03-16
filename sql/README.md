# SQL Language

https://leetcode.com/explore/learn/card/sql-language/

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
docker container run --rm -d \
  --name dev-mysql \
  --network bridge-dev \
  --ip 172.20.0.201 \
  --volume "$PWD/__mysql:/var/lib/mysql" \
  --env MYSQL_ROOT_PASSWORD=LikeBeingThere \
  mysql

docker container ls --all | grep dev-mysql

mysql_config_editor set --host=172.20.0.201 --port=3306 --user=root --password

docker container stop dev-mysql
```

## Populate and dump database
```
mysql < mydb_schema.sql 
mysql < mydb_data.sql 

mysqldump --no-data --databases mydb > mydb_schema.sql
mysqldump --no-create-info mydb > mydb_data.sql
```
