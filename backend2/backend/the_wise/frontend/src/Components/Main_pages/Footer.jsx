
import './Footer.css';
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src={logo} alt="" className="footer-logo" />
        <h2 className="footer-app-name">The Wise</h2>
        <p className="footer-slogan">inspirational quotes since 2001 to our worldwide community.</p>
      </div>
      <div className="footer-column">
        <h3>Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/collections">Collections</a></li>
          <li><a href="/authors">Authors</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Downlod App</h3>
        <ul>
          <li><a href="/mobile-app">Mobile App</a></li>
          <li><a href="/ios-app">iOS App</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Newsletter</h3>
        <form>
          <input type="email" placeholder="Enter Your Email here" className="footer-input" />
          <button type="submit" className="footer-button">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
