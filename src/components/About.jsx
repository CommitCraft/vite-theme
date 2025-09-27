import { useState, useEffect, useRef } from 'react';

function About() {
  const aboutRef = useRef(null);
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

    if (aboutRef.current) {
      const elements = aboutRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <h2 className="section-title">About Saral Technologies</h2>
      <div className="about-content">
        <div className="about-text animate-on-scroll">
          <h2>Transforming Industries with Smart Technology</h2>
          <p>
            At <strong style={{ color: '#FF5E00' }}>Saral Technologies</strong>, we believe that 
            the most powerful technology is invisible technology. We create IIoT solutions that work 
            seamlessly behind the scenes, empowering manufacturers to achieve extraordinary results 
            without complexity.
          </p>
          <p>
            Our mission is simple: transform industrial operations through intelligent automation, 
            real-time insights, and sustainable practices that drive both profitability and 
            environmental responsibility.
          </p>
          <p>
            We're not just another tech company. We're architects of the future, building intelligent 
            ecosystems that make complex industrial processes beautifully simple.
          </p>
          
          {/* Core Values */}
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ color: '#00B2FF', marginBottom: '1rem' }}>Our Core Values</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ 
                padding: '1rem',
                background: 'rgba(255, 94, 0, 0.05)',
                borderLeft: '3px solid #FF5E00',
                borderRadius: '5px'
              }}>
                <strong>Innovation First:</strong> Cutting-edge technology that drives real transformation
              </div>
              <div style={{ 
                padding: '1rem',
                background: 'rgba(0, 178, 255, 0.05)',
                borderLeft: '3px solid #00B2FF',
                borderRadius: '5px'
              }}>
                <strong>Security by Design:</strong> Enterprise-grade security built into every solution
              </div>
              <div style={{ 
                padding: '1rem',
                background: 'rgba(255, 94, 0, 0.05)',
                borderLeft: '3px solid #FF5E00',
                borderRadius: '5px'
              }}>
                <strong>Lightning Fast:</strong> Optimized performance for mission-critical operations
              </div>
              <div style={{ 
                padding: '1rem',
                background: 'rgba(0, 178, 255, 0.05)',
                borderLeft: '3px solid #00B2FF',
                borderRadius: '5px'
              }}>
                <strong>Scale Ready:</strong> Solutions that grow with your business needs
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-visual animate-on-scroll">
          <div className="about-graphic">
            {/* Stats Display */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 10
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FF5E00' }}>500+</div>
                <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>Happy Clients</div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00B2FF' }}>98%</div>
                <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>Success Rate</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FF5E00' }}>60%</div>
                <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>Efficiency Boost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional sections */}
      <div className="about-content" style={{ marginTop: '4rem' }}>
        <div className="about-visual animate-on-scroll">
          <div className="about-graphic-alt">
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            {/* Vision text overlay */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 10,
              width: '200px'
            }}>
              <h3 style={{ color: '#00B2FF', marginBottom: '0.5rem' }}>Vision 2030</h3>
              <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
                Global leader in industrial transformation
              </p>
            </div>
          </div>
        </div>
        
        <div className="about-text animate-on-scroll">
          <h2>Technology Excellence</h2>
          <p>
            To become the global leader in industrial transformation, where every factory, 
            every process, and every operation runs with perfect harmony between human 
            ingenuity and artificial intelligence.
          </p>
          
          {/* Technology Stack */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', 
            gap: '1rem',
            marginTop: '2rem'
          }}>
            <div style={{ 
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 94, 0, 0.2)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🤖</div>
              <strong>AI & Machine Learning</strong>
              <p style={{ fontSize: '0.85rem', opacity: '0.7', marginTop: '0.25rem' }}>Advanced algorithms</p>
            </div>
            <div style={{ 
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(0, 178, 255, 0.2)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🔗</div>
              <strong>IoT Integration</strong>
              <p style={{ fontSize: '0.85rem', opacity: '0.7', marginTop: '0.25rem' }}>Seamless connectivity</p>
            </div>
            <div style={{ 
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 94, 0, 0.2)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>☁️</div>
              <strong>Cloud Infrastructure</strong>
              <p style={{ fontSize: '0.85rem', opacity: '0.7', marginTop: '0.25rem' }}>Scalable solutions</p>
            </div>
            <div style={{ 
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(0, 178, 255, 0.2)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🔒</div>
              <strong>Security & Compliance</strong>
              <p style={{ fontSize: '0.85rem', opacity: '0.7', marginTop: '0.25rem' }}>Enterprise-grade</p>
            </div>
          </div>
          
          <div style={{ 
            marginTop: '2rem',
            padding: '1rem',
            background: 'linear-gradient(45deg, rgba(255, 94, 0, 0.1), rgba(0, 178, 255, 0.1))',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>
              Building the Future of Manufacturing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;