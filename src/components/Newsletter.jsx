import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Subscribe and get 10% off your first purchase</h2>

      <p>
        Get the latest news, exclusive offers and new product releases.
      </p>

      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
        />

        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

export default Newsletter;