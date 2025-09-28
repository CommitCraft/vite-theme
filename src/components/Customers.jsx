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

  // Auto-rotate customers with seamless loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Create seamless loop: when reaching the end, jump to beginning
        if (prevIndex >= customers.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [customers.length]);

  // Create extended array for seamless looping
  // Add last 2 items at the beginning and first 2 items at the end
  const extendedCustomers = [
    ...customers.slice(-2), // Last 2 items at beginning
    ...customers,           // Original array
    ...customers.slice(0, 2) // First 2 items at end
  ];

  // Adjust the display index for the extended array
  const displayIndex = currentIndex + 2;

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
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {extendedCustomers.slice(displayIndex, displayIndex + 6).map((customer, index) => (
            <div 
              key={`${customer.name}-${index}`} 
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 94, 0, 0.2)',
                borderRadius: '20px',
                padding: '1.5rem',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                textAlign: 'center',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
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
                marginBottom: '1rem',
                flex: 1,
                alignItems: 'center'
              }}>
                <img 
                  src={customer.logo} 
                  alt={customer.name} 
                  style={{
                    width: '150px',
                    height: '100px',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '1rem',
                    filter: 'brightness(1.1)'
                  }}
                />
              </div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#ffffff',
                margin: '0',
                textAlign: 'center'
              }}>
                {customer.name}
              </h3>
            </div>
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