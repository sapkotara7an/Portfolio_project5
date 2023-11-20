import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import servicesData from './Datas/ServicesData';
import { FaArrowLeft } from 'react-icons/fa';





const ServiceDetail = () => {
    const navigate = useNavigate();
    const handleInfo = () => {
        
        navigate('/services');
      };

  let {pid} = useParams()
  let data=servicesData.find((a)=>a.id==pid)
  
  return (
  <>
     <button className='bg-success text-white px-2 mt-3 rounded-2' style={{marginLeft:'200px'}} onClick={handleInfo}><FaArrowLeft/> &nbsp;back</button>
    
    <div className='container  my-5 p-5 bg-light shadow  ' >
        <div className='row'>
        <div className='text-center mb-3 text-uppercase'><h2>{data.title}</h2> </div>
            <div className='col-lg-5'>
            
      
      
      <div className='text-center me-4 shadow-lg '><img className='w-100' src={data.image} alt={data.title} /></div>


            </div>

            <div className='col-lg-5 px-3 '>
            <div className='p-5'><p>{data.description}</p>
            
                
                
                
              </div>
            </div>

        </div>

      
      
     
      
    </div>
    </>
  );
};

export default ServiceDetail;
