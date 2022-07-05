# Quizzical

## Overview

This app was created as coursework for the Scrimba Front End Career Path. It pulls data from the
[Open Trivia Database API](https://opentdb.com/)

#### LIVE LINK : https://martinlrmr-quizzical.netlify.app/

## Features

- The app consist of two pages, a splash page and quiz page, which are as seperate js files/components

- The app pulls data from the API and uses it to dynamically render the questions and answers for the Quiz

- Selecting an answer adds conditional styling to the element wich is controlled by the state in the parent component

- Pressing the submit button, triggers more conditional styling of the questions (correct answers in red, worong in green), the users score and button to 'start new gam1

- The Quiz data is pulled from the API and mapped into a object data structure with questions being given an id and properties for the correct answer and conditional rendering of elements 

## Tech Used / Dependencies

- This is a React App boostrapped with CRA

- Fonts from [Google Fonts](https://fonts.google.com/)
