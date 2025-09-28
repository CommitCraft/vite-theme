import { useState, useEffect, useRef } from 'react';

function About() {
  const aboutRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  // Enhanced responsive breakpoints
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsSmallMobile(width <= 480);
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
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
      <h2 className="section-title" style={{
        fontSize: isSmallMobile ? '1.8rem' : isMobile ? '2.2rem' : isTablet ? '2.6rem' : '3rem',
        marginBottom: isSmallMobile ? '1rem' : isMobile ? '1.5rem' : '2rem'
      }}>
        About Aplos Logix Pvt. Ltd.
      </h2>
      <div className="about-content" style={{
        display: 'grid',
        gridTemplateColumns: isSmallMobile ? '1fr' : isMobile ? '1fr' : 'repeat(2, 1fr)',
        gap: isSmallMobile ? '2rem' : isMobile ? '2.5rem' : '3rem',
        alignItems: 'start'
      }}>
        <div className="about-text animate-on-scroll" style={{
          padding: isSmallMobile ? '1rem' : isMobile ? '1.5rem' : '0'
        }}>
          <h2 style={{
            fontSize: isSmallMobile ? '1.4rem' : isMobile ? '1.7rem' : isTablet ? '2rem' : '2.2rem',
            marginBottom: isSmallMobile ? '1rem' : isMobile ? '1.2rem' : '1.5rem',
            lineHeight: '1.3'
          }}>
            Transforming Industries with Smart Technology
          </h2>
          <p style={{
            fontSize: isSmallMobile ? '0.9rem' : isMobile ? '1rem' : '1.1rem',
            lineHeight: isSmallMobile ? '1.5' : '1.6',
            marginBottom: isSmallMobile ? '1rem' : '1.5rem'
          }}>
            At <strong style={{ color: '#FF5E00' }}>Aplos Logix Pvt. Ltd.</strong>, we believe that 
            the most powerful technology is invisible technology. We create IIoT solutions that work 
            seamlessly behind the scenes, empowering manufacturers to achieve extraordinary results 
            without complexity.
          </p>
          <p style={{
            fontSize: isSmallMobile ? '0.9rem' : isMobile ? '1rem' : '1.1rem',
            lineHeight: isSmallMobile ? '1.5' : '1.6',
            marginBottom: isSmallMobile ? '1rem' : '1.5rem'
          }}>
            Our mission is simple: transform industrial operations through intelligent automation, 
            real-time insights, and sustainable practices that drive both profitability and 
            environmental responsibility.
          </p>
          <p style={{
            fontSize: isSmallMobile ? '0.9rem' : isMobile ? '1rem' : '1.1rem',
            lineHeight: isSmallMobile ? '1.5' : '1.6',
            marginBottom: isSmallMobile ? '1.5rem' : '2rem'
          }}>
            We're not just another tech company. We're architects of the future, building intelligent 
            ecosystems that make complex industrial processes beautifully simple.
          </p>
          
          {/* Core Values */}
          <div style={{ marginTop: isSmallMobile ? '1.5rem' : '2rem' }}>
            <h3 style={{ 
              color: '#00B2FF', 
              marginBottom: '1rem',
              fontSize: isSmallMobile ? '1.1rem' : isMobile ? '1.3rem' : '1.5rem'
            }}>
              Our Core Values
            </h3>
            <div style={{ 
              display: 'grid', 
              gap: isSmallMobile ? '0.8rem' : '1rem' 
            }}>
              <div style={{ 
                padding: isSmallMobile ? '0.8rem' : '1rem',
                background: 'rgba(255, 94, 0, 0.05)',
                borderLeft: '3px solid #FF5E00',
                borderRadius: '5px'
              }}>
                <strong style={{ 
                  fontSize: isSmallMobile ? '0.9rem' : '1rem' 
                }}>
                  Innovation First:
                </strong> 
                <span style={{ 
                  fontSize: isSmallMobile ? '0.85rem' : '0.95rem' 
                }}>
                  {' '}Cutting-edge technology that drives real transformation
                </span>
              </div>
              <div style={{ 
                padding: isSmallMobile ? '0.8rem' : '1rem',
                background: 'rgba(0, 178, 255, 0.05)',
                borderLeft: '3px solid #00B2FF',
                borderRadius: '5px'
              }}>
                <strong style={{ 
                  fontSize: isSmallMobile ? '0.9rem' : '1rem' 
                }}>
                  Security by Design:
                </strong> 
                <span style={{ 
                  fontSize: isSmallMobile ? '0.85rem' : '0.95rem' 
                }}>
                  {' '}Enterprise-grade security built into every solution
                </span>
              </div>
              <div style={{ 
                padding: isSmallMobile ? '0.8rem' : '1rem',
                background: 'rgba(255, 94, 0, 0.05)',
                borderLeft: '3px solid #FF5E00',
                borderRadius: '5px'
              }}>
                <strong style={{ 
                  fontSize: isSmallMobile ? '0.9rem' : '1rem' 
                }}>
                  Lightning Fast:
                </strong> 
                <span style={{ 
                  fontSize: isSmallMobile ? '0.85rem' : '0.95rem' 
                }}>
                  {' '}Optimized performance for mission-critical operations
                </span>
              </div>
              <div style={{ 
                padding: isSmallMobile ? '0.8rem' : '1rem',
                background: 'rgba(0, 178, 255, 0.05)',
                borderLeft: '3px solid #00B2FF',
                borderRadius: '5px'
              }}>
                <strong style={{ 
                  fontSize: isSmallMobile ? '0.9rem' : '1rem' 
                }}>
                  Scale Ready:
                </strong> 
                <span style={{ 
                  fontSize: isSmallMobile ? '0.85rem' : '0.95rem' 
                }}>
                  {' '}Solutions that grow with your business needs
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-visual animate-on-scroll" style={{
          order: isSmallMobile || isMobile ? -1 : 0,
          marginBottom: isSmallMobile || isMobile ? '1rem' : '0'
        }}>
          <div className="about-graphic" style={{
            position: 'relative',
            height: isSmallMobile ? '200px' : isMobile ? '250px' : isTablet ? '300px' : '350px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '15px',
            overflow: 'hidden'
          }}>
            {/* Stats Display */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 10
            }}>
              <div style={{ marginBottom: isSmallMobile ? '0.8rem' : '1rem' }}>
                <div style={{ 
                  fontSize: isSmallMobile ? '1.8rem' : isMobile ? '2rem' : '2.5rem', 
                  fontWeight: 'bold', 
                  color: '#FF5E00' 
                }}>
                  500+
                </div>
                <div style={{ 
                  fontSize: isSmallMobile ? '0.7rem' : '0.9rem', 
                  opacity: '0.8' 
                }}>
                  Happy Clients
                </div>
              </div>
              <div style={{ marginBottom: isSmallMobile ? '0.8rem' : '1rem' }}>
                <div style={{ 
                  fontSize: isSmallMobile ? '1.8rem' : isMobile ? '2rem' : '2.5rem', 
                  fontWeight: 'bold', 
                  color: '#00B2FF' 
                }}>
                  98%
                </div>
                <div style={{ 
                  fontSize: isSmallMobile ? '0.7rem' : '0.9rem', 
                  opacity: '0.8' 
                }}>
                  Success Rate
                </div>
              </div>
              <div>
                <div style={{ 
                  fontSize: isSmallMobile ? '1.8rem' : isMobile ? '2rem' : '2.5rem', 
                  fontWeight: 'bold', 
                  color: '#FF5E00' 
                }}>
                  60%
                </div>
                <div style={{ 
                  fontSize: isSmallMobile ? '0.7rem' : '0.9rem', 
                  opacity: '0.8' 
                }}>
                  Efficiency Boost
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional sections */}
      <div className="about-content" style={{ 
        marginTop: isSmallMobile ? '3rem' : '4rem',
        display: 'grid',
        gridTemplateColumns: isSmallMobile ? '1fr' : isMobile ? '1fr' : 'repeat(2, 1fr)',
        gap: isSmallMobile ? '2rem' : isMobile ? '2.5rem' : '3rem',
        alignItems: 'start'
      }}>
        <div className="about-visual animate-on-scroll">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: isSmallMobile ? '0.8rem' : isMobile ? '1.2rem' : isTablet ? '1.8rem' : '2rem',
            padding: isSmallMobile ? '0.8rem' : isMobile ? '1.2rem' : isTablet ? '1.8rem' : '2rem',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 94, 0, 0.2)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            maxWidth: isMobile ? '100%' : 'none',
            margin: isMobile ? '0' : 'auto',
            minHeight: isSmallMobile ? 'auto' : 'auto'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 15px 50px rgba(255, 94, 0, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(255, 94, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'rgba(255, 94, 0, 0.2)';
          }}
          >
            {/* IIoT Venn Diagram */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: isSmallMobile ? '280px' : isMobile ? '340px' : isTablet ? '400px' : '450px',
              minHeight: isSmallMobile ? '240px' : isMobile ? '300px' : isTablet ? '340px' : '380px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto',
              padding: isSmallMobile ? '0.5rem' : isMobile ? '0.8rem' : isTablet ? '1.2rem' : '1.5rem'
            }}>
              <svg
                viewBox={isSmallMobile ? "0 0 300 260" : isMobile ? "0 0 360 300" : isTablet ? "0 0 420 360" : "0 0 450 400"}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="iiot-title"
                aria-describedby="iiot-desc"
                style={{ 
                  width: '100%',
                  height: 'auto',
                  minHeight: isSmallMobile ? '240px' : isMobile ? '300px' : isTablet ? '340px' : '350px',
                  filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.filter = 'drop-shadow(0 15px 40px rgba(255, 94, 0, 0.4))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.filter = 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))';
                }}
              >
                <title id="iiot-title">IIoT Excellence Venn Diagram</title>
                <desc id="iiot-desc">Interactive diagram showing the intersection of Data Acquisition, Data Transportation, and Data Processing/Applications in Industrial IoT</desc>
                <defs>
                  <linearGradient id="gradA" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#FF5E00" />
                    <stop offset="100%" stopColor="#FF8C42" />
                  </linearGradient>
                  <linearGradient id="gradB" x1="0" x2="1" y1="1" y2="0">
                    <stop offset="0%" stopColor="#00B2FF" />
                    <stop offset="100%" stopColor="#0096E6" />
                  </linearGradient>
                  <linearGradient id="gradC" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#6EE7F9" />
                    <stop offset="100%" stopColor="#00DBDE" />
                  </linearGradient>
                  <radialGradient id="overlapGlow" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#FF5E00" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#00B2FF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#667eea" stopOpacity="0" />
                  </radialGradient>
                  <marker id="arrowHead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#FF5E00" />
                  </marker>
                  <style>
                    {`
                      .circle-hover { transition: all 0.3s ease; cursor: pointer; }
                      .circle-hover:hover { filter: brightness(1.2); }
                      .text-hover { transition: all 0.3s ease; cursor: pointer; }
                      .pulse-animation { animation: pulse 3s ease-in-out infinite; }
                      @keyframes pulse {
                        0%, 100% { opacity: 0.6; }
                        50% { opacity: 1; }
                      }
                    `}
                  </style>
                </defs>
                {/* Responsive positioning with better mobile spacing */}
                <g transform={isSmallMobile ? 'translate(15,20)' : isMobile ? 'translate(18,25)' : isTablet ? 'translate(15,18)' : 'translate(10,20)'}>

                {/* Three overlapping circles with enhanced responsive layout */}
                <circle 
                  cx={isSmallMobile ? "120" : isMobile ? "130" : isTablet ? "160" : "180"} 
                  cy={isSmallMobile ? "90" : isMobile ? "100" : isTablet ? "140" : "160"} 
                  r={isSmallMobile ? "65" : isMobile ? "75" : isTablet ? "100" : "120"} 
                  fill="url(#gradA)" 
                  stroke="rgba(255,255,255,0.3)" 
                  strokeWidth={isSmallMobile ? "1.5" : isMobile ? "2" : isTablet ? "2.2" : "2.5"} 
                  fillOpacity="0.75"
                  className="circle-hover"
                  onMouseEnter={(e) => {
                    e.target.style.fillOpacity = '0.9';
                    e.target.style.strokeWidth = isSmallMobile ? '2.5' : isMobile ? '3' : isTablet ? '3.2' : '3.5';
                    e.target.style.stroke = 'rgba(255, 94, 0, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.fillOpacity = '0.75';
                    e.target.style.strokeWidth = isSmallMobile ? '1.5' : isMobile ? '2' : isTablet ? '2.2' : '2.5';
                    e.target.style.stroke = 'rgba(255,255,255,0.3)';
                  }}
                />
                <circle 
                  cx={isSmallMobile ? "85" : isMobile ? "95" : isTablet ? "120" : "140"} 
                  cy={isSmallMobile ? "145" : isMobile ? "160" : isTablet ? "220" : "250"} 
                  r={isSmallMobile ? "65" : isMobile ? "75" : isTablet ? "100" : "120"} 
                  fill="url(#gradB)" 
                  stroke="rgba(255,255,255,0.3)" 
                  strokeWidth={isSmallMobile ? "1.5" : isMobile ? "2" : isTablet ? "2.2" : "2.5"} 
                  fillOpacity="0.75"
                  className="circle-hover"
                  onMouseEnter={(e) => {
                    e.target.style.fillOpacity = '0.9';
                    e.target.style.strokeWidth = isSmallMobile ? '2.5' : isMobile ? '3' : isTablet ? '3.2' : '3.5';
                    e.target.style.stroke = 'rgba(0, 178, 255, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.fillOpacity = '0.75';
                    e.target.style.strokeWidth = isSmallMobile ? '1.5' : isMobile ? '2' : isTablet ? '2.2' : '2.5';
                    e.target.style.stroke = 'rgba(255,255,255,0.3)';
                  }}
                />
                <circle 
                  cx={isSmallMobile ? "165" : isMobile ? "185" : isTablet ? "240" : "280"} 
                  cy={isSmallMobile ? "140" : isMobile ? "155" : isTablet ? "215" : "245"} 
                  r={isSmallMobile ? "65" : isMobile ? "75" : isTablet ? "100" : "120"} 
                  fill="url(#gradC)" 
                  stroke="rgba(255,255,255,0.3)" 
                  strokeWidth={isSmallMobile ? "1.5" : isMobile ? "2" : isTablet ? "2.2" : "2.5"} 
                  fillOpacity="0.75"
                  className="circle-hover"
                  onMouseEnter={(e) => {
                    e.target.style.fillOpacity = '0.9';
                    e.target.style.strokeWidth = isSmallMobile ? '2.5' : isMobile ? '3' : isTablet ? '3.2' : '3.5';
                    e.target.style.stroke = 'rgba(110, 231, 249, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.fillOpacity = '0.75';
                    e.target.style.strokeWidth = isSmallMobile ? '1.5' : isMobile ? '2' : isTablet ? '2.2' : '2.5';
                    e.target.style.stroke = 'rgba(255,255,255,0.3)';
                  }}
                />

                {/* Enhanced overlap glow with responsive sizing */}
                <g style={{ mixBlendMode: 'screen' }}>
                  <circle 
                    cx={isSmallMobile ? "125" : isMobile ? "140" : isTablet ? "175" : "205"} 
                    cy={isSmallMobile ? "125" : isMobile ? "135" : isTablet ? "190" : "220"} 
                    r={isSmallMobile ? "40" : isMobile ? "45" : isTablet ? "60" : "75"} 
                    fill="url(#overlapGlow)" 
                    className="pulse-animation"
                    style={{ transformOrigin: 'center' }}
                  />
                </g>

                {/* Improved labels with responsive positioning and sizing */}
                <text 
                  x={isSmallMobile ? "120" : isMobile ? "130" : isTablet ? "160" : "180"} 
                  y={isSmallMobile ? "68" : isMobile ? "75" : isTablet ? "95" : "110"} 
                  textAnchor="middle" 
                  fill="white" 
                  fontFamily="Orbitron, monospace" 
                  fontSize={isSmallMobile ? "9" : isMobile ? "10" : isTablet ? "14" : "16"} 
                  fontWeight="700"
                  className="text-hover"
                  onMouseEnter={(e) => {
                    e.target.style.fill = '#FF5E00';
                    e.target.style.fontSize = isSmallMobile ? '10' : isMobile ? '11' : isTablet ? '16' : '18';
                    e.target.style.filter = 'drop-shadow(0 0 8px #FF5E00)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.fill = 'white';
                    e.target.style.fontSize = isSmallMobile ? '9' : isMobile ? '10' : isTablet ? '14' : '16';
                    e.target.style.filter = 'none';
                  }}
                >
                  Data Acquisition
                </text>
                <text 
                  x={isSmallMobile ? "85" : isMobile ? "95" : isTablet ? "105" : "115"} 
                  y={isSmallMobile ? "158" : isMobile ? "175" : isTablet ? "225" : "250"} 
                  textAnchor="middle" 
                  fill="white" 
                  fontFamily="Orbitron, monospace" 
                  fontSize={isSmallMobile ? "7" : isMobile ? "8" : isTablet ? "12" : "15"} 
                  fontWeight="700"
                  className="text-hover"
                  onMouseEnter={(e) => {
                    e.target.style.fill = '#00B2FF';
                    e.target.style.fontSize = isSmallMobile ? '8' : isMobile ? '9' : isTablet ? '14' : '17';
                    e.target.style.filter = 'drop-shadow(0 0 8px #00B2FF)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.fill = 'white';
                    e.target.style.fontSize = isSmallMobile ? '7' : isMobile ? '8' : isTablet ? '12' : '15';
                    e.target.style.filter = 'none';
                  }}
                >
                  Data
                  <tspan 
                    x={isSmallMobile ? "85" : isMobile ? "95" : isTablet ? "105" : "115"} 
                    dy="1.3em"
                  >
                    Transportation
                  </tspan>
                </text>
                <text 
                  x={isSmallMobile ? "165" : isMobile ? "185" : isTablet ? "240" : "280"} 
                  y={isSmallMobile ? "153" : isMobile ? "170" : isTablet ? "220" : "250"} 
                  textAnchor="middle" 
                  fill="white" 
                  fontFamily="Orbitron, monospace" 
                  fontSize={isSmallMobile ? "6" : isMobile ? "7" : isTablet ? "11" : "14"} 
                  fontWeight="700"
                  className="text-hover"
                  onMouseEnter={(e) => {
                    e.target.style.fill = '#6EE7F9';
                    e.target.style.fontSize = isSmallMobile ? '7' : isMobile ? '8' : isTablet ? '13' : '16';
                    e.target.style.filter = 'drop-shadow(0 0 8px #6EE7F9)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.fill = 'white';
                    e.target.style.fontSize = isSmallMobile ? '6' : isMobile ? '7' : isTablet ? '11' : '14';
                    e.target.style.filter = 'none';
                  }}
                >
                  Data Processing /
                  <tspan 
                    x={isSmallMobile ? "165" : isMobile ? "185" : isTablet ? "240" : "280"} 
                    dy="1.3em"
                  >
                    Applications
                  </tspan>
                </text>

                {/* Enhanced center dot + arrow with responsive sizing */}
                <circle 
                  cx={isSmallMobile ? "125" : isMobile ? "140" : isTablet ? "175" : "205"} 
                  cy={isSmallMobile ? "125" : isMobile ? "135" : isTablet ? "190" : "220"} 
                  r={isSmallMobile ? "3" : isMobile ? "4" : isTablet ? "6" : "8"} 
                  fill="#FF5E00" 
                  style={{ 
                    filter: 'drop-shadow(0 0 12px #FF5E00)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.r = isSmallMobile ? '4' : isMobile ? '5' : isTablet ? '8' : '10';
                    e.target.style.filter = 'drop-shadow(0 0 20px #FF5E00)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.r = isSmallMobile ? '3' : isMobile ? '4' : isTablet ? '6' : '8';
                    e.target.style.filter = 'drop-shadow(0 0 12px #FF5E00)';
                  }}
                />
                <line 
                  x1={isSmallMobile ? "125" : isMobile ? "140" : isTablet ? "175" : "205"} 
                  y1={isSmallMobile ? "125" : isMobile ? "135" : isTablet ? "190" : "220"} 
                  x2={isSmallMobile ? "210" : isMobile ? "240" : isTablet ? "320" : "360"} 
                  y2={isSmallMobile ? "50" : isMobile ? "55" : isTablet ? "85" : "110"} 
                  stroke="#FF5E00" 
                  strokeWidth={isSmallMobile ? "1.5" : isMobile ? "1.8" : isTablet ? "2.5" : "3"} 
                  markerEnd="url(#arrowHead)"
                  style={{ 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.strokeWidth = isSmallMobile ? '2.2' : isMobile ? '2.5' : isTablet ? '3.2' : '4';
                    e.target.style.filter = 'drop-shadow(0 0 10px #FF5E00)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.strokeWidth = isSmallMobile ? '1.5' : isMobile ? '1.8' : isTablet ? '2.5' : '3';
                    e.target.style.filter = 'none';
                  }}
                />

                {/* Responsive title positioning */}
                <text 
                  x={isSmallMobile ? "155" : isMobile ? "175" : isTablet ? "200" : "230"} 
                  y={isSmallMobile ? "62" : isMobile ? "68" : isTablet ? "30" : "35"} 
                  textAnchor="middle" 
                  fill="white" 
                  fontFamily="Orbitron, monospace" 
                  fontSize={isSmallMobile ? "10" : isMobile ? "11" : isTablet ? "17" : "20"} 
                  fontWeight="800"
                  className="text-hover"
                  onMouseEnter={(e) => {
                    e.target.style.fill = '#FF5E00';
                    e.target.style.fontSize = isSmallMobile ? '11' : isMobile ? '12' : isTablet ? '19' : '22';
                    e.target.style.filter = 'drop-shadow(0 0 12px #FF5E00)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.fill = 'white';
                    e.target.style.fontSize = isSmallMobile ? '10' : isMobile ? '11' : isTablet ? '17' : '20';
                    e.target.style.filter = 'none';
                  }}
                >
                  IIoT Excellence
                </text>

                </g>
              </svg>
            </div>

            {/* Vision 2030 Text with enhanced responsive design */}
            <div style={{
              textAlign: 'center',
              padding: isSmallMobile ? '0.8rem 0.6rem' : isMobile ? '1rem 0.8rem' : isTablet ? '1.6rem 1.2rem' : '2rem 1.5rem',
              background: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '20px',
              border: '2px solid rgba(0, 178, 255, 0.4)',
              width: '100%',
              maxWidth: isSmallMobile ? '260px' : isMobile ? '320px' : isTablet ? '360px' : '400px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              backdropFilter: 'blur(15px)',
              marginTop: isSmallMobile ? '0.5rem' : '0'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.borderColor = 'rgba(0, 178, 255, 0.7)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 178, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.borderColor = 'rgba(0, 178, 255, 0.4)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <h3 style={{ 
                color: '#00B2FF', 
                marginBottom: isSmallMobile ? '0.4rem' : isMobile ? '0.6rem' : '0.8rem',
                fontSize: isSmallMobile ? '1rem' : isMobile ? '1.2rem' : isTablet ? '1.6rem' : '1.8rem',
                fontFamily: 'Orbitron, monospace',
                fontWeight: 'bold',
                textShadow: '0 0 10px rgba(0, 178, 255, 0.5)'
              }}>
                Vision 2030
              </h3>
              <p style={{ 
                fontSize: isSmallMobile ? '0.75rem' : isMobile ? '0.85rem' : isTablet ? '1rem' : '1.1rem', 
                opacity: '0.95',
                lineHeight: '1.5',
                color: 'rgba(255, 255, 255, 0.9)',
                margin: isSmallMobile ? '0 0 0.8rem 0' : isMobile ? '0 0 1rem 0' : '0 0 1.2rem 0',
                fontWeight: '400'
              }}>
                Global leader in industrial transformation through comprehensive IIoT solutions
              </p>
              
              {/* Key metrics with enhanced responsive grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: isSmallMobile ? '0.4rem' : isMobile ? '0.6rem' : isTablet ? '1.2rem' : '1.5rem',
                marginTop: isSmallMobile ? '0.8rem' : isMobile ? '1rem' : isTablet ? '1.2rem' : '1.5rem',
                paddingTop: isSmallMobile ? '0.8rem' : isMobile ? '1rem' : isTablet ? '1.2rem' : '1.5rem',
                borderTop: '2px solid rgba(255, 94, 0, 0.3)'
              }}>
                {[
                  { value: '100%', label: 'Coverage', color: '#FF5E00' },
                  { value: '24/7', label: 'Support', color: '#00B2FF' },
                  { value: 'AI', label: 'Powered', color: '#FF5E00' }
                ].map((metric, index) => (
                  <div 
                    key={index}
                    style={{ 
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      padding: isSmallMobile ? '0.3rem' : isMobile ? '0.4rem' : isTablet ? '0.6rem' : '0.8rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.02)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.boxShadow = `0 5px 15px rgba(${metric.color === '#FF5E00' ? '255, 94, 0' : '0, 178, 255'}, 0.3)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ 
                      color: metric.color, 
                      fontWeight: 'bold', 
                      fontSize: isSmallMobile ? '0.8rem' : isMobile ? '0.9rem' : isTablet ? '1.2rem' : '1.4rem',
                      transition: 'all 0.3s ease',
                      textShadow: `0 0 8px ${metric.color}40`
                    }}>
                      {metric.value}
                    </div>
                    <div style={{ 
                      fontSize: isSmallMobile ? '0.55rem' : isMobile ? '0.6rem' : isTablet ? '0.75rem' : '0.85rem', 
                      opacity: '0.8',
                      marginTop: '0.2rem',
                      fontWeight: '500'
                    }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-text animate-on-scroll" style={{
          order: isSmallMobile || isMobile ? 1 : 0,
          padding: isSmallMobile ? '1rem' : isMobile ? '1.5rem' : '0'
        }}>
          <h2 style={{
            fontSize: isSmallMobile ? '1.4rem' : isMobile ? '1.7rem' : isTablet ? '2rem' : '2.2rem',
            marginBottom: isSmallMobile ? '1rem' : isMobile ? '1.2rem' : '1.5rem'
          }}>
            Technology Excellence
          </h2>
          <p style={{
            fontSize: isSmallMobile ? '0.9rem' : isMobile ? '1rem' : '1.1rem',
            lineHeight: isSmallMobile ? '1.5' : '1.6',
            marginBottom: isSmallMobile ? '1.5rem' : '2rem'
          }}>
            To become the global leader in industrial transformation, where every factory, 
            every process, and every operation runs with perfect harmony between human 
            ingenuity and artificial intelligence.
          </p>
          
          {/* Technology Stack with enhanced responsive design */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isSmallMobile ? '1fr' : isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)', 
            gap: isSmallMobile ? '0.8rem' : isMobile ? '1rem' : '1rem',
            marginTop: '2rem'
          }}>
            <div style={{ 
              padding: isSmallMobile ? '0.8rem' : '1rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 94, 0, 0.2)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: isSmallMobile ? '1.2rem' : '1.5rem', 
                marginBottom: '0.5rem' 
              }}>
                🤖
              </div>
              <strong style={{ 
                fontSize: isSmallMobile ? '0.9rem' : '1rem' 
              }}>
                AI & Machine Learning
              </strong>
              <p style={{ 
                fontSize: isSmallMobile ? '0.75rem' : '0.85rem', 
                opacity: '0.7', 
                marginTop: '0.25rem' 
              }}>
                Advanced algorithms
              </p>
            </div>
            <div style={{ 
              padding: isSmallMobile ? '0.8rem' : '1rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(0, 178, 255, 0.2)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: isSmallMobile ? '1.2rem' : '1.5rem', 
                marginBottom: '0.5rem' 
              }}>
                🔗
              </div>
              <strong style={{ 
                fontSize: isSmallMobile ? '0.9rem' : '1rem' 
              }}>
                IoT Integration
              </strong>
              <p style={{ 
                fontSize: isSmallMobile ? '0.75rem' : '0.85rem', 
                opacity: '0.7', 
                marginTop: '0.25rem' 
              }}>
                Seamless connectivity
              </p>
            </div>
            <div style={{ 
              padding: isSmallMobile ? '0.8rem' : '1rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 94, 0, 0.2)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: isSmallMobile ? '1.2rem' : '1.5rem', 
                marginBottom: '0.5rem' 
              }}>
                ☁️
              </div>
              <strong style={{ 
                fontSize: isSmallMobile ? '0.9rem' : '1rem' 
              }}>
                Cloud Infrastructure
              </strong>
              <p style={{ 
                fontSize: isSmallMobile ? '0.75rem' : '0.85rem', 
                opacity: '0.7', 
                marginTop: '0.25rem' 
              }}>
                Scalable solutions
              </p>
            </div>
            <div style={{ 
              padding: isSmallMobile ? '0.8rem' : '1rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(0, 178, 255, 0.2)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: isSmallMobile ? '1.2rem' : '1.5rem', 
                marginBottom: '0.5rem' 
              }}>
                🔒
              </div>
              <strong style={{ 
                fontSize: isSmallMobile ? '0.9rem' : '1rem' 
              }}>
                Security & Compliance
              </strong>
              <p style={{ 
                fontSize: isSmallMobile ? '0.75rem' : '0.85rem', 
                opacity: '0.7', 
                marginTop: '0.25rem' 
              }}>
                Enterprise-grade
              </p>
            </div>
          </div>
          
          <div style={{ 
            marginTop: isSmallMobile ? '1.5rem' : '2rem',
            padding: isSmallMobile ? '0.8rem' : '1rem',
            background: 'linear-gradient(45deg, rgba(255, 94, 0, 0.1), rgba(0, 178, 255, 0.1))',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <p style={{ 
              fontSize: isSmallMobile ? '0.9rem' : '1.1rem', 
              fontWeight: '500',
              margin: '0'
            }}>
              Building the Future of Manufacturing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;