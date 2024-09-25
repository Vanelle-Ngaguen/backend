const express =require('express')
const user = require('../models/models')
const session = require('express-session');
const app = express();

//user registration
const registerUser =  async(req, res) =>{
    
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword });
        res.status(201).json({ message: 'User created successfully' });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

//user login
const User_login = async(req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }

}




  module.exports ={
    registerUser
  }

  module.exports ={
    User_login
  }