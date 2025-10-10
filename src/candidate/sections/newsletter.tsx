"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="newsletter-section-candidate">
      <div className="container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">
            Subscribe and get exclusive deals & offers
          </h2>
          <p className="newsletter-subtitle">
            Get the latest job opportunities, career tips, and AI-powered insights delivered to your inbox
          </p>
          
          {!isSubscribed ? (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </div>
            </form>
          ) : (
            <div className="newsletter-success">
              <div className="success-icon">✅</div>
              <p>Thank you for subscribing! Check your email for confirmation.</p>
            </div>
          )}
          
          <div className="newsletter-benefits">
            <div className="benefit">
              <span className="benefit-icon">📧</span>
              <span>Weekly job alerts</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">💡</span>
              <span>Career tips & insights</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">🎯</span>
              <span>Exclusive opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
