import "./Home.css";
import Hero from "../components/Hero";
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
    
    <div className="category-img">
    <Link to="/men">
    <img src={menImage} alt="Men" />
    <span>Men</span>
    </Link>
    </div>
          <div >
    <div className="category-img">
    <Link to="/women" >
    <img src={womenImage} alt="Women" />
    <span>Women</span>
    </Link>
    </div>
    </div>
  </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;