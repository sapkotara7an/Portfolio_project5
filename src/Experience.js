import React from 'react';
import experienceData from './Datas/ExperienceData';



function Experience() {
  return (
    <>
      <section className='experience'>
        <div className="content mb-3">
          <h2><center>WORK EXPERIENCE & SKILL</center></h2>
        </div>
        <div className="timeline">
          {experienceData.map((experience, index) => (
            <div key={index} className={`container1 ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="content">
                <h2>{experience.title}</h2>
                <p>{`${experience.company}, ${experience.year}`}</p>
                <p>{experience.description}</p>
              </div>
            </div>
          ))}
          <div className="container1 right">
            <div className="content">
              <h2>Journey Began!</h2>
              <p>The journey began with C &C++. Here are some Courses I have learned along the learning path.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
