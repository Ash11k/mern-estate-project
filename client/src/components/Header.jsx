import {FaSearch} from 'react-icons/fa';
import {Link , useNavigate, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux'
import { useState , useEffect } from 'react';

export default function Header() {
  const {currentUser} = useSelector(state=> state.user);
const [searchTerm, setSearchTerm] = useState('');
const navigate = useNavigate();
const location = useLocation();

const handleSubmit = (e) => {
  e.preventDefault();
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('searchTerm',searchTerm);
  const searchQuery = urlParams.toString();
  navigate(`/search?${searchQuery}`);
};
useEffect(() => {
  const urlParams = new URLSearchParams(location.search);
  const searchTermFromUrl = urlParams.get('searchTerm');
  if(searchTermFromUrl){
    setSearchTerm(searchTermFromUrl)
  }
}, [location.search]);

  return (
    <header className= 'bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to = '/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Ashwini</span>
        <span className='text-slate-700'>Estate</span>
      </h1>
      </Link>
      <form onSubmit={handleSubmit} className="bg-slate-100 p-3 rounded-lg flex items-center">
        <input
         type ="text" 
        placeholder="search.." 
        className ='bg-transparent focus:outline-none w-24 sm:w-64' 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
<button>
 <FaSearch className='text-slate-600'/>
</button>
       
      </form>
      <ul className='flex gap-4'> 
        <Link to = '/'>
        <li className='hidden sm:inline text-slate-700 hover:underline' >Home</li>
        </Link>
        <Link to = '/About'>
        <li  className='hidden sm:inline text-slate-700 hover:underline' >
          About
          </li>
          </Link>
          <Link to = '/profile'>
          {currentUser ?.avatar ?(
             <img className="w-8 h-8 rounded-full object-cover" 
             src ={  currentUser.avatar + "?sz=200"} 
             alt = 'profile'
                />

          ) : ( <li  className=' text-slate-700 hover:underline' >SignIn</li>
          )}
        
        </Link>
      </ul>
      </div>
     </header>
  );
}
