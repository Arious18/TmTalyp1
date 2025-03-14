import React from 'react';
import './flag.css';
import image from '../../../public/Home-Images/TKM_Flag.png';

const servicesData = [
    {
        id: 1,
        title: 'Service 1',
        description: 'Short description of Service 1',
        image: '/Home-Images/TKM_Flag.png' // Use a relative URL here
    },
    {
        id: 2,
        title: 'Service 2',
        description: 'Short description of Service 2',
        image: '/Home-Images/TKM_Flag.png'
    },
    {
        id: 3,
        title: 'Service 3',
        description: 'Short description of Service 3',
        image: '/Home-Images/TKM_Flag.png'
    },
    {
        id: 4,
        title: 'Service 4',
        description: 'Short description of Service 4',
        image: '/Home-Images/TKM_Flag.png'
    },
    {
        id: 5,
        title: 'Service 5',
        description: 'Short description of Service 5',
        image: '/Home-Images/TKM_Flag.png'
    },
    {
        id: 6,
        title: 'Service 6',
        description: 'Short description of Service 6',
        image: '/Home-Images/TKM_Flag.png'
    }
];

function Flag() {
    return (
        <div className="fl-services-container">
            <div className="fl-services-grid">
                {servicesData.map(service => (
                    <a
                        key={service.id}
                        href="#"
                        className="fl-service-card"
                        style={{ backgroundImage: `url(${service.image})` }}
                    >
                        <div className="fl-overlay"></div>
                        <div className="fl-content">
                            <h3 className="fl-title">{service.title}</h3>
                            <p className="fl-description">{service.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Flag;