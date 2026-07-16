import React, { useEffect } from 'react';
import './Terms.css';
import Footer from '../components/Footer';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="terms-page-wrapper">
        <div className="terms-header">
        <h1>Terms and Conditions</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </div>
      <div className="terms-content">
        <h2>1. Introduction</h2>
        <p>
          Welcome to NSG Solutions. By accessing this website, we assume you accept these terms and conditions. Do not continue to use NSG Solutions if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2>2. Cookies</h2>
        <p>
          We employ the use of cookies. By accessing NSG Solutions, you agreed to use cookies in agreement with the NSG Solutions Privacy Policy.
        </p>

        <h2>3. License</h2>
        <p>
          Unless otherwise stated, NSG Solutions and/or its licensors own the intellectual property rights for all material on NSG Solutions. All intellectual property rights are reserved. You may access this from NSG Solutions for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        
        <h2>4. User Comments</h2>
        <p>
          This Agreement shall begin on the date hereof. Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. NSG Solutions does not filter, edit, publish or review Comments prior to their presence on the website.
        </p>

        <h2>5. Disclaimer</h2>
        <p>
          To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website.
        </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
