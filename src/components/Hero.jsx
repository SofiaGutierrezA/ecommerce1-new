import "./Hero.css";
import heroImage from "../assets/hero-img.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Step into your style</h1>

        <p>
          Discover premium footwear designed for performance and everyday
          comfort.
        </p>

      </div>

      <div className="hero-image">
         <img src={heroImage} alt="Athlete" />
      </div>
    </section>
  );
}

export default Hero;