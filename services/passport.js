const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // User is the model class

passport.serializeUser((user, done) => {
    done(null, user.id); // not profile.id. shortcut to mongodb _id
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => { // user from user model in database
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback",
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile);
            const existingUser = await User.findOne({ googleId: profile.id, name: profile.name });

            if (existingUser) {
                // we already have a record with a given profile ID
                done(null, existingUser);
            } else {
                // we dont have a user record with this ID, make a new record
                const user = await new User({ googleId: profile.id }).save();
                done(null, user);
            }
        }
    )
);
