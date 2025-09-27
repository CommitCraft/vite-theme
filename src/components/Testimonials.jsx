import { useState, useEffect } from 'react';

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      position: 'Plant Manager',
      company: 'Manufacturing Solutions Ltd',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Saral Technologies transformed our entire facility with their comprehensive IIoT and HVAC solutions. We\'ve seen a 30% increase in efficiency and significantly reduced energy costs.',
      details: 'The integrated approach covering IIoT, HVAC, and electrical systems resulted in ₹5 lakhs monthly savings.'
    },
    {
      name: 'Priya Patel',
      position: 'Facilities Director',
      company: 'Commercial Complex Pvt Ltd',
      image: 'https://images.pexels.com/photos/3782806/pexels-photo-3782806.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The smart building automation with integrated HVAC and electrical systems has revolutionized our operations. Energy consumption reduced by 40% with improved comfort levels.',
      details: 'The building management system with real-time monitoring helped achieve LEED certification.'
    },
    {
      name: 'Amit Kumar',
      position: 'Operations Head',
      company: 'Industrial Park Ltd',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Outstanding support team and cutting-edge technology. The comprehensive safety and electrical systems have ensured zero incidents and improved compliance.',
      details: 'The integrated safety systems with fire detection prevented a major incident, saving ₹50 lakhs.'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="features" id="testimonials">
      <h2 className="section-title">What Our Clients Say</h2>
      <p style={{
        textAlign: 'center',
        fontSize: '1.2rem',
        opacity: '0.8',
        maxWidth: '800px',
        margin: '0 auto 3rem',
        lineHeight: '1.6'
      }}>
        Real results from real manufacturers who have transformed their operations with our comprehensive solutions.
      </p>

      {/* Testimonials Slider */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative'
      }}>
        <div style={{
          overflow: 'hidden',
          borderRadius: '20px'
        }}>
          <div style={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentSlide * 100}%)`
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{
                minWidth: '100%',
                padding: '3rem',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 94, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                {/* Client Image */}
                <div style={{
                  position: 'relative',
                  marginBottom: '2rem'
                }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid rgba(0, 178, 255, 0.3)'
                    }}
                  />
                </div>

                {/* Rating */}
                <div style={{
                  display: 'flex',
                  gap: '0.25rem',
                  marginBottom: '1rem'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote style={{
                  fontSize: '1.3rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.text}"
                </blockquote>

                {/* Details */}
                <div style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  padding: '1rem',
                  borderRadius: '10px',
                  borderLeft: '3px solid #00B2FF',
                  marginBottom: '2rem',
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  {testimonial.details}
                </div>

                {/* Client Info */}
                <div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#00B2FF',
                    marginBottom: '0.25rem'
                  }}>
                    {testimonial.name}
                  </h4>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '0.25rem'
                  }}>
                    {testimonial.position}
                  </p>
                  <p style={{
                    background: 'linear-gradient(45deg, #FF5E00, #00B2FF)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold'
                  }}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 94, 0, 0.3)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FF5E00',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 94, 0, 0.2)';
            e.target.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 94, 0, 0.3)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FF5E00',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 94, 0, 0.2)';
            e.target.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          ›
        </button>
      </div>

      {/* Dots Indicator */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: isMobile ? '0.3rem' : '0.5rem',
        marginTop: '2rem'
      }}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: isMobile ? '6px' : '12px',
              height: isMobile ? '6px' : '12px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentSlide ? '#00B2FF' : 'rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: index === currentSlide ? '0 0 10px rgba(0, 178, 255, 0.5)' : 'none'
            }}
          />
        ))}
      </div>

      {/* Stats Section */}
      <div style={{
        marginTop: '4rem',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: isMobile ? '1.5rem' : '2rem',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        {[
          { number: '98%', label: 'Client Satisfaction' },
          { number: '30%', label: 'Average Efficiency Gain' },
          { number: '24/7', label: 'Technical Support' },
          { number: '500+', label: 'Successful Deployments' }
        ].map((stat, index) => (
          <div key={index} style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 94, 0, 0.2)',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#00B2FF',
              marginBottom: '0.5rem'
            }}>
              {stat.number}
            </div>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1rem'
            }}>
              {stat.label}
            </div>
          </div>
        ))}
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
          Join Our Success Stories
        </button>
      </div>
    </section>
  );
}

export default Testimonials;