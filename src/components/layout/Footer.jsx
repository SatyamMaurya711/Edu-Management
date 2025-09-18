import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer id="footer-container">
        <div id="share">
          <h3>Subscribe Newsletter</h3>
          <div className="notification">
            <input type="email" placeholder="Your Email" />
            <button>Submit</button>
          </div>
        </div>

        <div className="footer-menu">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Terms and Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
