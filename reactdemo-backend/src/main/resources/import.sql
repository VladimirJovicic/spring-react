--roles
insert into role (id,name) values (1,'USER');
insert into role (id,name) values (2,'ADMIN');

--users
insert into user (id,username,password,email,name,surname,phone,role_id, profile_pic) values (1,'testadmin','$2a$10$tTIgFUPsOQkGJsQJzKuSL.4xF7BsbEZZ79/qL9fIyoIUCCStwRU7K','test2@test.com','TEST_ADMIN','TEST_ADMIN_SURNAME','06154777',2,'src\\main\\resources\\profile_pictures\\user.png');
insert into user (id,username,password,email,name,surname,phone,role_id, profile_pic) values(2,'testuser','$2a$10$d7hb7ONK4.lGr2XIBJxTqOP1jYoUcLUxqyXw005.9hazzbHqZEXYS','test@test.com','TEST_FIRST_NAME','TEST_LAST_NAME','06154157',1,'src\\main\\resources\\profile_pictures\\user.png');
--sections
insert into section (id,name,description,user_id) values (1,'ime1','Ovo je opis jedne oblasti.Sluzi samo za tekst kako ce sve otp izgledati... pozz,Ovo je opis jedne oblasti.Sluzi samo za tekst kako ce sve otp izgledati... pozz,Ovo je opis jedne oblasti.Sluzi samo za tekst kako ce sve otp izgledati... pozz',1);
insert into section (id,name,description,user_id) values (2,'ime2','Ovo je opis jedne oblasti.Sluzi samo za tekst kako ce sve otp izgledati... pozz',1);
insert into section (id,name,description,user_id) values (3,'ime3','Ovo je opis jedne oblasti.Sluzi samo za tekst kako ce sve otp izgledati... pozz',1);
insert into section (id,name,description,user_id) values (4,'ime4','Ovo je opis jedne oblasti.Sluzi samo za tekst kako ce sve otp izgledati... pozz',1);
insert into section (id,name,description,user_id) values (5,'ime5','Ovo je opis jedne oblasti.Sluzi samo za tekst kako ce sve otp izgledati... pozz',1);

--articles
insert into article (id, name, description,section_id) values (1,'prvitest','neki opis sa prvi testneki opis sa prvi testneki opis sa prvi testneki opis sa prvi testneki opis sa prvi testneki opis sa prvi testneki opis sa prvi testneki opis sa prvi testneki opis sa prvi testneki opis sa prvi test',1); 
insert into article (id, name, description,section_id) values (2,'prvitest','neki opis sa drugi test',1);
insert into article (id, name, description,section_id) values (3,'treci test','neki opis sa treci test',1);
insert into article (id, name, description,section_id) values (4,'cetvrti test','neki opis sa cetvrti test',1);
insert into article (id, name, description,section_id) values (5,'peti test','neki opis sa peti test',1);

insert into article (id, name, description,section_id) values (6,'prvitest','neki opis sa prvi test',2); 
insert into article (id, name, description,section_id) values (7,'prvitest','neki opis sa drugi test',2);
insert into article (id, name, description,section_id) values (8,'treci test','neki opis sa treci test',2);
insert into article (id, name, description,section_id) values (9,'cetvrti test','neki opis sa cetvrti test',3);
insert into article (id, name, description,section_id) values (10,'peti test','neki opis sa peti test',3);

--comments
insert into comment(id, content, article_id) values (1,'ovo je kul',1);
insert into comment(id, content, article_id) values (2,'ovo nije kul',1);
insert into comment(id, content, article_id) values (3,'ovo je smor',1);
insert into comment(id, content, article_id) values (4,'ovo je sranje',1);
insert into comment(id, content, article_id) values (5,'bravo za tebe koji to radis jer si stvarno bogotac',1);

insert into comment(id, content, article_id) values (6,'ovo je kul',2);
insert into comment(id, content, article_id) values (7,'ovo nije kul',2);
insert into comment(id, content, article_id) values (8,'ovo je aaaaaa',2);
insert into comment(id, content, article_id) values (9,'glup si',2);
insert into comment(id, content, article_id) values (10,'bravo za tebe koji to radis jer si stvarno bogotac',2);

insert into comment(id, content, article_id) values (11,'prodajem drva',3);
insert into comment(id, content, article_id) values (12,'prodajem svinje za klanje',3);
insert into comment(id, content, article_id) values (13,'prodajem zenu povoljno importovana iz japana',3);
insert into comment(id, content, article_id) values (14,'glup si',4);
insert into comment(id, content, article_id) values (15,'prodaje li neko usisivac?',4);

insert into comment(id, content, article_id) values (16,'ovo je kul',5);
insert into comment(id, content, article_id) values (17,'ovo nije kul',5);
insert into comment(id, content, article_id) values (18,'ovo je smor',5);
insert into comment(id, content, article_id) values (19,'ovo je sranje',6);
insert into comment(id, content, article_id) values (20,'bravo za tebe koji to radis jer si stvarno bogotac',6);

insert into comment(id, content, article_id) values (21,'ovo je kul',6);
insert into comment(id, content, article_id) values (22,'ovo nije kul',6);
insert into comment(id, content, article_id) values (23,'ovo je aaaaaa',7);
insert into comment(id, content, article_id) values (24,'glup si',7);
insert into comment(id, content, article_id) values (25,'bravo za tebe koji to radis jer si stvarno bogotac',8);

insert into comment(id, content, article_id) values (26,'prodajem drva',8);
insert into comment(id, content, article_id) values (27,'prodajem svinje za klanje',9);
insert into comment(id, content, article_id) values (28,'prodajem zenu povoljno importovana iz japana',10);
insert into comment(id, content, article_id) values (29,'glup si',10);
insert into comment(id, content, article_id) values (30,'prodaje li neko usisivac?',10);

