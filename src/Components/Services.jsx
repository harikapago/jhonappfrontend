import React, { useState } from 'react';
import "./styles/services.css";
import img1 from "../assets/tv1.jpg";
import img2 from "../assets/tv2.jpg";
import img3 from "../assets/tv3.jpg";
import img4 from "../assets/tv4.jpg";
import img5 from "../assets/tv5.jpg";

const servicesData = [
  {
    id: 1,
    name: 'TV Repair',
    description: 'Television Technicians operate, install, modify, repair and maintain closed-circuit or broadcast television equipment; monitor the visual and audio performance of equipment; diagnose equipment failures and correct malfunctions; ',
    imageUrl: img1,
  },
  {
    id: 2,
    name: 'Screen Change',
    description: 'Television Technicians operate, install, modify, repair and maintain closed-circuit or broadcast television equipment; monitor the visual and audio performance of equipment; diagnose equipment failures and correct malfunctions; ',
   
    imageUrl: img2,
  },
  {
    id: 3,
    name: 'Tube connection',
    description: 'Television Technicians operate, install, modify, repair and maintain closed-circuit or broadcast television equipment; monitor the visual and audio performance of equipment; diagnose equipment failures and correct malfunctions; ',
   
    imageUrl: img3,
  },
  {
    id: 4,
    name: 'TV Repair',
    description: 'Television Technicians operate, install, modify, repair and maintain closed-circuit or broadcast television equipment; monitor the visual and audio performance of equipment; diagnose equipment failures and correct malfunctions; ',
    imageUrl: img1,
  },
  {
    id: 5,
    name: 'Screen Change',
    description: 'Television Technicians operate, install, modify, repair and maintain closed-circuit or broadcast television equipment; monitor the visual and audio performance of equipment; diagnose equipment failures and correct malfunctions; ',
   
    imageUrl: img2,
  },
  {
    id: 6,
    name: 'Tube connection',
    description: 'Television Technicians operate, install, modify, repair and maintain closed-circuit or broadcast television equipment; monitor the visual and audio performance of equipment; diagnose equipment failures and correct malfunctions; ',
   
    imageUrl: img3,
  },
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(servicesData[0]); // Set the default selected service

    const handleServiceClick = (service) => {
      setSelectedService(service);
    };

  return (
    <div style={{padding:"15px",marginTop:"4rem",width:"100%"}}>
        <h2> Our Services</h2>
    <div className="" style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"2rem"}}>
      <div className='ser1'>
        
        <ul>
          {servicesData.map((service) => (
            <li 
            className={`servicebtn ${selectedService === service ? 'selected' : ''}`} // Apply 'selected' class to the selected service
            key={service.id}
            onClick={() => handleServiceClick(service)}
            >
              {service.name}
            </li>
          ))}
        </ul>
      </div>
      <div style={{paddingTop:""}} className='ser2'>
        {selectedService ? (
          <div>
            <h3>{selectedService.name}</h3>
            <p className='serdes'>{selectedService.description}</p>
            <img
              src={selectedService.imageUrl}
              alt={selectedService.name}
              className='serviceimg'
              style={{boxShadow:"2px 2px 2px 2px black",borderRadius:"10px"}}
            />
            <button className='btn  d-block servbtn' style={{marginTop:"15px",}}>Call Us:79957 16742</button>
          </div>
        ) : (
          <p>Select a service to view details.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Services;
