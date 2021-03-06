CREATE DATABASE CARD_CLIENT;
USE CARD_CLIENT;

CREATE TABLE IF NOT EXISTS USR( 
	USER_ID int NOT NULL PRIMARY KEY AUTO_INCREMENT, 
	NAME varchar(100) NOT NULL,
	EMAIL varchar(100) NOT NULL,
	PASSWORD varchar(100) NOT NULL,
	USER_TYPE_CD varchar(10) NOT NULL);
	
CREATE TABLE IF NOT EXISTS BRAND(  BRAND_ID int NOT NULL PRIMARY KEY AUTO_INCREMENT, NAME varchar(100) NOT NULL, BRAND_COLOR varchar(7) NOT NULL DEFAULT '#fff', LOGO_URL varchar(255), USER_ID INT NOT NULL);


CREATE TABLE IF NOT EXISTS CARD( 
	CARD_ID int NOT NULL PRIMARY KEY, 
	LEVEL INT NOT NULL,    
    POINTS INT NOT NULL,
    VALUE VARCHAR(20) NOT NULL,
    OWNER_ID INT NOT NULL,
    CARD_TEMPLATE_ID INT NOT NULL);

CREATE TABLE IF NOT EXISTS CARD_TEMPLATE( 
	CARD_TEMPLATE_ID int NOT NULL PRIMARY KEY, 
    BRAND_ID INT NOT NULL,
    VALUE VARCHAR(20) NOT NULL,
    CREDIT_PERCENTAGE  DECIMAL(2,2) NOT NULL,
    REDEMPTION_PERCENTAGE DECIMAL(2,2) NOT NULL);

ALTER TABLE  USR ADD INDEX user_name_btree (NAME);
ALTER TABLE BRAND ADD CONSTRAINT BRAND_USER_FK FOREIGN KEY(USER_ID)references USR(USER_ID);
ALTER TABLE CARD ADD CONSTRAINT CARD_USER_FK FOREIGN KEY(OWNER_ID)references USR(USER_ID);
ALTER TABLE CARD ADD CONSTRAINT CARD_TEMPLATE_FK FOREIGN KEY(CARD_TEMPLATE_ID)references CARD_TEMPLATE(CARD_TEMPLATE_ID);
ALTER TABLE CARD_TEMPLATE ADD CONSTRAINT CARD_TEMPLATE_BRAND_FK FOREIGN KEY(BRAND_ID)references BRAND(BRAND_ID);


insert into USR(NAME,EMAIL,PASSWORD, USER_TYPE_CD) 
	values ("Ivan","jaisen.95@gmail.com", "1234" ,"1");

insert into USR(USER_ID, NAME,EMAIL,PASSWORD, USER_TYPE_CD)
 values (2, "Juan", "juan@gmail.com","1234","2");


INSERT INTO CARD_TEMPLATE(CARD_TEMPLATE_ID,BRAND_ID,VALUE,CREDIT_PERCENTAGE, REDEMPTION_PERCENTAGE)values(1,1,'IMgyeryVHV',.1,.1);

INSERT INTO CARD(CARD_ID,LEVEL,POINTS,VALUE,OWNER_ID, CARD_TEMPLATE_ID)values(1,1,1,'IMgyeryVHV',1,1);
/*
insert into CARD( CARD_ID,LEVEL, POINTS,BRAND_ID,VALUE, 
				  CREDIT_PERCENTAGE, REDEMPTION_PERCENTAGE ,OWNER_ID)
values(2,1,2,2,'fooo33',.1,.1,1);
*/

insert into CARD( CARD_ID,LEVEL, POINTS,BRAND_ID,VALUE, CREDIT_PERCENTAGE, REDEMPTION_PERCENTAGE ,OWNER_ID) values(3,1,1,3,'c6df7058-3ed8',.1,.1,1);

CREATE USER 'client_card'@'localhost' IDENTIFIED BY 'Lzczac95&';



GRANT CREATE on *.* TO 'client_card'@'localhost' WITH GRANT OPTION;

2.57.90.16