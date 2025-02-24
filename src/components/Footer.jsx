import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} GreenCart LK. All rights reserved.
      </p>
      <p>
        <a href="/about">About Us</a> | <a href="/contact">Contact</a>
      </p>
    </footer>
  );
};

export default Footer;
