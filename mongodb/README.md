# Mongo DB
`Mongo db` is a database system. It is `NoSQL database`, NoSQL stand for `not only sql`. Mongodb is schema less, it contains **collection** as tables and **document** as independent item in collection. these document look like JOSN object

```bash
# To stop mongo db server
> net stop MongoDB

# set path to mongodb database to reside.
# path could be any valid folder url
> mongod --dbpath "C:\data\mdb"

# Start mongo db server
> mongod

# List down all the dbs in the mongo server
> show dbs

# Switch to database. it will create if the database does not exists.
# shop is db name
> use shop

# Insert data in to a collection
> db.products.insertOne({"name": "A Book", "price": 12.99 })

### output
# { acknowledged: true, insertedId: ObjectId("5abdfdfd")}

# Find all item in collection
> db.products.find()

# Find all item with pretty print
> db.products.find().pretty()


```

## **`Document & CRUD Basics`**
```bash
# 
>

```

## **`Mongo security`**
```bash
#
> use admin
> db.createUser({user:"pervez", pwd:"password", roles: ["userAdminAnyDatabase"]})

> db.auth('pervez', 'password');
> show dbs
> show collections
# or
# connect to database with authenticated user
> mongo -u pervez -p password --authenticationDatabase admin

# switch to database and create user
> use shop 
> db.createUser({user:"appdev", password:"dev", roles:["readWrite"]})
> db.auth('appdev', 'dev')
> db.logout();

# connect with new database user
> mongo -u appdev -p dev --authenticationDatabase shop
> use shop
# now you can insert data to the collection
> db.product.insertOne({name:"new Boo"})

# How to update roles via admin user 
> mongo -u pervez -p password --authenticationDatabase admin
> use shop
> db.updateUser("appdev", {roles:["readWrite",  {role:"readWrite", db:"blog"}]})
# Following command will list all the roles detail of appdev user
> db.getUser("appdev")

> openssl req -newkey rsa:2048 -new -x509 -days 365 -nodes -out mongodb-cert.crt -keyout mongodb-cert.key

> type mongodb-cert.key mongodb-cert.crt > monogdb.pem
# Attach ssl to mongodb
> mongod --sslMode requireSSL --sslPEMkeyFile mongodb.pem

# open mongodb with ssl
> mongo --ssl --sslCAFile mongodb.pem --host localhost
```

## **`Built-in Roles`**
1) **`Database user`**: `"read"`, and `"readWrite"`
2) **`Database Admin`**: `"dbAdmin"`, `"userAdmin"`, and `"dbOwner"`
3) **`All Database Roles`**: `"readAnyDatabase"`, `"readWriteAnyDatabase"`, `"userAdminAnyDatabase"`, and `"dbAdminAnyDatabase"`
4) **`Cluster Admin`**: `"clusterManager"`, `"clusterMonitor"`, `"hostManager"`, and `"clusterAdmin"`
5) **`Backup/Restore`**: `"backup"`, and `"restore"`
6) **`Superuser`**: `"dbOwner(admin)"`, `"userAdmin(admin)"`, and `"userAdminAnyDatabaseRoot"`

### Notes:
1) mongodb server does not directly store the data it talks to the **Storage Engine**. storage engine can be replaced based on the choice.
2) **WiredTiger** is a default storage engine

### Reference
1) [Official "Encryption at Rest" Docs: ](https://docs.mongodb.com/manual/core/security-encryption-at-rest/)

2) [Official Security Checklist:](https://docs.mongodb.com/manual/administration/security-checklist/)

3) [What is SSL/ TLS?](https://www.acunetix.com/blog/articles/tls-security-what-is-tls-ssl-part-1/)

4) [Official MongoDB SSL Setup Docs:](https://docs.mongodb.com/manual/tutorial/configure-ssl/)

5) [Official MongoDB Users & Auth Docs:](https://docs.mongodb.com/manual/core/authentication/)

6) [Official Built-in Roles Docs:](https://docs.mongodb.com/manual/core/security-built-in-roles/)

7) [Official Custom Roles Docs:](https://docs.mongodb.com/manual/core/security-user-defined-roles/)


## Performance
1) capped collection, oldest data will be deleted as soon as capped size reached and  new data required to be added to collection
```bash
> db.createCollection("capped", {capped:true, size:1000, max:3})
> db.capped.inserverOne({name:"pervez"})
```

### Notes
1) **mongos** : is a router in sharding.

### Reference