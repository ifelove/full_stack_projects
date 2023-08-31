import React from "react";
import { FcCheckmark } from "react-icons/fc";

const Pricing = () => {
  return (
    <div className="pricing-container">
      
      <section className="pricing-section">
        <h2 className="pricing-title">Selfact</h2>
        <main className="pricing-article">
          <ul>
            <div className="price-check">
              <span>
                <FcCheckmark className="check-icon" />
              </span>
              <li>Unlimited Resumes</li>
            </div>
            <div className="price-check">
              <span>
                <FcCheckmark className="check-icon" />
              </span>
              <li>Unlimited Resumes Templates</li>
            </div>
            <div className="price-check">
              <span>
                <FcCheckmark className="check-icon" />
              </span>
              <li>Unlimited Job Tracking</li>
            </div>
            <div className="price-check">
              <span>
                <FcCheckmark className="check-icon" />
              </span>
              <li>Top 5 Keywords</li>
            </div>
            <div className="price-check">
              <span>
                <FcCheckmark className="check-icon" />
              </span>
              <li>1 Email Template Per job stage</li>
            </div>

            <span className="price">Free</span>
          </ul>
        </main>
      </section>
    </div>
  );
};

export default Pricing;
