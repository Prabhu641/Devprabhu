import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS
import '../contact1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <div className='container m-5'>
      <div className='row'>
        <div className='col col-md-6' data-aos="fade-up" data-aos-delay="200">
          <div className='con d-flex flex-column align-items-center'>
            <h1 className='h3 text-dark mt-2'>Contact <span className='text-info'>Me</span></h1>
            <form className='contact-section d-flex flex-column'>
              <input type='text' placeholder='Enter Your Name' required data-aos="zoom-in" />
              <input type='email' placeholder='Enter Your EmailId' required data-aos="zoom-in" />
              <input type='text' placeholder='Enter Your Subject' required data-aos="zoom-in" />
              <textarea cols={20} rows={5} placeholder='Enter Your Message' required data-aos="zoom-in" />
              <div className='d-flex justify-content-center m-2'>
                <button type='submit' className='btn' data-aos="fade-up" data-aos-delay='20'>Send Message</button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column with contact info */}
        <div className="col col-md-6" data-aos="fade-left" data-aos-delay="300">
          <div className="more-info m-5">
            <h2 className="text-center text-dark mb-4">Find out <span className='text-info'>me</span></h2>
            <div className="info-item d-flex align-items-center mb-3" data-aos="fade-up" data-aos-delay="500">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="text-info mr-2" />
              <span className="text-dark mx-2">28,5th Street, Anbunagar, Aruppukottai.</span>
            </div>
            <div className="info-item d-flex align-items-center mb-3" data-aos="fade-up" data-aos-delay="600">
              <FontAwesomeIcon icon={faPhoneAlt} size="2x" className="text-info mr-2" />
              <span className="text-dark mx-2">9080879678</span>
            </div>
            <div className="info-item d-flex align-items-center mb-3" data-aos="fade-up" data-aos-delay="600">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-info mr-2" />
              <span className="text-dark mx-2">prabhurprabhur063@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
