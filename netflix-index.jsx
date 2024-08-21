import '../netflix-index/netflix-index.css';
import { NetflixHeader } from '../netflix-header/netflix-header';
import { NetflixMain } from '../netflix-main/netflix-main';
import { NetflixRegister } from '../netflix-register/netflix-register';

export function NetflixIndex()
{
    return(
           <div className="bg-index">
               <div className="bg-shade">
                   <NetflixHeader/> 
                   <NetflixMain/>
                   <NetflixRegister/>
               </div>
           </div>  
    )
}