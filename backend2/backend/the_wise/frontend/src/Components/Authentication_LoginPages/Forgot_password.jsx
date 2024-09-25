import { Link } from 'react-router-dom'
import './Forgot_password.css'
import email_icon from '../../assets/images/email-icon.png'
export const Forgot_password = () => {
  return (
    <>

    <div className="container">
<div className="pwd_container">
    <h3>Forgot your password?</h3>
    <p>Enter the email you registered with and we will send 
    an OTP to reset your password</p>
<div className="input">
              <img src={email_icon} alt="" />
              <input type="email"  placeholder="Enter your email" />
            </div>
            <Link to="/otpauthentication">
            <button className='otp-container' >Get OTP</button>
            </Link>
            
</div>
</div>

    </>
  )
}
