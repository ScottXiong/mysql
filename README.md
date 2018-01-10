# mysql
被oracal收购，常用的关系型数据库（database按照数据结构组织，存储，管理数据的仓库,[下载](https://dev.mysql.com/downloads/)--选择社区版,默认端口3306
- 配置文件：my.cnf
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
mysql -uroot -p -D db_name  //登陆的时候打开指定的数据库 -D(--database) eg:mysql -uroot -p -D mysql  默认打开mysql数据库
\q  退出
show databases;
select now();
select database();
select version();
select user(); //得到当前登陆的用户

```

### 技巧
- 可以通过help或者\h或者？加上关键字查询手册
- \c 取消当前命令的执行 eg: `select database() \c`

### 客户端连接mysql
- 1，先启动mysql服务
- 2，再连接
