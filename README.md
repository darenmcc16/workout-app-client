
# Gym Hero Client
No longer going to the gym or need new workouts to push yourself.  You can create a exercise plan that best fits you at Gym Hero.


### 1. Working Prototype
You can access a working prototype of the React app here: https://workout-app-client.vercel.app/ and Node app here: https://gym-hero-thinkful.herokuapp.com/



### 2. User Stories
This app is for two types of users: a visitor and a logged-in user

###### Landing Page (Importance - High) (Est: 1h)
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it

###### Login Page (Importance - High) (Est: 3h)
* As a returning register user
* I want to enter my password and username to use this app,
* So I can have access to my account.
* As a new user.
* I want to be able to create a profile and set my username and password
* As an Administrator I want to be able to view all usernames and passwords

###### Sign Up (Importance - High)  (Est: 3h)
* As a visitor
* I want to register to use this app
* So I can create a personal account.

###### Home Page (Importance - Medium)  (Est: 2h)
* As a logged-in user,
* I want to be able to preview the content of the app,
* So i can decide what section I want to navigate to.
* As a logged-in user, I want to be able to search workout videos
* As a logged-in user, I want to save videos to put together a workout plan list.


### 3. Functionality
The app's functionality includes:
* Every User has the ability to create an account
* Every user has the ability to create a workout plan
* Every user has the ability to view videos



### 4. Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver



### 5. Wireframes
Landing Page
:-------------------------:
![Landing Page](/github-images/client-wireframe.JPG)





### 6. Front-end Structure - React Components Map
* __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) -
        * __Navbar.js__ (stateless) -
        * __BusinessSearch.js__ (stateful) -
        * __FavoriteList.js__ (stateless) -



### 7. Back-end Structure - Business Objects (do later)
* Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)
* Workout list table
    * id (auto-generated)
    * user id (forign key user table)
    * videoId (from api varchar 255)
    * name (from api varchar 255)
    * url (from api varchar 255)



### 8. API Documentation
#### API Overview
```text
    /api
    .
    ├── /auth
    │   └── POST
    │       ├── /login
    ├── /users
    │   └── POST
    │       └── /
```

##### POST `/api/auth/login`
```js
    // req.body
    {
        "user_name": "demo@gmail.com",
        "password": "Password1"
    }

    // res.body
    {
    "authToken": String,
        "userId": 1
    }
```

##### POST `/api/users/`
```js
    // req.body
    {
        "user_name": "demo@gmail.com",
        "password": "123456"
    }


    // res.body
    {
        "id": 1,
        "user_name": "demo@gmail.com"
    }
```



### 9. Screenshots
Landing Page
![Landing Page](/github-images/landing-page.JPG)
Sign up page
![Register Page](/github-images/register.JPG)
Login Page
![Login Page](/github-images/login.JPG)
Workout Search Page
![Workout Search Page](/github-images/wokout-search.JPG)
Workout List Page
![Workout List Page](/github-images/workout-list.JPG)



### 10. Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* Add call to youTube API
* Create workout plan list.



### 11. How to run it
Use command line to navigate into the project folder and run the following in terminal

##### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

##### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test