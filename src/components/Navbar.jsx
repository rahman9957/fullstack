import { Link } from 'react-router-dom';
import { Smartphone, ShoppingCart, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <Smartphone size={32} color="#0066cc" />
          <span>iam<span>phone</span></span>
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Katalog HP</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/booking" className="btn btn-primary">Sewa Sekarang</Link></li>
        </ul>
        
        <div className="mobile-menu">
          <Menu size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
