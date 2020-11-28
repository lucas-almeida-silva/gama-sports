# Gama Sports

# :page_with_curl: Table of Contents

* [About](#information_source-about)
* [Technologies](#computer-technologies)
* [Features](#rocket-features)
* [How to run](#seedling-how-to-run)
* [Developers](#man_technologist-developers)
* [License](#pencil-license)

# :information_source: About

This is a project for a virtual sporting goods store, developed for the Web Programming discipline, offered by Fatec Ipiranga in the Systems Analysis and Development course.

# :computer: Technologies

### 📦 API

  - Python
  - Flask
  - SQLite

### :desktop_computer: Front-end

  - Angular 10
  - Angular Material
  - Sass
  
# :rocket: Features

  - List of products
  - Products search
  - View the details of a product
  - Handling of the cart (adding items, removing items and increasing and decreasing the quantity of an item)
  - Register
  - Login
  - Password recovery

# :seedling: How to run

```bash
# Clone Repository
$ git clone https://github.com/lucas-almeida-silva/game-sports.git
```

You need to have Angular CLI andn Python installed.

```bash
# Install Angular CLI
$ npm install -g angular-cli
```

Install Python 3.8.1:

https://www.python.org/downloads/release/python-381/


### 📦 Run API

```bash
# Install dependencies
$ pip install Flask
$ pip install SQLAlchemy
$ pip install flask_sqlachemy
$ pip install uuid
$ pip install Werkzeug
$ pip install PyJWT
$ pip install Flask-Mail
$ pip install bcrypt
$ pip install validate_email
$ pip install validate_docbr
$ pip install flask-marshmallow
$ pip install marshmallow-sqlalchemy
$ pip install flask-cors

# Go to server folder
$ cd gama-sports/server

# Run back-end
$ python API.py
```
Access API at http://localhost:5000/

### :computer: Run Application

```bash
# Go to web folder
$ cd gama-sports

# Run Aplication
$ ng serve
```
Access the application at http://localhost:4200/

## Run Application and API at the same time

There is a command configured to run the application and the API at the same time.

```bash
# Go to web folder
$ cd gama-sports

# Run aplication and server
$ npm run dev
```

# :man_technologist: Developers
  
  - [Lucas Almeida](https://github.com/lucas-almeida-silva)
  - [Leonardo Silva](https://github.com/leonardosilva07)
  - [Bruno Hyoji](https://github.com/brunohyoji)

# :pencil: License

This project is under the [MIT license](LICENSE).
