<h1 align="center">Welcome to One Dionys - Routing Library! 👋 </h1>

<p align="center">A package to handle moving between pages or routes in a web application. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-routing-library?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-routing-library?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-routing-library?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-routing-library?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-routing-library.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-routing-library?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-routing-library?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const Router = require('routing-library');

const router = new Router();

router.addRoute('/home', function() {
  console.log('Home Page');
});

router.addRoute('/about', function() {
  console.log('About Page');
});

router.navigate('/home'); // Output: Home Page
router.navigate('/about'); // Output: About Page
```

#### Explanation

* This package provides a simple routing functionality for web applications. It allows you to define routes and their corresponding handlers, and navigate between routes.

#### Return Value

* `addRoute(path, handler)`: This method adds a new route with the specified path and its corresponding handler function.
* `navigate(path)`: This method navigates to the route specified by the given path and executes its handler function. If the route is not found, it logs an error message.

## 📆 Release Date

* v1.0.0 : 07 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Routing Library is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Routing Library? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
