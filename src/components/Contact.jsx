import { useState, useEffect } from 'react';

function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  // Check for mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for contacting Saral Technologies! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p style={{
        textAlign: 'center',
        fontSize: isMobile ? '1rem' : '1.2rem',
        opacity: '0.8',
        maxWidth: '800px',
        margin: '0 auto 3rem',
        lineHeight: '1.6',
        padding: isMobile ? '0 1rem' : '0'
      }}>
        Ready to transform your industrial operations? Let's discuss how our IIoT-driven solutions that seamlessly connect and simplify industrial systems can help your business grow.
      </p>
      <div className="contact-container">
        <div className="contact-form">
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
                placeholder="Your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your company name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Tell us about your project or requirements..."
                rows="6"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Connect With Saral Technologies</h3>
          
          {/* Office Location */}
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-details">
              <h4>Visit Us</h4>
              <p>D-1207, 12th Floor, The Light House</p>
              <p>Vatika Town Square, Sector-82</p>
              <p>Gurgaon - 122004</p>
            </div>
          </div>
          
          {/* Phone Numbers */}
          <div className="info-item">
            <div className="info-icon">📱</div>
            <div className="info-details">
              <h4>Call Us</h4>
              <p>+91-8448055732</p>
              <p>+91-9350074731</p>
              <p>+91-9888467884</p>
            </div>
          </div>
          
          {/* Email Addresses */}
          <div className="info-item">
  <div className="info-icon">📧</div>
  <div className="info-details">
    <h4>Email Us</h4>
    <p><a href="mailto:info@aploslogix.com" style={{ color: 'white', textDecoration: 'none' }}>info@aploslogix.com</a></p>
    <p><a href="mailto:sales@aploslogix.com" style={{ color: 'white', textDecoration: 'none' }}>sales@aploslogix.com</a></p>
    <p><a href="mailto:jagdeep.sharma@saraltech.in" style={{ color: 'white', textDecoration: 'none' }}>jagdeep.sharma@saraltech.in</a></p>
  </div>
</div>


          
          {/* Business Hours */}
          <div className="info-item">
            <div className="info-icon">🕐</div>
            <div className="info-details">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          {/* Quick Contact CTA */}
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'linear-gradient(45deg, rgba(255, 94, 0, 0.1), rgba(0, 178, 255, 0.1))',
            borderRadius: '10px',
            border: '1px solid rgba(255, 94, 0, 0.3)',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#FF5E00', marginBottom: '1rem' }}>Need Immediate Assistance?</h4>
            <p style={{ marginBottom: '1rem', opacity: '0.9' }}>
              Our technical experts are standing by to help with your industrial automation needs.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="tel:+919888467884" 
                style={{
                  padding: '10px 20px',
                  background: 'linear-gradient(45deg, #FF5E00, #00B2FF)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}
              >
                📞 Call Now
              </a>
              <a 
                href="mailto:info@aploslogix.com" 
                style={{
                  padding: '10px 20px',
                  border: '2px solid #FF5E00',
                  color: '#FF5E00',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;