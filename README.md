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

  - Json-Server

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

You need to have Angular CLI installed.

```bash
# Install Angular CLI
$ npm install -g angular-cli
```

### 📦 Run API

```bash
# Go to project folder
$ cd gama-sports

# Install Dependencies
$ npm install

# Run back-end
$ json-server --watch db.json
```
Access API at http://localhost:3000/

### :computer: Run Application

```bash
# Go to web folder
$ cd gama-sports

# Run Aplication
$ ng serve
```
Access the application at http://localhost:4200/

# :man_technologist: Developers
  
  - [Lucas Almeida](https://github.com/lucas-almeida-silva)
  - [Leonardo Silva](https://github.com)
  - [Bruno Hyoji]((https://github.com/brunohyoji)

# :pencil: License

This project is under the [MIT license](LICENSE).
