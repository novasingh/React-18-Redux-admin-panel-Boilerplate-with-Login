# React 18 + Redux admin-panel Boilerplate

## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone https://github.com/novasingh24/-React-18-Redux-admin-panel-Boilerplate-with-Login-.git`
3.  Move to the appropriate directory: `cd React-18-Redux-admin-panel-Boilerplate-with-Login-`.<br />
4.  Run `npm install` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._
5.  Run `npm start` to run the app.

### For Build
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# 🗄️ Project Structure

Most of the code lives in the `src` folder and looks like this:

```sh
src
|
+-- assets           # assets folder can contain all the static files such as images, scss, etc.
|
+-- components       # shared components used across the entire application
|
+-- containers       # containers have auth(login) and other components routes
|
+-- hoc              # for auth hooks
|
+-- layout           # layouts have Blank , Default and Master 
|
+-- partials         # partials have routes views of different components
|
+-- redux            # global state management with action , creators , store and types
|
+-- services         # base types used across the application
|
+-- utils            # shared utility functions
```



## Dependencies Used :
- [Axios 1.3.4 ](https://www.npmjs.com/package/axios/v/1.3.4)
- [Boostrap 5.2.3](https://www.npmjs.com/package/bootstrap/v/5.2.3)
- [Emotion/styled 11.10.6](https://www.npmjs.com/package/@emotion/styled)
- [Jwt-Decode 3.1.2](https://www.npmjs.com/package/jwt-decode)
- [Lodash-es 4.17.21](https://www.npmjs.com/package/lodash-es)
- [Moment 2.29.4](https://www.npmjs.com/package/moment)
- [Path 0.12.7](https://www.npmjs.com/package/path)
- [Perfect-Scrollbar 1.5.5](https://www.npmjs.com/package/perfect-scrollbar)
- [React Hook Form 7.43.8](https://www.npmjs.com/package/react-hook-form)
- [React Avatar 5.0.3](https://www.npmjs.com/package/react-avatar)
- [React Boostrap 2.7.2](https://www.npmjs.com/package/react-bootstrap)
- [React Helmet 6.1.0](https://www.npmjs.com/package/react-helmet)
- [React Icons 4.8.0](https://www.npmjs.com/package/react-icons)
- [React-Redux 8.0.5](https://www.npmjs.com/package/react-redux)
- [React Toastify 9.1.2](https://www.npmjs.com/package/react-toastify)
- [Redux Logger 3.0.6](https://www.npmjs.com/package/redux-logger)
- [Redux Presist 6.0.0](https://www.npmjs.com/package/redux-persist)
- [Redux Thunk 2.4.2](https://www.npmjs.com/package/redux-thunk)
- [Uuid 9.0.0](https://www.npmjs.com/package/uuid)
- [YUP 1.0.2](https://www.npmjs.com/package/yup)