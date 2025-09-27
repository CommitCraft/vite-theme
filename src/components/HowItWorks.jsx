import { useState, useEffect, useRef } from 'react';

function HowItWorks() {
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

  const steps = [
    {
      key: "R",
      icon: "🔍",
      title: "Requirements",
      description: "Discover goals, constraints, and baseline KPIs. Map processes and identify critical data points.",
      details: ["Stakeholder interviews", "Site & network survey", "KPI baseline & success criteria"]
    },
    {
      key: "A",
      icon: "🏗️",
      title: "Architecture",
      description: "Design edge-to-cloud architecture: sensors, gateways, connectivity, data model, and security.",
      details: ["Sensor & gateway selection", "Network & topology", "Data model & security plan"]
    },
    {
      key: "D",
      icon: "⚙️",
      title: "Development",
      description: "Build and integrate: edge/PLC, cloud ingestion, dashboards, alerts, and workflows.",
      details: ["Edge & PLC integration", "APIs & data pipeline", "Dashboards & alerting"]
    },
    {
      key: "L",
      icon: "🚀",
      title: "Launch",
      description: "Commissioning, training, and SLAs—then iterate with measurable improvements.",
      details: ["UAT & go-live", "Ops training & handover", "SLA & continuous improvement"]
    }
  ];

  const gradientFor = (i) => {
    const gradients = [
      'from-emerald-500 to-teal-600',
      'from-blue-500 to-indigo-600',
      'from-green-500 to-emerald-600',
      'from-yellow-500 to-amber-600'
    ];
    return gradients[i] || gradients[0];
  };

  return (
    <section className="features" id="how-it-works" ref={sectionRef}>
      <h2 className="section-title">How Our Solutions Work</h2>
      <p style={{
        textAlign: 'center',
        fontSize: '1.2rem',
        opacity: '0.8',
        maxWidth: '800px',
        margin: '0 auto 2rem',
        lineHeight: '1.6'
      }}>
        From consultation to full implementation in four simple steps. Our comprehensive approach ensures seamless integration with maximum impact.
      </p>

      {/* RADL chips */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        justifyContent: 'center',
        marginBottom: '3rem'
      }}>
        {["R — Requirements", "A — Architecture", "D — Development", "L — Launch"].map((step, index) => (
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
            {step}
          </span>
        ))}
      </div>

      {/* Process Flow */}
      <div style={{
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Connection Line (Desktop) */}
        <div style={{
          display: 'none',
          position: 'absolute',
          top: '120px',
          left: '0',
          right: '0',
          height: '4px',
          background: 'linear-gradient(90deg, #10b981, #00B2FF, #22c55e)',
          opacity: '0.4',
          animation: 'pulse 2s infinite',
          borderRadius: '2px'
        }}></div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: isMobile ? '1.5rem' : '2rem'
        }}>
          {steps.map((step, index) => (
            <div key={step.key} className="animate-on-scroll" style={{
              position: 'relative'
            }}>
              {/* Card */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid rgba(255, 94, 0, 0.2)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
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
                {/* Phase Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '3rem',
                  height: '3rem',
                  background: `linear-gradient(45deg, #${index === 0 ? '10b981' : index === 1 ? '3b82f6' : index === 2 ? '22c55e' : 'eab308'}, #${index === 0 ? '14b8a6' : index === 1 ? '6366f1' : index === 2 ? '16a34a' : 'f59e0b'})`,
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  boxShadow: '0 0 20px rgba(255, 94, 0, 0.5)'
                }}>
                  {step.key}
                </div>

                {/* Icon */}
                <div style={{
                  fontSize: '3rem',
                  textAlign: 'center',
                  margin: '2rem 0 1rem'
                }}>
                  {step.icon}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                  marginBottom: '1rem'
                }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textAlign: 'center',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {step.description}
                </p>

                {/* Details */}
                <ul style={{
                  listStyle: 'none',
                  padding: '0'
                }}>
                  {step.details.map((detail, di) => (
                    <li key={di} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.5rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      <span style={{
                        width: '8px',
                        height: '8px',
                        background: `linear-gradient(45deg, #${index === 0 ? '10b981' : index === 1 ? '3b82f6' : index === 2 ? '22c55e' : 'eab308'}, #${index === 0 ? '14b8a6' : index === 1 ? '6366f1' : index === 2 ? '16a34a' : 'f59e0b'})`,
                        borderRadius: '50%',
                        marginRight: '0.75rem',
                        flexShrink: '0'
                      }}></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Timeline */}
      <div style={{
        marginTop: '4rem',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 94, 0, 0.2)',
        borderRadius: '20px',
        padding: '3rem',
        backdropFilter: 'blur(10px)'
      }}>
        <h3 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, #FF5E00, #00B2FF)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Quick Implementation Timeline
        </h3>
        <p style={{
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.8)',
          marginBottom: '2rem',
          fontSize: '1.1rem'
        }}>
          From consultation to full deployment with measurable results in <span style={{ color: '#00B2FF', fontWeight: 'bold' }}>6 weeks</span>
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: isMobile ? '1rem' : '1.5rem'
        }}>
          {[
            { week: "Week 1", title: "Site Assessment & Planning", details: "Requirements gathering, site survey, baseline KPIs" },
            { week: "Week 2-3", title: "Sensor Installation & Setup", details: "Hardware deployment, network configuration, connectivity" },
            { week: "Week 4-5", title: "System Testing & Calibration", details: "Data validation, performance tuning, integration testing" },
            { week: "Week 6+", title: "Go Live & Training", details: "User training, documentation, ongoing support" }
          ].map((phase, index) => (
            <div key={index} style={{
              padding: '1.5rem',
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#00B2FF',
                marginBottom: '0.5rem'
              }}>
                {phase.week}
              </div>
              <div style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '0.5rem'
              }}>
                {phase.title}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.4'
              }}>
                {phase.details}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        textAlign: 'center',
        marginTop: '3rem'
      }}>
        <button
          className="cta-button cta-primary mx-auto"
          style={{
            fontSize: '1.1rem',
            padding: '15px 40px'
          }}
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Start Your Implementation
        </button>
      </div>
    </section>
  );
}

export default HowItWorks;