import '../netflix-header/netflix-header.css';

export function NetflixHeader()
{
    return(
        <header className='d-flex justify-content-between p-4 text-white mx-2'>
            <div>
                <img src="..." alt="Brand logo" />
            </div>
            <div>
                <div className='input-group'>
                   <span className='bi bi-translate input-group-text'></span>
                   <select name="" id="" className='form-select'>
                         <option value="">Language</option>
                         <option value="">English</option>
                         <option value="">Hindi</option>
                         <option value="">Marathi</option>
                   </select>
                   <button className='btn btn-danger ms-3'>Sign-in</button>
                </div>
            </div>
        </header>
    );
}