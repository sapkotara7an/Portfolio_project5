import React from 'react'
import { Link } from 'react-router-dom'
import WorkDatas from './Datas/RecentWorkDatas'


function Portfolio() {
  return (
    <>
 
 <div className='banner3 container-fluid px-5'>
      <div className='py-3 title text-center'>
        <h1 className='text-uppercase'>Our Recent Work</h1>
        <p>
          -Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='row recent_work gap-5'>
        {WorkDatas.map((work) => (
          <div className='col-lg-3 col-md-8 col-sm-12' key={work.id}>
            <Link  className = 'text-black mouse-over-success' to={`/recent_work/${work.id}`}>
            <div className='col_box'>
              <div>
                <h4>{work.title}</h4>
                <p>Responsive Page Designs</p>
              </div>
              <div className='project_img'>
                <img src={work.image} width='300px' alt={work.title} />
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>


    </>
  )
}

export default Portfolio