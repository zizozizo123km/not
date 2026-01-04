import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="container">
        <h1>من نحن</h1>
        <p className="about-intro">
          نحن فريق متخصص في تطوير حلول رقمية مبتكرة تساعد عملائنا على تحقيق أهدافهم.
        </p>

        <section className="about-section">
          <h2>رؤيتنا</h2>
          <p>أن نكون الخيار الأول في تقديم حلول تقنية متميزة.</p>
        </section>

        <section className="about-section">
          <h2>مهمتنا</h2>
          <p>تقديم خدمات عالية الجودة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.</p>
        </section>

        <section className="about-section">
          <h2>قيمنا</h2>
          <ul className="values-list">
            <li>الجودة والتميز</li>
            <li>الابتكار المستمر</li>
            <li>الشفافية والمصداقية</li>
            <li>رضا العملاء</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;