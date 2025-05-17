import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <a href="/about">About Us</a> | <a href="/contact">Contact</a>
      </p>
      <p>
        &copy; {new Date().getFullYear()} GreenCart LK. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
