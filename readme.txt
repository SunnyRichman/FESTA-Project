Before you can run the website, you should follow these step.

=== After extracted "sec1_gr6_pj2_ID005_009_023_082_132" ===
You will get .sql file, readme.txt, and 2 folders. I would like you to focus on those folders.
1. You can see the folder name "sec1_gr6_fe_src", please rename it to be "Frontend".
2. You can see the folder name "sec1_gr6_ws_src", please rename it to be "Backend".
3. Please run the .sql file via MySQL Workbench

=== In the part of front-end ===
1. Open Node.js command prompt.
2. Change directory to folder name "Frontend".
3. Run command 'npm init'
4. Fill in these following fields.
	4.1. name: festa
	4.2. version: 1.0.0
	4.3. main: FESTA-app.js
	4.4. test: nodemon FESTA-app.js
	4.5. author: gr6
	4.6. license: ISC
	4.7. description: <leave it empty>
	After you fill in these fields, please press enter.
5. After command 'npm init' has been run, please visit the file name "package.json". You will see field "scripts" and inner field "test" inside. Please change from "test" to "start".
6. After No.5 has been done. Use Node.js command prompt and run these command (Priority isn't needed).
	6.1. npm install express
	6.2. npm install nodemon

=== In the part of back-end ===
1. Open Node.js command prompt.
2. Change directory to folder name "Backend".
3. Run command 'npm init'
4. Fill in these following fields.
	4.1. name: festa
	4.2. version: 1.0.0
	4.3. main: FESTA-app.js
	4.4. test: nodemon FESTA-app.js
	4.5. author: gr6
	4.6. license: ISC
	4.7. description: <leave it empty>
	After you fill in these fields, please press enter.
5. After command 'npm init' has been run, please visit the file name "package.json". You will see field "scripts" and inner field "test" inside. Please change from "test" to "start".
6. After No.5 has been done. Use Node.js command prompt and run these command (Priority isn't needed).
	6.1. npm install express
	6.2. npm install nodemon
	6.3. npm install dotenv
	6.4. npm install mysql2
	6.5. npm install --save cors

=== In the part of mysql ===
1. Please open workbench of MySQL, login, and go to menu server and previleges.
2. Find the button "Add account" and fill in these fields.
	2.1. Login name: FESTA
	2.2. Authentication type: standard
	2.3. Limit to hosts matching: localhost
	2.4 Password and Confirm password: sec1group6
3. Find the menu "Schema Previleges". Then press "Add entry".
4. Select "Selected Schema" and choose sec1_gr6_database, press OK.
5. Click "select all" to allow every privileges, then cilck apply.
6. Go back to VS code, create .env file and fill in these fields.
	PORT=3100
	MYSQL_HOST=localhost
	MYSQL_USERNAME=FESTA
	MYSQL_PASSWORD=sec1group6
	MYSQL_DATABASE=sec1_gr6_database
7. Set up connection in Backend JavaScript file.

After you finish these steps, both front-end and back end servers are ready for you, let's type "npm start" at you terminal.