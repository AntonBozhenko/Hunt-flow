const bcrypt = require('bcrypt');

const render = require('../lib/render');
const GuestPage = require('../views/GuestPage');

// const { User } = require('../db/models');

exports.renderGuestPage = (req, res) => {
  render(GuestPage, {}, res);
};

exports.signInAndSendStatus = async (req, res) => {
  const { userEmail, userPassword } = req.body;
  try {
    // TODO: Дописать вход в БД
    console.log({ userEmail, userPassword });

    // const user = await User.findOne({ where: { email } });
    // if (!user) return res.sendStatus(203);
    //
    // const isValidPassword = await bcrypt.compare(password, user.password);
    // if (!isValidPassword) return res.sendStatus(203);

    // req.session.user = { id: user.id, name: user.name };
    res.sendStatus(200);
  } catch (error) {
    console.log('\x1b[31m', 'SignIn Error:', error);
  }
};

exports.signUpAndSendStatus = async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;
  try {
    // TODO: Дописать регистрацию в БД
    console.log({ userName, userEmail, userPassword });
    // const hashPass = await bcrypt.hash(password, 10);
    //
    // const user = await User.create({ name, email, password: hashPass });
    //
    // req.session.user = { id: user.id, name: user.name };
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(203);
  }
};
