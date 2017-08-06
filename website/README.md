NOTE: This document is a work in progress, please contribute changes to make it better cause it probably sucks right now! Thanks :)

# Overview
This folder contains a [ReactJS](https://facebook.github.io/react/) project, 'compiled' with [Babel](https://webpack.github.io/) and bundled with [Webpack](https://webpack.github.io/).

Table of contents
=================
  
  * [Tech stack](#tech-stack)
  * [How to run website on your computer](#how-to-run-website-on-your-computer)
  * [How was this created?](#scaffolding-aka-how-was-this-created)

### Tech stack
- Basic web programming (HTML/CSS/JS)
- [ReactJS](https://facebook.github.io/react/)
  - Get started: https://facebook.github.io/react/docs/hello-world.html
- [Babel](https://webpack.github.io/)
- [Webpack](https://webpack.github.io/)

### How to run website on your computer
- Make sure you have [NodeJS](https://nodejs.org/en/) installed on your computer.
- Clone this repo (If you don't have Git installed follow these [instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git))
  - `git clone https://github.com/JakeRuth/cubers-unite.git`
- Go to the /website folder
- Run `npm install`
- Run `npm start`
- Open Google Chrome and go to URL [http://localhost:3000/](http://localhost:3000/)

### Scaffolding (Aka 'How was this created?')
This website folder was created with `react-create-app website` command (See: https://github.com/facebookincubator/create-react-app)

After creation and stripping away some default UI code (you can browse the early commits if you'd like) I ran `npm run eject` (See: https://github.com/facebookincubator/create-react-app#user-content-converting-to-a-custom-setup)
