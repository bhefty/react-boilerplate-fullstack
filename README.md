# React Boilerplate
### For Full Stack Projects

- This boilerplate is to help get up and running with full stack projects using React.
- The server (Express) and client (React) run in parallel via `concurrently` to allow for easy API calls.
- Express handles the API routes, and React-Router handles the client routes.
- MongoDB and Mongoose are used for the database.
- The project contains React-Bootstrap for styling and grid layouts.

#### Setup
1. Clone repo

`git clone https://github.com/bhefty/react-boilerplate-fullstack`

2. Change into directory and install dependencies
*Replace `$APP_NAME` with a name for your unique app.*
```
cd $APP_NAME
npm install
```


#### Commands
- **Run in development mode**

`npm run dev`

- **Run in production mode**

`npm start`

- **Start only server**

`node server`

- **Start only client**

`npm run client:start`

- **Run tests**

`npm test`

- **Build for production**

`npm run build`



### Deploy to Heroku
This buildback is from [Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack). Check it out for additional details.

*Replace `$APP_NAME` with a name for your unique app.*

```bash
heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "Start with create-react-app"
git push heroku master
heroku open
```


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
