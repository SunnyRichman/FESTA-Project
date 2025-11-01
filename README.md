# Before you can run the website, you should follow these step.

Use this command to clone repository
```git clone https://github.com/SunnyRichman/FESTA-Project.git```
## After clone git repository
Please run the .sql file via MySQL Workbench

### In the part of front-end 
1. Open Node.js command prompt.
2. Change directory to folder name "Frontend".
3. Run command ```npm init'```
4. Fill in these following fields.
```
name: festa
version: 1.0.0
main: FESTA-app.js
test: nodemon FESTA-app.js
author: <anything you want>
license: ISC
description: <leave it empty>
```
After you fill in these fields, please press enter.<br />
5. After command 'npm init' has been run, please visit the file name "package.json". You will see field "scripts" and inner field "test" inside. Please change from "test" to "start". <br />
6. After No.5 has been done. Use Node.js command prompt and run these command (Priority isn't needed).<br />
```npm install express```<br />
```npm install nodemon```

### In the part of back-end
1. Open Node.js command prompt.
2. Change directory to folder name "Backend".
3. Run command ```npm init'```
4. Fill in these following fields.
```
name: festa
version: 1.0.0
main: FESTA-app.js
test: nodemon FESTA-app.js
author: <anything you want>
license: ISC
description: <leave it empty>
```
After you fill in these fields, please press enter.<br />

5. After command 'npm init' has been run, please visit the file name "package.json". You will see field "scripts" and inner field "test" inside. Please change from "test" to "start".


6. After No.5 has been done. Use Node.js command prompt and run these command (Priority isn't needed).<br />

```npm install express```<br />
```npm install nodemon```<br />
```npm install dotenv```<br />
```npm install mysql2```<br />
```npm install --save cors```

### In the part of mysql
1. Please open workbench of MySQL, login, and go to menu server and previleges.
2. Find the button "Add account" and fill in these fields.
```
Login name: FESTA
Authentication type: standard
Limit to hosts matching: localhost
Password and Confirm password: <anything you want>
```
3. Find the menu "Schema Previleges". Then press "Add entry".
4. Select "Selected Schema" and choose sec1_gr6_database, press OK.
5. Click "select all" to allow every privileges, then cilck apply.
6. Go back to VS code, create .env file and fill in these fields.
```
PORT=3100
MYSQL_HOST=localhost
MYSQL_USERNAME=FESTA
MYSQL_PASSWORD=<anything you want>
MYSQL_DATABASE=sec1_gr6_database
```
7.Set up connection in Backend JavaScript file.

After you finish these steps, both front-end and back end servers are ready for you, let's type ```npm start``` at you terminal.
