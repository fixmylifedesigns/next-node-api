# Next-Node-Api

This boilerplate is building off of my first [Node Api Boilerplate](https://github.com/fixmylife-boilerplates/fixmylife-node-api)<br>
The big difference is now you are running a app with server side<br>
With the help of [NextJS](https://www.npmjs.com/package/next) you are able to make a quick and simple react app plus build a server right along side it.<br>

Instead of running `yarn server` you will be running `yarn dev` to launch both the app and api.<br>
These are the all the scripts that come with this boilerplate<br>

```
"scripts": {
    "build": "next build",
    "start": "next build && node server/index.js ",
    "dev": "next build && nodemon server/index.js",
    "server": "nodemon server/index.js",
    "client": "next"
  }
```
`"yarn client"` will start up only the app in [http://localhost:3000/](http://localhost:3000/)<br>
`"yarn start"` will simply build the app and start the server.<br>
`"yarn dev"` will build the app, start the server and watch for changes so you dont have to keep resetting it.<br>
`"yarn server"` does the same as `"yarn dev"` except for running the build command for the app, with that being said if `"yarn server"` gives you an error you might need to run `"yarn build"` first.<br>
`"yarn build"` simply builds the app.<br>



## Using the Api

You can find an example of this Next app on [herokuapp](https://fixmylife-next-api.herokuapp.com/).
Will build out the functionality soon.
nothing is different from when you launch a regular node api or this next app.


When you login a user, in return you get a Token. You'll want to return that token in your headers when making a axios call for **post**, **put** or **delete**.

- [Api Doc](https://documenter.getpostman.com/view/7133880/SVfQRUJX?version=latest) - Documentation on all the endpoints this api comes with.

## Getting Started

First lets fork and clone this project so its yours.<br>
After you have it downloaded, you can run these commands to get it started.

```sh
yarn install
yarn dev
```

  <img src='https://github.com/fixmylifedesigns/images/blob/master/next-node-api/yarndev.PNG?raw=true' alt='yarn server'>
  
Then open [http://localhost:4000/](http://localhost:4000/) to see that your server side app is running.<br>
When you know your app is running you are ready to make axios calls!

  <img src='https://github.com/fixmylifedesigns/images/blob/master/next-node-api/next4000.PNG'>
  
## Dependencies Included
- [next](https://www.npmjs.com/package/next)
- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom) 
- [express](https://www.npmjs.com/package/express)
- [cors](https://www.npmjs.com/package/cors) 
- [helmet](https://www.npmjs.com/package/helmet)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) 
- [dotenv](https://www.npmjs.com/package/dotenv) 
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [knex](https://www.npmjs.com/package/knex)
- [sqlite](https://www.npmjs.com/package/sqlite)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Change the api info

<p align="center">
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/yarninit.PNG?raw=true' width="100%">
</p
  
If you are planning on using this Api for a project we should start by giving it a name. Go to your [package.json](https://github.com/fixmylife-boilerplates/fixmylife-node-api/blob/master/package.json) file and you'll want up update **name**, **description**, **repository** and **author**.

## Users Seeded data

<p align="center">
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/usersseed.PNG?raw=true'>
  </p
  
You can change the [**users**](https://github.com/fixmylife-boilerplates/fixmylife-node-api/blob/master/database/seeds/001-users.js)  seeded data to fit your projects needs you can get creative and add as many users as you need to get your project started.
**Where to find 001-users.js**
```
server
└── database
    └── seeds
        └──**001-users.js**
    
```

## Posts Seeded data

<p align="center">
  <img src='https://github.com/fixmylifedesigns/images/blob/master/fixmylife-node-api/postsseeds.PNG?raw=true'>
  </p
  
You can change the [**posts**](https://github.com/fixmylife-boilerplates/fixmylife-node-api/blob/master/database/seeds/002-posts.js) seeded data to fit your projects needs you can get creative and add as posts just remember to add a user id to user_id.
 **Where to find 002-posts.js**
```
server
└── database
    └── seeds
        └──**002-posts.js**
```

## Important! If you do change the seeds

You will need to run these command to make the changes.

```
npx knex migrate:rollback
npx knex migrate:latest
npx knex seed:run
```

## Acknowledgements

Photos used for this api for the seeded data were provided by [unsplash.com](https://unsplash.com/).

## License

Fixmylife Node Api is free to anyone who would like to use it [licensed as MIT](https://github.com/fixmylife-boilerplates/fixmylife-node-api/blob/master/LICENSE).

## Say Thanks

If you use this Api feel free to let me know or if you have any feed back on things I can change or do better thats always appreciated thank you. You can email me [contact@duranirving.com](mailto:contact@duranirving.com) or drop a message in my website [duranirving.com](https://www.duranirving.com).
