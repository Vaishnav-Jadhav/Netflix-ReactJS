import '../netflix-register/netflix-register.css';

export function NetflixRegister()
{
    return(
        <>
         <div className='register-container'>
           <div>
              <p className="registerTitle text-light">Ready to watch? Enter your email to create or restart your membership.</p>
           </div>
           <div className='input-group d-flex justify-content-center'>
              <input type="text" className="form-control-lg" placeholder='Enter Your Email'/>
              <button className='btn btn-lg btn-danger ms-1'>Get started <span className="bi bi-chevron-right"></span></button>
           </div>
         </div>
        </>
    )
}