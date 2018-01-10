## 常用SQL语句和功能

### mysql的2种注释方法
```
 # 我是注释
 --我是注释
```

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

### 数据表相关操作
数据表是一个2维的行和列组成，和excel是一样的；数据表是数据库最重要的组成部分，数据是保存在数据表中的；数据表由行（row）和列（column）来组成；表要求唯一，不要包含特殊字符，最好含义明确；
 ```
 创建表的语法规范
 CREATE TABLE [IF NOT EXISTS] tbl_name(
    字段名称 字段类型 [完整性约束条件]，
    字段名称 字段类型 [完整性约束条件]，
       ...     
 )ENGINE=存储引擎 CHARSET=编码方式;
 
CREATE TABLE IF NOT EXISTS imooc_user(
id INT,
username VARCHAR(20),
password CHAR(32),
email VARCHAR(50),
age TINYINT,
card CHAR(18),
tel CHAR(11),
salary FLOAT(8,2),
married TINYINT(1),
addr VARCHAR(100),
sex ENUM('男','女','保密')
)ENGINE=INNODB CHARSET=UTF8;
 ```
 ```
 mysql中的数据类型
     1，数值型：整数型，浮点数，定点数；
     2，字符串类型
     3，日期时间类型
 ```
Action|SQL SENTENCE|eg|Attentions
|:-:|:-:|:-:|:-:|
查看表|SHOW TABLES;SHOW FILL TABLES FROM/IN mysql;|||
查看表结构|SHOW COLUMN FROM user;|||
查看指定表的详细信息|SHOW CREATE TABLE tbl_name;|||
查看表结构|DESC tbl_name;DESCRIBE tbl_name;SHOW COLUMNS FROM tbl_name;|DESC imooc_user;||
删除数据表|DROP TABLE [IF EXISTS] tbl_name;|DROP TABLE IF EXISTS imooc_users;|再次执行不会报错，可以通过show warnings来查看|
### 要求
- 1，查看当前数据库下的数据表
- 2，查看imooc_user表的详细信息；
- 3，通过三种方式查看指定数据表的表结构
- 4，最后删除imooc_user数据表
### 约束条件
约束|作用
|:-|:-|
unsigned|无符号，无负数，从0开始
zerofill|零填充，当显示长度不够时可以使用补0的效果填充至指定长度
NOT NULL|非空约束，也就是插入值的时候这个字段必须要给值
DEFAULT|默认值，如果插入记录的时候没有给字段赋值，则使用默认值
PRIMARY KEY|主键，标识记录的唯一性，值不能重复，一个表只能有一个主键，自动禁止为空
UNIQUE KEY|唯一性，一个表中可以有多个字段是唯一索引，同样的值不能重复，但是NULL除外
AUTO_INCREAMENT|自动增长，只能用于数值列，而且配合索引来使用
FOREIGN KEY|外键约束







