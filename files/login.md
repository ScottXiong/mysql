### mysql服务开启方式（注意以；和\g 结尾）
```
---method one 暗文登陆----
mysql -uroot -p
pwd
exit //log out

---method two 明文登陆（不太推荐，不安全）---
mysql -uroot -proot// 默认root
quit //log out
mysql -V //mysql --version查看版本信息
mysql -uroot -p -D db_name  //登陆的时候打开指定的数据库 -D(--database) eg:mysql -uroot -p -D mysql 
默认打开mysql数据库
\q  退出
show databases;
select now();
select database();
select version();
select user(); //得到当前登陆的用户

```
