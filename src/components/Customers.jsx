import { useState, useEffect } from 'react';

function Customers() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Saral Tech customer data
  const customers = [
    {
      name: 'Balaji PS',
      logo: 'https://dummyimage.com/300x200/0f172a/ffffff&text=Balaji+PS',
      industry: 'Manufacturing',
      solution: 'IIoT Monitoring & Controls',
      description: 'Sensor-to-cloud monitoring with centralized dashboards and alerts.',
      status: 'Active'
    },
    {
      name: 'DLJM Chimney Server',
      logo: 'https://img.logo.dev/dljm.com?token=pk_CuOqdoCkST2cRxuesFwutg',
      industry: 'Kitchen Appliances',
      solution: 'IIoT & Safety Systems',
      description: 'Production line visibility and critical safety monitoring.',
      status: 'Active'
    },
    {
      name: 'GoldShell',
      logo: 'https://img.logo.dev/goldshell.com?token=pk_CuOqdoCkST2cRxuesFwutg',
      industry: 'Electronics & OEM',
      solution: 'Electrical & IIoT Solutions',
      description: 'Energy monitoring, power quality, and predictive maintenance.',
      status: 'Active'
    },
    {
      name: 'KUNSTOCOM',
      logo: 'https://img.logo.dev/kunstocom.com?token=pk_CuOqdoCkST2cRxuesFwutg',
      industry: 'Industrial Manufacturing',
      solution: 'Complete IIoT & HVAC',
      description: 'End-to-end telemetry, controls, and environment management.',
      status: 'Active'
    },
    {
      name: 'OSPT',
      logo: 'https://img.logo.dev/osptalliance.org?token=pk_CuOqdoCkST2cRxuesFwutg',
      industry: 'Manufacturing',
      solution: 'IIoT Monitoring',
      description: 'Machine data acquisition, OEE, and alerting workflows.',
      status: 'Active'
    },
    {
      name: 'Penguin',
      logo: 'https://dummyimage.com/300x200/0f172a/ffffff&text=Penguin',
      industry: 'Cooling & Refrigeration',
      solution: 'HVAC & Remote Monitoring',
      description: 'Temperature/humidity telemetry with anomaly notifications.',
      status: 'Active'
    },
    {
      name: 'Stelin',
      logo: 'https://img.logo.dev/stelin.in?token=pk_CuOqdoCkST2cRxuesFwutg',
      industry: 'Industrial Manufacturing',
      solution: 'Electrical & Safety Systems',
      description: 'Panel monitoring, load analytics, and safety compliance.',
      status: 'Active'
    },
    {
      name: 'Alby',
      logo: 'https://dummyimage.com/300x200/0f172a/ffffff&text=Alby',
      industry: 'Consumer Appliances',
      solution: 'IIoT & QA Monitoring',
      description: 'Line-side data capture and quality dashboards.',
      status: 'Active'
    }
  ];

  const stats = [
    {
      number: '100+',
      label: 'Trusted Customers',
      description: 'Leading companies across industries',
      icon: '🏆'
    },
    {
      number: '25+',
      label: 'Industries Served',
      description: 'Diverse sector expertise',
      icon: '🏭'
    },
    {
      number: '99.8%',
      label: 'Client Retention',
      description: 'Long-term partnerships',
      icon: '🤝'
    },
    {
      number: '₹150+ Cr',
      label: 'Total Savings',
      description: 'Generated for customers',
      icon: '💰'
    }
  ];

  // Auto-rotate customers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % customers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [customers.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="features" id="customers">
      <h2 className="section-title">Our Customers</h2>
      <p style={{
        textAlign: 'center',
        fontSize: '1.2rem',
        opacity: '0.8',
        maxWidth: '800px',
        margin: '0 auto 3rem',
        lineHeight: '1.6'
      }}>
        Leading companies across industries trust Saral Technologies for their IIoT, HVAC, Electrical, and Safety solutions.
      </p>

      {/* Customer Showcase */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {customers.slice(currentIndex, currentIndex + 3).map((customer, index) => (
            <div 
              key={index} 
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 94, 0, 0.2)',
                borderRadius: '20px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 10px 40px rgba(255, 94, 0, 0.3)';
                e.target.style.borderColor = 'rgba(255, 94, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
                e.target.style.borderColor = 'rgba(255, 94, 0, 0.2)';
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginBottom: '1.5rem' 
              }}>
                <img 
                  src={customer.logo} 
                  alt={customer.name} 
                  style={{
                    width: '120px',
                    height: '80px',
                    objectFit: 'contain',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '0.5rem'
                  }}
                />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  marginBottom: '0.5rem'
                }}>
                  {customer.name}
                </h3>
                <p style={{
                  color: '#FF5E00',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  marginBottom: '0.25rem'
                }}>
                  {customer.industry}
                </p>
                <p style={{
                  color: '#00B2FF',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  marginBottom: '1rem'
                }}>
                  {customer.solution}
                </p>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  marginBottom: '1rem'
                }}>
                  {customer.description}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#10b981',
                    borderRadius: '50%'
                  }}></span>
                  <span style={{
                    color: '#10b981',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {customer.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: isMobile ? '0.3rem' : '0.75rem'
        }}>
          {Array.from({ length: Math.ceil(customers.length / 3) }).map((_, index) => (
            <button
              key={index}
              style={{
                width: isMobile ? '6px' : '12px',
                height: isMobile ? '6px' : '12px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: index === Math.floor(currentIndex / 3) 
                  ? 'linear-gradient(45deg, #FF5E00, #00B2FF)' 
                  : 'rgba(255, 255, 255, 0.3)',
                transform: index === Math.floor(currentIndex / 3) 
                  ? (isMobile ? 'scale(1.1)' : 'scale(1.25)') 
                  : 'scale(1)',
                boxShadow: index === Math.floor(currentIndex / 3) 
                  ? '0 0 15px rgba(255, 94, 0, 0.5)' 
                  : 'none'
              }}
              onClick={() => setCurrentIndex(index * 3)}
              onMouseEnter={(e) => {
                if (index !== Math.floor(currentIndex / 3)) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (index !== Math.floor(currentIndex / 3)) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                }
              }}
            />
          ))}
        </div>
        </div>

      {/* Stats Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile 
          ? '1fr' 
          : 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '4rem'
      }}>
        {stats.map((stat, index) => (
          <div 
            key={index} 
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(0, 178, 255, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 10px 40px rgba(0, 178, 255, 0.3)';
              e.target.style.borderColor = 'rgba(0, 178, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
              e.target.style.borderColor = 'rgba(0, 178, 255, 0.2)';
            }}
          >
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              filter: 'drop-shadow(0 0 10px rgba(0, 178, 255, 0.5))'
            }}>
              {stat.icon}
            </div>
            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #FF5E00, #00B2FF)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0.5rem'
            }}>
              {stat.number}
            </div>
            <div style={{
              color: '#ffffff',
              fontWeight: '600',
              marginBottom: '0.5rem',
              fontSize: '1.1rem'
            }}>
              {stat.label}
            </div>
            <div style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.9rem'
            }}>
              {stat.description}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 94, 0, 0.2)',
        borderRadius: '20px',
        padding: '3rem 2rem',
        textAlign: 'center',
        backdropFilter: 'blur(10px)'
      }}>
        <h3 style={{
          fontSize: isMobile ? '1.5rem' : '2rem',
          fontWeight: 'bold',
          color: '#ffffff',
          marginBottom: '1rem'
        }}>
          Join Industry Leaders Who Trust Us
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: isMobile ? '1rem' : '1.1rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem',
          lineHeight: '1.6',
          padding: isMobile ? '0 1rem' : '0'
        }}>
          From Fortune 500 companies to innovative startups, businesses across industries choose
          Saral Technologies for reliable, scalable, and cutting-edge solutions.
        </p>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <button
            className="cta-button cta-primary"
            style={{
              fontSize: '1.1rem',
              padding: '15px 40px',
              minWidth: isMobile ? '280px' : 'auto'
            }}
            onClick={() => scrollToSection('contact')}
          >
            Become Our Customer
          </button>
          <button
            className="cta-button cta-secondary"
            style={{
              fontSize: '1.1rem',
              padding: '15px 40px',
              minWidth: isMobile ? '280px' : 'auto'
            }}
            onClick={() => scrollToSection('testimonials')}
          >
            View Testimonials
          </button>
        </div>
      </div>
    </section>
  );
}

export default Customers;