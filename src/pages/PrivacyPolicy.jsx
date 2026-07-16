import React, { useEffect } from 'react';
import './Terms.css'; // We can reuse the terms CSS as the layout is identical
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="terms-page-wrapper">
        <div className="terms-header">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </div>
      <div className="terms-content">
        <h2>1. Information We Collect</h2>
        <p>
          We collect information from you when you register on our site, place an order, subscribe to our newsletter or fill out a form. 
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          Any of the information we collect from you may be used in one of the following ways:
          To personalize your experience, to improve our website, to improve customer service, or to process transactions.
        </p>

        <h2>3. Data Protection</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
        </p>

        <h2>4. Use of Cookies</h2>
        <p>
          Yes, we use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction.
        </p>

        <h2>5. Information Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you.
        </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
