import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="container7">
      <div className="subscribe-box">
        {subscribed ? (
          <h2 className="success-message">Tack för din subscription!</h2>
        ) : (
          <>
            <div className="icon-text-container">
              <img src="/bilder/alarm.svg" alt="Bell Icon" className="icon" />
              <h2>Subscribe to our newsletter</h2>
            </div>
            <div className="input-button-container">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleSubscribe}>Subscribe</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Subscribe;
