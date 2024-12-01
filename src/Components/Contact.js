import React from 'react';
import '../styless.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export const Contact = () => {
  return (
      <div className='container m-5 '>
        <div className='row '>
          <div className='col col-md-6'>
               <div className='con bg-dark d-flex flex-column  align-items-center'>
                  <h1 className='h3 text-white mt-2'>Contact <span className='text-info'>Me</span></h1>
                  <div className='contact-section d-flex flex-column'>
                      <input type='text' placeholder='Enter Your Name'/>
                      <input type='email' placeholder='Enter Your EmailId'/>
                      <input type='text' placeholder='Enter Your Subject'/>
                      <textarea cols={20} rows={5} placeholder='Enter Your Message'></textarea>
                      <div className='d-flex justify-content-center m-2'>
                           <button className='btn'>Send Message</button>
                      </div>
                  </div>
                </div>
            </div>
             <div className="col col-md-6">
          <div className="more-info m-5">
            <h2 className="text-center text-white mb-4">Find out <span className='text-info'> me</span></h2>
            <div className="info-item d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="text-info mr-2" />
              <span className="text-white mx-2">28,5th Street,Anbunagar,Aruppukottai.</span>
            </div>
            <div className="info-item d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faPhoneAlt} size="2x" className="text-info mr-2" />
              <span className="text-white mx-2">9080879678</span>
            </div>
            <div className="info-item d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-info mr-2" />
              <span className="text-white mx-2">prabhurprabhur063@gmail.com</span>
            </div>
          </div>
        </div>
            </div>
          </div>
        
     
        
      
  )
}

