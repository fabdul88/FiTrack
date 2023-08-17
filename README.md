# FiTrack

## <u>Intro</u>

A personal workout routine planner, built as a RESTful API in Node.js using express and mongoose for the backend, and react.js and redux toolkit for the frontend.

### backend

The API endpoints were tested in postman before integrating the frontend. Authentication uses HTTPOnly cookies to prevent client-side scripts from accessing data, and JSON web tokens used to identify the authenticated user. Passwords are hashed using bcrypt.

### frontend

User state is managed with redux toolkit and persisted through local storage. The UI is styled with Sass and its animations are achieved using framer motion. Toast notifications are triggered during any HTTP actions/methods throughout the app.

### database

MongoDB Atlas cloud service.

### deployment

Deployed live on **[Cyclic](https://real-red-squid-tutu.cyclic.cloud/)**

### <u>Some things to consider</u>

backend .env example:

```sh
NODE_ENV=your value here
ATLAS_URI=your value here
JWT_SECRET=your value here
```

## <u>Screenshots</u>

![homepage](https://github.com/fabdul88/FiTrack/assets/60126985/c5e10b02-e5c5-4f0b-b132-377c0dc28ed3)

![loginscreen](https://github.com/fabdul88/FiTrack/assets/60126985/712f5ed6-1b2c-421e-b374-a6b2e382b8c6)

## <u>Installation and Run on local machine</u>

```bash
# clone it
git clone https://github.com/fabdul88/FiTrack.git
cd FiTrack

# from root directory
# install dependencies for backend
npm install

# from root directory
# start backend dev server
npm run server

# go to client folder
# install dependencies for frontend
cd client && npm install
```

go to the client folder in the project and add a proxy in package.json before "dependencies" **for local development**

```json
"proxy": "http://localhost:8080",
```

**Note:** <i>When deploying, remove proxy from package.json</i>

```bash
# from client folder
# Start frontend
npm start

```
