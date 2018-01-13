var express=require('express')
var app=express()
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
app.use(cookieParser());
// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json

app.use(bodyParser.json())
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database:'goods',
    port: 3306
});
function creaateCon(){
  return conn=mysql.createConnection({
	host: 'localhost',
    user: 'root',
    password: 'root',
    database:'goods',
    port: 3306
	})
}
app.get('/',function(req,res){
	res.sendfile("index.html")
})
//删除

app.get('/api/remove/:id',(req,res)=>{
	 creaateCon()
	  conn.connect();
	  conn.query('delete from goods where id='+req.params.id, function(err, result) {
	    if (err) throw err;
	    res.send("删除数据成功")
	  })
	  conn.end();  
})

//查询

app.get('/api/find',(req,res)=>{
	 creaateCon()
	conn.connect();
	 conn.query('SELECT * from goods', function(err, result) {
    if (err) throw err;
    res.json({code:200,msg:"OK",result})
    conn.end();
    }) 
})
//find one

app.get('/api/find/:id',(req,res)=>{
	creaateCon()
	conn.connect();
	conn.query('SELECT * from goods where id='+req.params.id, function(err, result) {
    if (err) throw err;
    res.json({code:200,msg:"OK",result})
    })
	 conn.end();
	 })

//新增 add 搜集用户信息，多条信息，最好用表单且post方法


app.all('/api/add',(req,res)=>{
	creaateCon()
	conn.connect();
	// res.send(req.body)

	conn.query(`insert into goods(name,brandCode) values('${req.body.name}',"520055")` , function(err, result) {//varchar 字段必须要加引号

    if (err) throw err;
    console.log("数据添加成功")
    res.json(result)
    })
    conn.end();  
})
//删除

app.get('/api/update/:id',(req,res)=>{
	creaateCon()
	conn.connect();
	conn.query('update goods set name="panda",price=10 where id='+req.params.id,function(err,result){
    if (err) {throw err};
    res.send("更新数据成功")
    conn.end();
    })
})
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.listen("8888",()=>{
	console.log("server is running at port 8888")
})
 
