```
CREATE TABLE regular_sentences(
 id INT UNSIGNED KEY AUTO_INCREMENT ,
 tag VARCHAR(20),
 content TINYTEXT,
 creat_time DATETIME,
 last_modify DATETIME,
 who CHAR(20)
);

INSERT regular_sentences(tag,content,creat_time,last_modify,who) 
Values('by','Walmart Canada Import Information (for Domestic items \'Imported for\' for Direct Imports \'Imported by\'), which will be used for your items?',NOW(),NOW(),'Scott');




INSERT regular_sentences(tag,content,creat_time,last_modify,who) 
Values('hw','NOTE TO SUPPLIER: We had a meeting with Walmart on Thursday (Jan 4th, 2018), in the meeting they told us that Halloween 2018 will not have any Spanish. So, we will remove from your files.',NOW(),NOW(),'Scott');
```
