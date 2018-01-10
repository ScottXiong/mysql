## 常用SQL语句和功能
### 注释
- # 我是注释
- --我是注释
### 查询库表和版本信息
SQL| 作用
|:-:|:-:|
SELECT USER() |得到登录的用户
SELECT VERSION() |得到MYSQL的版本信息
SELECT NOW()| 得到当前的日期
SELECT DATABASE() |得到当前打开的数据库
### 数据库相关操作
Action|SQL SENTENCE|eg|Attentions
|:-:|:-:|:-:|:-:|
创建数据库|CREATE {DATABASE\|SCHEMA} db_name;|create database test1;create schema test2;|数据库名最好有意义，名称不要含特殊字符或mysql关键字create database \`database\`
查询当前数据库|SHOW DATABASES;SHOW SCHEMAS;|||
查看上个语句产生的警告信息|SHOW WARNINGS;|||
创建数据库的同时检测，没有则创建|CREATE DATABASE IF NOT EXISTS test1||
创建数据库的同时指定编码|CREATE DATABASE {IF NOT EXISTS} db_name DEFAULT CHARACTER SET [=] \`charset\`|CREATE DATABASE IF NOT EXISTS tets2 CHARACTER SET \`UTF8\`;CREATE DATABASE IF NOT EXISTS tets3 CHARACTER SET = \`GBK\`|DEFAULT&= 可以省略|
查看指定数据库的详细信息(编码)|SHOW CREATE DATABASE db_name|||
修改指定数据库的编码方式|ALTER DATABASE db_name [DEFAULT] CHARACTER SET [=] charset|ALTER DATABASE mysql CHARACTER SET \`UTF8\`;|[]内表可选|
打开指定的数据库|USE db_name;|||
得到当前打开的数据库|SELECT DATABASE();\|SCHEMA();|||
删除当前的数据库|DROP DATABASE db_name;|||
如果存在则删除数据库|DROP DATABASE IF EXISTS test2;|||



