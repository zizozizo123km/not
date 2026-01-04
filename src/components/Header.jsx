import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          not
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">الرئيسية</Link>
          <Link to="/about" className="nav-link">من نحن</Link>
          <Link to="/contact" className="nav-link">اتصل بنا</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;