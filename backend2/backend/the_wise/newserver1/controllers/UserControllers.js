const {Users} = require('../models')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//user registration
exports.register = async (req, res) => {
  try {
    const { u_name, u_email, u_password } = req.body;
    console.log(u_name);
    // Check if the user already exists
    const existingUser = await Users.findOne({ where: { email: {u_email} } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }
   
    // // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(u_password, saltRounds);
    console.log(req.body);
    // // Create a new user
    const newUser = await Users.create({
      name: u_name,
      email: u_email,
      password: hashedPassword,
      role: "User"
    });


    console.log(newUser)

    // // Generate a JWT token
    const token = jwt.sign({ UserId: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    // Return the registered user and token
    res.status(201).json({ User: newUser, token });
  } catch (error) {
    // Handle any errors
    res.status(400).json({ error: error.message });
  }
};

//user login
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log(req.body)

    // Find the user by email
    const user = await Users.findOne({ where: { name:username } });
    console.log(req.body)

    if (!user) {
      
      return res.status(401).json({ error: 'Invalid email or password' });
      
    }
    console.log(req.body)

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid  or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    // Return the user and token
    res.json({ user, token });
  } catch (error) {
    // Handle any errors
    res.status(400).json({ error: error.message });
  }
};








