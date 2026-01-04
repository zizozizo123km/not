import React from 'react';
import Button from '../components/Button';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>مرحباً بك في not</h1>
        <p>ابدأ رحلتك معنا واكتشف إمكانيات لا حدود لها</p>
        <div className="hero-buttons">
          <Button variant="primary">ابدأ الآن</Button>
          <Button variant="outline">اعرف المزيد</Button>
        </div>
      </section>

      <section className="features">
        <h2>المميزات</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>سريع</h3>
            <p>أداء عالي وسرعة استجابة فائقة</p>
          </div>
          <div className="feature-card">
            <h3>آمن</h3>
            <p>حماية متقدمة لبياناتك</p>
          </div>
          <div className="feature-card">
            <h3>سهل</h3>
            <p>واجهة بسيطة وسهلة الاستخدام</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;