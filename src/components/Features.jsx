import { useState, useEffect } from 'react';

function Features() {
  const [activeTab, setActiveTab] = useState('kitchen');
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

  // Saral Tech Solutions data
  const features = {
    kitchen: {
      title: "Kitchen Appliances",
      description: "Smart IIoT solutions for modern kitchen appliances. Our technology enables real-time monitoring, predictive maintenance, and energy optimization for all kitchen equipment.",
      features: [
        "Mixer Grinder",
        "Toasters",
        "Induction Cooktop",
        "Chimney",
        "Electric Kettle",
        "Blender"
      ]
    },
    heating: {
      title: "Heating Appliances",
      description: "Advanced control systems for heating appliances with intelligent temperature management, safety features, and remote monitoring capabilities.",
      features: [
        "Water Heater / Geyser",
        "Room Heaters",
        "OFRs (Oil Filled Radiators)",
        "Smart thermostat integration",
        "Energy consumption tracking"
      ]
    },
    comfort: {
      title: "Comfort Appliances",
      description: "Enhance comfort and air quality with our smart solutions for climate control and cleaning appliances.",
      features: [
        "Air Cooler",
        "Air Purifier",
        "Vacuum Cleaner",
        "Electric Iron",
        "Automated scheduling"
      ]
    },
    battery: {
      title: "Battery Manufacturing",
      description: "Cutting-edge IIoT solutions for battery manufacturing with real-time quality control, performance monitoring, and predictive analytics.",
      features: [
        "UPS Battery",
        "E-Rickshaw Battery",
        "Automotive Battery",
        "Battery health monitoring",
        "Charge cycle optimization"
      ]
    },
    industrial: {
      title: "Industrial Manufacturing",
      description: "Complete Industry 4.0 solutions for manufacturing facilities with advanced automation, quality control, and production optimization.",
      features: [
        "Plastic Injection Molding",
        "HVAC Systems",
        "CNC Machines",
        "Industrial Presses",
        "Real-time production tracking"
      ]
    }
  };

  const tabItems = [
    { id: 'kitchen', label: 'Kitchen', icon: '🍳' },
    { id: 'heating', label: 'Heating', icon: '🔥' },
    { id: 'comfort', label: 'Comfort', icon: '💨' },
    { id: 'battery', label: 'Battery', icon: '🔋' },
    { id: 'industrial', label: 'Industrial', icon: '🏭' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="features" id="features">
      <h2 className="section-title">Our IIoT Solutions</h2>
      <p style={{
        textAlign: 'center',
        fontSize: '1.2rem',
        opacity: '0.8',
        maxWidth: '800px',
        margin: '0 auto 3rem',
        lineHeight: '1.6'
      }}>
        Comprehensive IIoT solutions across diverse industries. From kitchen appliances to industrial manufacturing, 
        we deliver smart, connected systems that optimize performance and drive innovation.
      </p>
      <div className="features-container">
        <div className="feature-tabs">
          {tabItems.map((tab) => (
            <div
              key={tab.id}
              className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
              data-tab={tab.id}
              onClick={() => handleTabClick(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </div>
          ))}
        </div>
        <div className="feature-content">
          {Object.entries(features).map(([key, feature]) => (
            <div
              key={key}
              className={`content-panel ${activeTab === key ? 'active' : ''}`}
              id={key}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul className="feature-list">
                {feature.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div style={{
                marginTop: '2rem',
                padding: '1rem',
                background: 'rgba(255, 94, 0, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 94, 0, 0.3)'
              }}>
                <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
                  <strong style={{ color: '#FF5E00' }}>Key Benefits:</strong> Real-time monitoring • Predictive maintenance • 
                  Energy optimization • Remote control • Data analytics • Scalable architecture
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
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
          Talk to an IIoT Expert
        </button>
      </div>
    </section>
  );
}

export default Features;