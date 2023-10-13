import React, { useState, useEffect } from 'react';
import './styles/run.css';

const Run = () => {
  const [experienceCount, setExperienceCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [reviewRateCount, setReviewRateCount] = useState(0);
  const [servicesCount, setServicesCount] = useState(0);

  const totalExperienceYears = 10;
  const happyCustomers = 4500;
  const reviewRate = 4.6;
  const totalServicesDelivered = 4500;

  useEffect(() => {
    const incrementCounters = () => {
      // Define the step size for the counting animation
      const step1 = 1;
      const step2 = 150;

      // Count up to the final values
      if (experienceCount < totalExperienceYears) {
        setExperienceCount(prevCount => prevCount + step1);
      }
      if (customersCount < happyCustomers) {
        setCustomersCount(prevCount => prevCount + step2);
      }
      if (reviewRateCount < reviewRate) {
        setReviewRateCount(prevCount => prevCount + 0.3); // Adjust step size for decimals
      }
      if (servicesCount < totalServicesDelivered) {
        setServicesCount(prevCount => prevCount + step2);
      }
    };

    const interval = setInterval(incrementCounters, 50); // Adjust the interval speed

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [experienceCount, customersCount, reviewRateCount, servicesCount]);

  return (
    <div className="experience-stats" style={{ padding: '15px', marginTop: '4rem',  }}>
      <div className="stats-container">
        <div className="stat">
          <h1>{experienceCount}+</h1>
          <p>Total Years of Experience</p>
        </div>
        <div className="stat">
          <h1>{customersCount}+</h1>
          <p>Happy Customers</p>
        </div>
        <div className="stat">
          <h1>{reviewRateCount.toFixed(1)}+</h1>
          <p>Review Rate</p>
        </div>
        <div className="stat">
          <h1>{servicesCount}+</h1>
          <p>Total Services Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default Run;
