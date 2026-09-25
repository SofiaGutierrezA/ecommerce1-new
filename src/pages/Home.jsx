import "./Home.css";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


import menImage from "../assets/pexels-rdne-12169114.jpg";
import womenImage from "../assets/pexels-olly-3757936.jpg";

function Home({ addToCart }) {
  return (
    <>
      <Hero />
      
      {/* import men and womens sections with links */}
      <div className="category-links">
      <div className="category-card">
    <img src={menImage} alt="Men" />
    <Link to="/men" className="category-button">
      Men
    </Link>
    </div>
          <div className="category-card">
    <img src={womenImage} alt="Women" />
    <Link to="/women" className="category-button">
      Women
    </Link>
  </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;