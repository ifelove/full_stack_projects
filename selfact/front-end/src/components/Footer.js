import React from 'react'
import Signage from './Sign';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <Signage />
      </div>
      <div className='sections'>
        <div className="section2">
          <p>Links</p>
          <p>Chrome extension</p>
          <p>Login</p>
          <p>Sign Up</p>
          <p>Browse Company</p>
          <p>Browse Industry</p>
          <p>How it Works</p>
          <p>New Features</p>
        </div>
        <div className="section3">
          <p>Product</p>
          <p>Pricing</p>
          <p>Job tracker</p>
          <p>Self management</p>
        </div>
        <div className="section1">
          <p>Guides</p>
          <p>5 Day Resume Challenge</p>
          <p>Creating a Job Search Plan</p>
          <p>Career Pivoting for Veterans</p>
          <p>Career Pivoting for Teachers</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
