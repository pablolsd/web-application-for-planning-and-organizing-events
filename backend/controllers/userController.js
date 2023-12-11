const User = require('../models/User');
const { hashPassword, comparePassword } = require('../security/utils/encryption');

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await hashPassword(password);

    const user = await User.create({ username, email, password: hashedPassword });

    res.status(201).json({ user: { username: user.username, email: user.email } });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    const isPasswordMatch = await comparePassword(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

  
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};
