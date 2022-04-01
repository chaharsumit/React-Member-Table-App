# Getting Started with React Members App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# About The App

This app has been created using ReactJs and it uses an ExpressJs api for fetching the data.
- This app makes use of Redux for state management.
- React functional components and hooks are used.
- React Router-v6 has been used for routing.
- The Github Link to the Express Api is [Members Api](https://github.com/chaharsumit/Members-Api). You can find the endpoints in the readme file.
- The API has been deployed on Heroku at [https://thawing-oasis-92301.herokuapp.com/](https://thawing-oasis-92301.herokuapp.com).
- Mongo atlas is the Database used for storing members data.
- This app also supports auto login on hard reload.

# Authentication Flow

The Members app uses Fetch API for making request to our api. 
- On Login or Registration the jwt token is supplied in the response object from the backend api and is stored in local storage.
- User is logged in automatically after registration.
- JWT token returned in the response object is stored in local storage for persiting user login in case of hard reload.
- On hard reload Fetch request is made to get the current user from the api based on verification of the jwt token sent in the request header.

# App Images

**Home Page(user not logged in)**

<img src="/public/unauthenticated.png" width="100%" height="400" alt="home page when user not logged in">

**Home Page(user is logged in)**

<img src="/public/authenticated.png" width="100%" height="400" alt="home page when user is logged in">

**Login page**

<img src="/public/login.png" width="100%" height="400" alt="Login page">

**Add Member Modal**

<img src="/public/modal.png" width="100%" height="400" alt="modal-image">

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
