import React, { useEffect, useState } from "react";
import image1 from "../assets/testimonials-1.png";
import image2 from "../assets/testimonials-2.png";
import image3 from "../assets/testimonials-3.png";
import image4 from "../assets/testimonials-4.png";
const Home = () => {
  useEffect(() => {
    setTransititon(true);
  }, []);
  const [transition, setTransititon] = useState(false);
  return (
    <>
      <div className="images">
        <div className="main-transition">
          <img
            className="main-image-transition"
            src="https://balashatrust.org/wp-content/themes/children-charity/theme-vars/theme-style/img/logo_scroll_retina.png"
            alt="logo"
          />
          <p className="main-text-transition">
            Nurturing Dreams, Inspiring Futures: Bal Asha Trust
          </p>
        </div>
      </div>
      <div className="Main-content">
        <p>
          Bal Asha Trust is one of India’s most trusted. We give life changing
          quality care to abandoned and destitute children. Our team provides
          systematic approach of care to our children so they are safe, healthy,
          educated and happy! We want every child to grow in a family, so we
          work hard to reunite children with their families or place them in
          loving and caring Adoptive families children through a legal process.
        </p>
        <p>
          We actively support vulnerable children and strengthen families in
          their difficult times through our Nutrition, Medical, Education and
          Awareness programmes. We are recipients of the prestigious Ahilyabai
          Holkar award from the Government of Maharashtra.
        </p>
        <button>Our Work</button>
      </div>
      <div className={transition ? "Testimonials" : "Not-Testimonials"}>
        <h1>Stories of Impact</h1>
        <div className="grid-container">
          <div className="grid-item">
            <img className="grid-item-img" src={image1} />
          </div>
          <div className="grid-item">
            <img className="grid-item-img" src={image2} />
          </div>
          <div className="grid-item">
            <img className="grid-item-img img-3-start" src={image3} />
          </div>
          <div className="grid-item">
            <img className="grid-item-img" src={image4} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
