function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#careers">Careers</a>
        </div>
        <p className="copyright">
          © 2025 Aplos Logix Pvt. Ltd. All rights reserved. 
          Transforming Industries with Smart IIoT & Industry 4.0 Solutions. 
         
        </p>
        
        {/* Saral Tech Contact Info */}
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 94, 0, 0.2)',
          textAlign: 'center'
        }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
            <strong>Contact:</strong> info@saraltech.in | +91-9888467884
          </p>
          <p style={{ fontSize: '0.8rem', opacity: '0.7' }}>
            D-1207, 12th Floor, The Light House, Vatika Town Square, Sector-82, Gurgaon - 122004
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;