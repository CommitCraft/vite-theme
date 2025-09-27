import { useState, useEffect } from 'react';

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Updated with Saral Tech data
  const textSets = [
    {
      title: "SMART IIOT SOLUTIONS",
      subtitle: "Simplifying Industrial Innovation with Industry 4.0"
    },
    {
      title: "NEXT-GEN INDUSTRIAL",
      subtitle: "Cutting-edge IIoT-driven solutions for modern industries"
    },
    {
      title: "TRANSFORM YOUR FACTORY",
      subtitle: "Real-time monitoring and scalable automation"
    }
  ];

  // Saral Tech features data
  const features = [
    {
      icon: "✋",
      title: "Simple, Easy, Fast",
      description: "No technological jargon, no fuss."
    },
    {
      icon: "🎯",
      title: "To the Point",
      description: "Everything that's needed—no fancy frills."
    },
    {
      icon: "✅",
      title: "Accurate & Reliable",
      description: "High focus on accuracy & reliability."
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Simplicity saves money."
    }
  ];

  useEffect(() => {
    // Text rotation with character animation
    const textSets = document.querySelectorAll('.text-set');
    let currentIndex = 0;
    let isAnimating = false;

    function wrapTextInSpans(element) {
      const text = element.textContent;
      element.innerHTML = text.split('').map((char, i) => 
        `<span class="char" style="animation-delay: ${i * 0.05}s">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');
    }

    function animateTextIn(textSet) {
      const glitchText = textSet.querySelector('.glitch-text');
      const subtitle = textSet.querySelector('.subtitle');
      
      // Wrap text in spans for animation
      wrapTextInSpans(glitchText);
      
      // Update data attribute for glitch effect
      glitchText.setAttribute('data-text', glitchText.textContent);
      
      // Show subtitle after main text
      setTimeout(() => {
        subtitle.classList.add('visible');
      }, 800);
    }

    function animateTextOut(textSet) {
      const chars = textSet.querySelectorAll('.char');
      const subtitle = textSet.querySelector('.subtitle');
      
      // Animate characters out
      chars.forEach((char, i) => {
        char.style.animationDelay = `${i * 0.5}s`;
        char.classList.add('out');
      });
      
      // Hide subtitle
      subtitle.classList.remove('visible');
    }

    function rotateText() {
      if (isAnimating) return;
      isAnimating = true;

      const currentSet = textSets[currentIndex];
      const nextIndex = (currentIndex + 1) % textSets.length;
      const nextSet = textSets[nextIndex];

      // Animate out current text
      animateTextOut(currentSet);

      // After out animation, switch sets
      setTimeout(() => {
        currentSet.classList.remove('active');
        nextSet.classList.add('active');
        animateTextIn(nextSet);
        
        currentIndex = nextIndex;
        setCurrentIndex(currentIndex);
        isAnimating = false;
      }, 600);
    }

    // Initialize first text set
    if (textSets.length > 0) {
      textSets[0].classList.add('active');
      animateTextIn(textSets[0]);

      // Start rotation after initial display
      setTimeout(() => {
        setInterval(rotateText, 5000); // Change every 5 seconds
      }, 4000);
    }

    // Add random glitch effect
    const glitchInterval = setInterval(() => {
      const glitchTexts = document.querySelectorAll('.glitch-text');
      glitchTexts.forEach(text => {
        if (Math.random() > 0.95) {
          text.style.animation = 'none';
          setTimeout(() => {
            text.style.animation = '';
          }, 200);
        }
      });
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="text-rotator">
          {textSets.map((textSet, index) => (
            <div key={index} className={`text-set ${index === 0 ? 'active' : ''}`}>
              <h1 className="glitch-text" data-text={textSet.title}>{textSet.title}</h1>
              <p className="subtitle">{textSet.subtitle}</p>
            </div>
          ))}
        </div>
        
        {/* Saral Tech tagline */}
        <div className="hero-tagline">
          <p className="company-intro">
            We provide cutting-edge IIoT-driven solutions that seamlessly connect and simplify
            industrial systems. Our intelligent platform enables smart automation,
            real-time monitoring, and scalable Industry 4.0 transformation.
          </p>
        </div>
      </div>
      
      <div className="cta-container" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
        margin: '0 auto'
      }}>
        <a href="#features" className="cta-button cta-primary" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>
          Explore Our Solutions
        </a>
        <a href="#about" className="cta-button cta-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
          How It Works
        </a>
      </div>
      
      {/* Feature highlights */}
      <div className="hero-features">
        {features.map((feature, index) => (
          <div key={index} className="hero-feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;