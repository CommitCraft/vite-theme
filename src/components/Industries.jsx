import { useState, useEffect, useRef } from 'react';

function Industries() {
  const sectionRef = useRef(null);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      icon: '🏭',
      name: 'Manufacturing',
      description: 'IIoT-led automation, HVAC/electrical integration, and safety for modern plants.',
      features: ['Simple, Easy, Fast', 'Accurate & Reliable', 'Cost Effective']
    },
    {
      icon: '🏢',
      name: 'Industrial Plants',
      description: 'Edge-to-cloud control for heavy industry and process environments.',
      features: ['To the Point', 'Accurate & Reliable', 'Scalable & Modular']
    },
    {
      icon: '🖥️',
      name: 'Data Centers',
      description: 'Precision HVAC, power telemetry, and incident-safe operations.',
      features: ['Simple, Easy, Fast', 'Secure by Design', 'Cost Effective']
    }
  ];

  const approachChips = [
    { label: 'Simple, Easy, Fast', icon: '✨' },
    { label: 'To the Point', icon: '🎯' },
    { label: 'Accurate & Reliable', icon: '✅' },
    { label: 'Cost Effective', icon: '💰' },
    { label: 'Secure by Design', icon: '🔒' },
    { label: 'Scalable & Modular', icon: '📈' }
  ];

  return (
    <section className="features" id="industries" ref={sectionRef}>
      <h2 className="section-title">Industries We Serve</h2>
      <p style={{
        textAlign: 'center',
        fontSize: '1.2rem',
        opacity: '0.8',
        maxWidth: '800px',
        margin: '0 auto 2rem',
        lineHeight: '1.6'
      }}>
        Our IIoT-first approach adapts to each sector—consistent principles, tailored outcomes.
      </p>

      {/* Approach Chips */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        justifyContent: 'center',
        marginBottom: '3rem'
      }}>
        {approachChips.map((chip, index) => (
          <span key={index} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 94, 0, 0.3)',
            background: 'rgba(255, 94, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            color: '#FF5E00',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}>
            <span>{chip.icon}</span>
            {chip.label}
          </span>
        ))}
      </div>

      {/* Industries Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: isMobile ? '1.5rem' : '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {industries.map((industry, index) => (
          <div key={index} className="animate-on-scroll" style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 94, 0, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 10px 40px rgba(255, 94, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
          >
            {/* Icon */}
            <div style={{
              fontSize: '3rem',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              {industry.icon}
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#00B2FF',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              {industry.name}
            </h3>

            {/* Description */}
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              {industry.description}
            </p>

            {/* Features */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center'
            }}>
              {industry.features.map((feature, idx) => (
                <span key={idx} style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  background: 'rgba(0, 178, 255, 0.1)',
                  border: '1px solid rgba(0, 178, 255, 0.3)',
                  color: '#00B2FF',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{
        textAlign: 'center',
        marginTop: '4rem'
      }}>
        <button
          className="cta-button cta-primary mx-auto"
          style={{
            fontSize: '1.1rem',
            padding: '15px 40px'
          }}
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Industry Solutions
        </button>
      </div>
    </section>
  );
}

export default Industries;