import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/Main_pages/AuthContext'; // Ensure correct import path
import { Navbar } from './Components/Main_pages/Navbar';
import Authors  from './Components/Main_pages/Authors';
import Welcome from './Components/Main_pages/Welcome';
import { Collections } from './Components/Main_pages/Collections';
import { Loginsignup } from './Components/Authentication_LoginPages/Loginsignup';
import { Forgot_password } from './Components/Authentication_LoginPages/Forgot_password';
import Footer from './Components/Main_pages/Footer';
import Home from './Components/Main_pages/Home'; // Import Home component
import PrivateRoute from './Components/Main_pages/PrivateRoute'; // Import PrivateRoute component
import { Favorites } from './Components/Main_pages/Favorites';
import { Downloads } from './Components/Main_pages/Downloads';
import Profile from './Components/Main_pages/Profile';
import OtpAuthentication from './Components/Authentication_LoginPages/OtpAuthentication';
import { Reset_password } from './Components/Authentication_LoginPages/Reset_password';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/authors" element={<PrivateRoute element={<Authors />} />} />
          <Route path="/collections" element={<PrivateRoute element={<Collections />} />} />
          <Route path="/favorites" element={<PrivateRoute element={<Favorites />} />} />
          <Route path="/downloads" element={<PrivateRoute element={<Downloads />} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile/>} />} />
          <Route path="/login" element={<Loginsignup />} />
          <Route path="/forgot-password" element={<Forgot_password />} />
          <Route path="/otpauthentication" element={<OtpAuthentication />} />
          <Route path="/reset_password" element={<Reset_password />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
