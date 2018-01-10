### insert
```
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

INSERT imooc_user(id,username,password,email,age,card,tel,salary,married,addr,sex)
VALUES(1,'Scott','123456','github@163.com',18,'420624185855555554','18325525513',88888.25,1,'深圳','男');

INSERT imooc_user(id,username,password,email,age,card,tel,salary,married,addr,sex)
VALUES(-1,'Amanda','123456','github@163.com',18,'420624185855555554','18325525513',88888.25,1,'深圳','女');

select * from imooc_user;
```
