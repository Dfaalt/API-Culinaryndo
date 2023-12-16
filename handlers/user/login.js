require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const { JWT_SECRET } = process.env;

module.exports = {
  // eslint-disable-next-line consistent-return
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const findUser = await User.findOne({ where: { email } });

      if (!findUser) {
        return res.status(404).json({
          status: false,
          message: "email or password isn't correct",
        });
      }

      const comparePassword = await bcrypt.compare(password, findUser.password);

      if (!comparePassword) {
        return res.status(401).json({
          status: false,
          message: "email or password isn't correct",
        });
      }

      const payload = {
        id: findUser.id,
        email: findUser.email,
        fullname: findUser.fullname,
        username: findUser.username,
      };

      const token = jwt.sign(payload, JWT_SECRET);

      return res.status(200).json({
        status: true,
        message: 'login successful',
        data: {
          id: findUser.id,
          email: findUser.email,
          fullname: findUser.fullname,
          username: findUser.username,
        },
        token,
      });
    } catch (error) {
      next(error);
    }
  },
};
