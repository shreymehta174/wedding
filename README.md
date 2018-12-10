# Wedding Website

A React.js-based wedding website with registration form and server backed by MongoDB. Uses Webpack to
bundle both the server and client-side dependencies.

## INSTALLATION

```
npm install && npm start
```

## ENVIRONMENT VARIABLES

* PORT - Port on which the web server should be listening. If not specified, defaults to 8000.
* MONGODB_URI - Uri to use to connect to the MongoDB database. Uses the format ```mongodb://host:port/database```. If not
                specified, defaults to ```mongodb://localhost:27017/wedding```.
* GOOGLE_ANALYTICS_ACCOUNT_ID - The account id to use for submitting Google Analytics data. If not specified, no analytics data
                will be collected.
* LOG_LEVEL - The logging level that the web app's components should be using. If not specified, defaults to ```debug```.

## COLOPHON

Implemented on Mac using [Microsoft Visual Studio Code](https://code.visualstudio.com/).
