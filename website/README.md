NOTE: This document is a work in progress, please contribute changes to make it better cause it probably sucks right now! Thanks :)

# Overview
This folder contains a [ReactJS](https://facebook.github.io/react/) project, 'compiled' with [Babel](https://webpack.github.io/) and bundled with [Webpack](https://webpack.github.io/).

Table of contents
=================
  
  * [Getting started](#getting-started)
  * [How to run website on your computer](#how-to-run-website-on-your-computer)
  * [How was this created?](#scaffolding-aka-how-was-this-created)

### Getting Started
If you'd like to contribute to this project, the only things you need to understand are:
- Basic web programming (HTML/CSS/JS)
  - If you have little to no web programming experience, your best bet is to just Google for tutorials on HTML/CSS/JS
- ***[ReactJS](https://facebook.github.io/react/): This basically the 'framework' for this entire folder!!!
  - If you are new to ReactJS I *strongly* suggest spending time (yes, there is a learning curve for newbies) going through the GREAT tutorials ReactJS has on their website, here is the starting point: https://facebook.github.io/react/docs/hello-world.html
  - If you have NO JavaScript experience learning ReactJS could be a bit aggressive, consider learning basic JavaScript skills before taking on ReactJS.
- In my opinion, for the average contributor there's no need to fully understand or become an expert on [Babel](https://webpack.github.io/) and [Webpack](https://webpack.github.io/) but it is nice to understand their purpose.

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
