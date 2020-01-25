# pg-promise Intro

This app displays a list of users persisted to a SQL database and provides a UI for adding new users.

## Technologies

- pg-promise
- axios
- express
- body-parser
- cors
- nodemon
- postgres

## Usage

### Create the database:

```
➜ ~: psql
psql (11.5)
Type "help" for help.

benjaminstone=# CREATE DATABASE facebook_db;
```

### Seed the database

```bash
psql facebook_db < facebook_db.sql
```

### Start the server

```bash
nodemon app.js
```

or

```bash
node app.js
```

### Launch the app

```bash
open index.html
```
