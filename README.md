# Deezer API Explorer

![deezer](https://user-images.githubusercontent.com/26471447/36912818-9b333708-1e0d-11e8-81e6-02ce09f3746a.gif)

This application was built to visualize endpoints of the Deezer API. Tasks included implementing an autocomplete feature, retrieving albums based on a selected artist and viewing album details for a selected album. The application was built with React, Redux, Redux-sagas and SCSS/Sass.

## Getting Started
Clone down this repository and install npm. Execute the following command in your CLI.

```
npm install
```
The Deezer API is not CORS enabled, and the following proxy is used to retrieve the data: `https://cors-anywhere.herokuapp.com`

To start the application on `http://localhost:3000/`, enter the following command.

```
npm start
```
Any changes made to the `index.scss` file will need to be translated into css with the following command from the `./Styles` directory:

```
sass --watch index.scss
```
## Running the tests
All Redux actions and reducers are tested using the command

```
npm run test
```
## Built With

* [React](https://reactjs.org/) - The javascript framework used
* [Redux](https://redux.js.org/) - State management for React
* [Sagas](https://redux-saga.js.org/) - Redux Middleware management
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Extensions

See branch `extensions` for work completed after the assignment deadline.

See issues for this repository.

## Authors
* **Nick Teets** [Github](https://github.com/nicktu12)

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
