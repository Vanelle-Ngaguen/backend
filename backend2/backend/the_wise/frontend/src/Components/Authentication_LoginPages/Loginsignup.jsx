import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Loginsignup.css';
import login_pic from '../../assets/images/login.jpeg';
import user_icon from '../../assets/images/name-icon.png';
import email_icon from '../../assets/images/email-icon.png';
import password_icon from '../../assets/images/password-icon.png';
import { useAuth } from '../Main_pages/AuthContext'; // Adjust the import path accordingly
import SuccessModal from './SuccessModal';
import axios from 'axios';

export const Loginsignup = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const mode = searchParams.get('mode');
    if (mode === 'register') {
      setIsLogin(false);
    }
  }, [location.search]);

  const handleLogin = () => {
    
   
    if (username && password) {      
      console.log(username, password)
      axios.post("http://localhost:4005/api/users/login", {username, password} )
      .then((res)=> console.log(res, "response from backend")
      .catch((error)=> console.log(error))
      
    )
      login();
      navigate('/home');
    } else {
      console.log('Invalid credentials');
    }
  };

  const handleRegister = async() => {
    if (name && email && password) {
      const response = await axios.post("http://localhost:4005/api/users/register",{name,email,password})
      console.log('Registering...');
      if(response.status === 201){
      setIsLogin(true);
      setSuccessMessage('Registration successful! You can now log in.');

      }
      
    } else {
      console.log('Please fill all fields');
    }
  };

  const closeSuccessModal = () => {
    setSuccessMessage('');
  };

  return (
    <div className='container'>
      {successMessage && <SuccessModal message={successMessage} onClose={closeSuccessModal} />}
      <div className="main">
        <div className="image">
          <img src={login_pic} alt="register" className='login_img' />
        </div>
        <div className="content">
          <div className="header">
            <button className={isLogin ? 'selected' : ''} onClick={() => setIsLogin(true)}>
              Login
            </button>
            <button className={!isLogin ? 'selected' : ''} onClick={() => {
              setIsLogin(false);
              setSuccessMessage('');
            }}>
              Register
            </button>
          </div>
          <div className="underline"></div>

          {isLogin ? (
            <div className="login-content">
              <div className="text">Login to your Account</div>
              <div className="inputs">
                <div className="input">
                  <img src={user_icon} alt="" />
                  <input 
                    type="text" 
                    placeholder="Enter Your Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                  />
                </div>
                <div className="input">
                  <img src={password_icon} alt="" />
                  <input 
                    type="password" 
                    placeholder="Enter Your Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </div>
              </div>
              <p className="forgot-password">
                <Link to="/forgot-password">Forgot your password?</Link>
              </p>
              <div className="submit-container">
                <div className="submit" onClick={handleLogin}>Login</div>
              </div>
            </div>
          ) : (
            <div className="register-content">
              <div className="text">Create Your Account</div>
              <div className="inputs">
                <div className="input">
                  <img src={user_icon} alt="" />
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="input">
                  <img src={email_icon} alt="" />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input">
                  <img src={password_icon} alt="" />
                  <input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="submit-container">
                <div className="submit" onClick={handleRegister}>Register</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
