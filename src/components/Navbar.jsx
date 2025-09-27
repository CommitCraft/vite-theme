import { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }

      // Update active navigation
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.pageYOffset + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        document.body.classList.remove('mobile-menu-open');
      }
    };

    const handleNavLinkClick = () => {
      setIsMenuOpen(false);
      document.body.classList.remove('mobile-menu-open');
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.removeEventListener('click', handleNavLinkClick);
      });
      // Clean up body class on component unmount
      document.body.classList.remove('mobile-menu-open');
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close mobile menu and restore body scroll
    setIsMenuOpen(false);
    document.body.classList.remove('mobile-menu-open');
  };

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    // Prevent body scroll when menu is open
    if (newMenuState) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  };

  return (
    <nav id="navbar" ref={navbarRef}>
      <div className="nav-container">
        <a href="#home" className="logo-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <svg className="logo-svg" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#FF5E00", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#00B2FF", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <polygon points="20,2 38,14 38,26 20,38 2,26 2,14" fill="none" stroke="url(#logoGradient)" strokeWidth="2" />
            <polygon points="20,8 32,16 32,24 20,32 8,24 8,16" fill="url(#logoGradient)" opacity="0.3" />
            <circle cx="20" cy="20" r="3" fill="url(#logoGradient)" />
          </svg>
          <span className="logo-text">SARAL TECH</span>
        </a>

        {/* Desktop Navigation - Main Links Only */}
        <ul className="nav-links desktop-nav">
          <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#features" className={`nav-link ${activeSection === 'features' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Solutions</a></li>
          <li><a href="#industries" className={`nav-link ${activeSection === 'industries' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }}>Industries</a></li>
          <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>

        {/* Mobile Navigation - All Links */}
        <ul className={`nav-links mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#features" className={`nav-link ${activeSection === 'features' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Solutions</a></li>
          <li><a href="#customers" className={`nav-link ${activeSection === 'customers' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('customers'); }}>Customers</a></li>
          <li><a href="#industries" className={`nav-link ${activeSection === 'industries' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }}>Industries</a></li>
          <li><a href="#how-it-works" className={`nav-link ${activeSection === 'how-it-works' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>How It Works</a></li>
          <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#testimonials" className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a></li>
          <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => {
            setIsMenuOpen(false);
            document.body.classList.remove('mobile-menu-open');
          }}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;