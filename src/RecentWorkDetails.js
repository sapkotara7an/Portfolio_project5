import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';
import WorkDatas from './Datas/RecentWorkDatas';





const RecentWorkDetails = () => {
    const navigate = useNavigate();
    const handleInfo = () => {
        
        navigate('/portfolio');
      };

  let {pid} = useParams()
  let data=WorkDatas.find((a)=>a.id==pid)
  
  return (
  <>
     <button className='bg-success text-white px-2 mt-3 rounded-2' style={{marginLeft:'100px'}} onClick={handleInfo}><FaArrowLeft/> &nbsp;back</button>
    
     <div className='container  my-5 p-5 bg-light shadow  ' >
        <div className='row px-5'>
        <div className='text-center mb-5 text-uppercase'><h2>{data.title}</h2> </div>
            <div className='col-lg-5'>
            
      
      
      <div className='text-center me-5 shadow-lg ' >
        <img className='w-100' src={data.image} alt={data.title}  /></div>


            </div>

            <div className='col-lg-5'>
            <div className= ' px-2'><p>{data.description}</p></div>
            
                
                
            
            </div>

        </div>

      
      
     
      
    </div>
    </>
  );
};

export default RecentWorkDetails;
