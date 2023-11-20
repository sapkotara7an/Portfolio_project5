import React from 'react'



function Contact() {
  return (
    <>
   
    <section className='contactpage_detail'>
    <div className='container'>
        <div className='row contact_page'>
            <div className='col-lg-6 contact mb-4'>
                <h1>Get In Touch With Us</h1>
                <p className='py-5'>-orem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/> 
eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='col-lg-6 '>
  <div className=' get_intouch_form'>
  
 

<div className='name'> Name<br/><input typeof='text'placeholder='Enter name'/></div>
<div className='email'> Email<br/><input typeof='text'placeholder='Enter Email'/></div>
<div className='subject'> Subject<br/><input typeof='text'placeholder='Enter Subject'/></div><br/>
<textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Enter message here.."></textarea><br/>
<button className='btn'>Submit</button>

</div>

</div>
        </div>
    </div>
    </section>
    
    </>
  )
}

export default Contact