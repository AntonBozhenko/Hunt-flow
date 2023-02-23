const express = require('express');

const app = express();
require('@babel/register');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
// const { checkSession } = require('./middlewares/midls');

// импорт вспомогательных ф-й
const dbCheck = require('./db/dbCheck');

// импорт роутов
const indexRoutes = require('./routes/indexRoutes');
const guestRoutes = require('./routes/guestRoutes');

// вызов функции проверки соединения с базоый данных
dbCheck();

// passport.use(new GoogleStrategy(
//   {
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: process.env.CALLBACK_URL,
//   },
//   (accessToken, refreshToken, profile, done) => {
//     done(null, profile);
//   },
// ));

// passport.serializeUser((user, done) => {
//   done(null, { userName: user.displayName, email: user.emails[0].value });
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// const sessionConfig = {
//   name: 'sid',
//   store: new FileStore({}),
//   secret: process.env.SECRET,
//   resave: false,
//   saveUninitialized: false,
//   httpOnly: true,
//   cookie: {
//     secure: false,
//     maxAge: 1000 * 60 * 60 * 24 * 10,
//   },
// };

// app.use(session(sessionConfig));
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(checkSession);

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// роутеры
app.use('/', indexRoutes);
app.use('/guest', guestRoutes);

const PORT = process.env.PORT || 3100;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
