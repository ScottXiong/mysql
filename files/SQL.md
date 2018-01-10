## 常用SQL语句和功能
### 查询库表和版本信息
SQL| 作用
|:-:|:-:|
SELECT USER() |得到登录的用户
SELECT VERSION() |得到MYSQL的版本信息
SELECT NOW()| 得到当前的日期
SELECT DATABASE() |的刀当前打开的数据库
### 数据库相关操作
Action|SQL SENTENCE|eg|Attentions
|:-:|:-:|:-:|:-:|
创建数据库|CREATE {DATABASE\|SCHEMA} db_name;CRETE DATABASE IF NOT EXISTS test1|create database test1;/create schema test2;|数据库名最好有意义，名称不要含特殊字符或mysql关键字create database \`database\`
查询当前数据库|SHOW DATABASES;SHOW SCHEMAS;|||
