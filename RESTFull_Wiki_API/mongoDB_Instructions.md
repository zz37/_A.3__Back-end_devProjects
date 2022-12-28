Creation of RESFUL API

- Software used:
	* mongo db `v6.0`.
	* studio 3T. Is a GUI for database creation, instead of using the mongoshell terminal.

Mongodb is installed from homebrew.

To use mongo following commands in a terminal:

* To show mongodb services command: `brew services`.
* To show current running services: `brew services list`.
* To start mongodb services: `brew services start mongodb-community`. 
* To stop mongodb if it's already running: `brew services stop mongodb-community`.
* To run mongo shell: `mongosh`.


### Connection to Studio 3T
To connect to Studi 3T follow the steps below.

* Start mongoshell: `mongosh`. This ensure the connection and start of monogoshel server.

* Connect to `localhost`:`port`.
	* `localhost`:`27017`.

### Adding a document
To add a document select the **Intellishell** and next **Add Document**.

# Wiki-API
Points to create the Wiki-API.
1. Create new Directory called Wiki-API.
2. Initialise NPM and install `body-parser`, `mongoose`, `ejs` and `express`.
3. Createa new file called