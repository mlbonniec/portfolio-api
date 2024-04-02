## Description
The API for my porfolio to store my projects.

## Installation
```bash
$ npm install
```

## Documentation
When running the app, you can access a detailed Swagger documentation at the `/docs` route.

## Running the app

### Environment variables
Firstly, you need to create a .env file at the root of the project and fill it with the following variables:  
*`[XXX,YYY]` means you've to choose between `XXX` and `YYY`*
```dotenv
NODE_ENV=[development,production]
PORT=YOUR_PORT
MONGO_URI=YOUR_MONGO_URI
ALLOW_PROJECTS_CREATION=[true,false]
```

### Commands
Then, you can run the app with the following commands:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Notes
- This app is currently in development, so it's not ready to be used in production.

## Stay in touch

- Author - [Mathis LE BONNIEC](https://github.com/mlbonniec)
- Website - [https://mathislebonniec.fr](https://mathislebonniec.fr)

## License
This project is licensed under the CC BY-NC-ND 4.0 - see the [LICENSE](./LICENSE) file for details.

