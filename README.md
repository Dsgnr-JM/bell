<div align="center">
  <img src="https://github.com/Dsgnr-JM/bell/raw/master/logo.png" alt="Logo" height="105">
</div>

<div align="center">
  <h1>BellJs, the sound of a good notifications.</h1>
</div>

[BellJs](https://belljs.vercel.app) is a lightweight, modern, customizable alert library built in vanilla JavaScript making it agnostic. This guide will help you get started with it in an easy way. Check out the [full api](https://belljs.vercel.app/api) for all the information..

## Quick Start

### Using the npm package

To use BellJs in your web project you just need to run the following command inside your project.

```bash
# npm
npm i bell-alert

# pnpm
pnpm add bell-alert
```

### Using the official cdn

You can also use a **jsDelivr** cdn or **unpkg** to import the library, as follows.

- **jsDelivr**:

```html
<link type="stylesheet" rel="https://www.unpkg.com/bell-alert/dist/bell.css"/>
<script href="https://www.unpkg.com/bell-alert/dist/bell.js"/>
```

- **unpkg**:

```html
<link type="stylesheet" rel="https://cdn.jsdelivr.net/npm/bell-alert/dist/bell.css"/>
<script href="https://cdn.jsdelivr.net/npm/bell-alert/dist/bell.js"/>
```

>These are the development versions so they are not minified, if you want to use a minified version put the `.min` before the file extension.

### Importing the library

Depending on whether you used the **npm** package or the **esm** version you can use the **BellJs** modules:

```js
import Bell from "bell-alert"
import "bell-alert/dist/bell.min.css" // If you are using a bundler like vite, webpack or other.
```

This will import the library into your project, so you can start using it.

### Creating and using an alert.

With the library already imported you can easily create and use alerts. You just need to create an instance of **Bell** and pass it the parameters.

```js
const bell = new Bell(params)
```

**BellJs** Accepts two required parameters and one optional one, the first is an object with the **title** (it's the title) and the **description** (it's the description), the second is a `string` with the alert type and finally an object with different parameters, you can see them all in the [full api](https://belljs.vercel.app/api).

```js
const bell = new Bell({
title: "New alert",
description: "BellJs is amazing and light"
},"info")
```

Once the instance is created, all that's left is to display the alert. You can do this using the `launch` method of the same instance.

```js
bell.launch()
```

### Experiment with BellJs

Remember that BellJs is made to be customized to the maximum, due to its intuitive API it is very easy to configure it in different ways.

- **Types**: Learn the different types of alerts in ["Alert Types"](https://belljs.vercel.app/learning-the-basic/choosing-the-type-of-alert).
- **Themes**: Use and create any theme you can imagine in ["Custom and Community Themes"](https://belljs.vercel.app/learning-the-basic/themes).
- **Configuration**: Change bell parameters and create something new, all following the ["Change everything"](https://belljs.vercel.app/learning-the-basic/customized-bell) guide.

Follow the documentation to learn more about this beautiful alert library adaptable to your current design.
