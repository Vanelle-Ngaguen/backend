import { Link } from 'react-router-dom'
import './Forgot_password.css'
import password_icon from '../../assets/images/password-icon.png'
export const Reset_password = () => {
  return (
    <>

    <div className="container">
<div className="pwd_container">
    <h3>Reset Your Password</h3>
<div className="input">
              <img src={password_icon} alt="" />
              <input type="password"  placeholder="Enter Your New Password" />

            </div>

            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password"  placeholder="Enter Your New Password" />

            </div>

            <Link to="/otpauthentication">
            <button className='otp-container' >Reset Password</button>
            </Link>
            
</div>
</div>

    </>
  )
}
