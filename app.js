
// REGISTRATION CODE

function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var requiredMessage = document.getElementById("requiredMessage");

    if (fname === '' || lname === '' || email === '' || password === '' || confirmPassword === '') {
        requiredMessage.innerText = "All fields are required!";
    } else {
        // Reset error message
        requiredMessage.innerText = "";

        // Redirect to the next page
        window.location.href = "./emailv.html";
    }
}
// login CODE
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var checkbox = document.getElementById("checkbox").value;
  var invalidMessage = document.getElementById("invalidMessage");

  if (username === '' || password === '' || checkbox === '') {
      invalidMessage.innerText = "All fields are required!";
  } else {
      // Reset error message
      invalidMessage.innerText = "";

      // Redirect to the next page
      window.location.href = "./home.html";
  }
}
// 

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  const express = require('express');
  const passport = require('passport');
  const GoogleStrategy = require('passport-google-oauth20').Strategy;
  
  const app = express();
  
  // Use the session to keep track of the user's login status
  app.use(require('express-session')({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
  
  // Initialize Passport
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Set up Google authentication strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: 'your-client-id',
        clientSecret: 'your-client-secret',
        callbackURL: 'http://localhost:3000/auth/google/callback', // Adjust the callback URL based on your setup
      },
      (accessToken, refreshToken, profile, done) => {
        // This is where you'd typically save the user to your database
        return done(null, profile);
      }
    )
  );
  
  // Serialize user information into the session
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  // Deserialize user from the session
  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });
  
  // Set up routes
  
  // Home route
  app.get('/', (req, res) => {
    res.send('<h1>Home</h1><a href="/auth/google">Login with Google</a>');
  });
  
  // Redirect to Google for authentication
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
  
  // Google callback route
  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
      // Successful authentication
      res.redirect('/profile');
    }
  );
  
  // Profile route (protected route)
  app.get('/profile', (req, res) => {
    // Ensure the user is authenticated
    if (!req.isAuthenticated()) {
      return res.redirect('/');
    }
  
    res.send(`<h1>Profile</h1><pre>${JSON.stringify(req.user, null, 2)}</pre><a href="/logout">Logout</a>`);
  });
  
  // Logout route
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  
  // Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  



// (() => {
//     const width = 320;    // We will scale the photo width to this
//     const height = 0;     // This will be computed based on the input stream

//     const streaming = false;

//     let video = null;
//     let canvas = null;
//     let photo = null;
//     let startbutton = null;
// })
// function startup() {
//     video = document.getElementById('video');
//     canvas = document.getElementById('canvas');
//     photo = document.getElementById('photo');
//     startbutton = document.getElementById('startbutton');
// }



