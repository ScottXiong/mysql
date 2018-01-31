
```
INSERT imooc_user(username,password, email, age,sex,addr,card,salary,tel,married) values('Paige','222','page@.gmail.com',18,'woman','内蒙古','420938199889872345',100000,18326543765,1);

CREATE TABLE `regular_sentences` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `heading` varchar(30) NOT NULL DEFAULT 'I am the header',
  `tag` varchar(50) DEFAULT NULL,
  `content` mediumtext,
  `creat_time` datetime DEFAULT NULL,
  `last_modify` datetime DEFAULT NULL,
  `who` char(20) DEFAULT NULL,
  `n` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

INSERT regular_sentences(heading,tag,content,creat_time,last_modify,who,n) 
values('country of origin','by','  Walmart Canada Import Information (for Domestic items \'Imported for\' for Direct Imports \'Imported by\'), which will be used for your items?',now(),now(),'scott',floor(rand()*100));

```
