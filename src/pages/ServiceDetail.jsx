import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ServiceDetailPage from '../components/ServiceDetailPage';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const serviceIndex = parseInt(id, 10);

  const handleBack = () => {
    navigate('/services');
  };

  return (
    <div>
      {!isNaN(serviceIndex) ? (
        <ServiceDetailPage serviceIndex={serviceIndex} onBack={handleBack} />
      ) : (
        <div style={{ paddingTop: '96px', padding: '40px', color: '#ff4d4d', textAlign: 'center' }}>
          <h2>Invalid Service ID</h2>
          <button onClick={handleBack} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
