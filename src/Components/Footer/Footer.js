import React from 'react';

import './Footer.css';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Dehi</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Kolkata</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Other Countries China - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-{year} OLX</p>
      </div>
    </div>
  );
}

export default Footer;
