# Star Wars Starships

Solution of the recruitment task. \
[Demo](https://stolar-code.github.io/star-wars-starships/)

## Table of contents

- [General informations](#general-informations)
- [Technologies](#technologies)
- [Features](#features)
- [Lighthouse stats](#lighthouse-stats)
- [Available Scripts](#available-scripts)

## General informations

A simple app that allows the user to complete an order for starship models from the Star Wars movie.
The number of added models will be displayed next to the cart.
The data about the starship models was taken from this [API](https://swapi.apis.guru/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies

Project is created with:

- create-react-app
- gh-pages
- styled-components
- styled-normalize
- apollo/client
- graphql

## Features

- add a quantity of starship models to your cart and display the total count
- increase/decrease the quantity of starships by clicking on the appropriate button
- display the cart in the bottom right corner after scrolling down
- a button that displays all starships when clicked on

## Lighthouse stats

![lighthouse stats](https://i.ibb.co/C6Q9pLZ/lighthouse-Stats.png 'lighthouse stats')

| Category       | Score |
| -------------- | ----- |
| Performance    | 99    |
| Accessibility  | 100   |
| Best Practices | 100   |
| SEO            | 100   |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
