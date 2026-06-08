const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>iamphone</h3>
          <p>Sewa Smartphone Flagship Premium terbaik di Indonesia.</p>
        </div>
        <div className="footer-links">
          <h4>Bantuan</h4>
          <ul>
            <li><a href="#">Syarat & Ketentuan</a></li>
            <li><a href="#">Cara Sewa</a></li>
            <li><a href="#">Kontak Kami</a></li>
          </ul>
        </div>
        <div className="footer-terms">
          <p><strong>Syarat Wajib:</strong> Wajib KTP / Identitas diri yang sah.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 iamphone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
