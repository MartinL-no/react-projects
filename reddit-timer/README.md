# Reddit Timer

## Overview

I created this app as part of course where I had to work within a professional real-world development environment.

Designs were provided via [Figma](https://figma.com/). The project was split into small tasks using [Clickup](https://clickup.com/) as a project management tool. I created a pull request for every task. Then the code was reviewed by a senior developer and checked against automated testing tools such as [cypress](https://www.cypress.io/), [jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/).

For the project I choose to use React, React Router, Styled-Components and React Hook Form to validate the users input.

I also gained a lot of real world skills from making the project, such as -

- **Creating [pixel-perfect]((https://chrome.google.com/webstore/detail/pixel-perfect-pro/nnhifpoojdlddpnhjbhiagddgckpmpfb)) designs**
- **Planning and implementing a complex UI component**
- **Implement data fetching with error handling**
- **Debugging inside an IDE**
- **Writing integration tests**
- **Professional Git workflow with pull requests**
- **Code reviews**
- **Continuous integration**

The code reviews gave me an insight into a lot of best practices to follow and how to work at a prefessional standard


#### LIVE LINK : https://martinlrmr-quizzical.netlify.app/

## Features

- The app consist of two pages, a search page and about/how it works page 

- Allows users to search the Reddit database for data about Reddit channels using an API call

- After searching the user is shown an interactive heatmap of the days and hours of the 500 most popular posts to the channel

- When a cell is clicked on the user is shown more details about the individual posts and links to the post and the authors information page

- Pressing the submit button, triggers more conditional styling of the questions (correct answers in red, wrong in green) and reveals the users score and 'start new game' button                   

## Tech Used / Dependencies

- This is a React App bootstrapped with CRA

- Internal routing is facilated by React Router

- [Styled Components](https://styled-components.com/) used for CSS styling

- [React Hook Form](https://react-hook-form.com/) used for form validation

- [Testing Library](https://testing-library.com/) and [Jest](https://jestjs.io/) for interation (still working on this)

- [Prop Types](https://reactjs.org/docs/typechecking-with-proptypes.html) for typechecking

- [Styled-Normalize](https://www.npmjs.com/package/styled-normalize) to correct inconsistencies between different browsers

- Fonts from [Google Fonts](https://fonts.google.com/)

## Install

```sh
yarn install
```

## Usage

```sh
yarn start
```

## Run tests

```sh
yarn cypress run
```
