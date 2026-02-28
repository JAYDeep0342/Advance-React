import React, { use, useEffect } from 'react'
import authservice from './appwrite/auth';
import { useDispatch } from 'react-redux';
import { login,logout } from './store/authSlice';
import Headers from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
console.log(import.meta.env.VITE_REACT_APP_APPWRITE_URL);
 const[loading,setLoading] = React.useState(true);
const dispatch = useDispatch();

useEffect(() => {
authservice.getCurrentUser().then((userData)=>{
  if(userData){
    dispatch(login({userData}));
  }else{
    dispatch(logout());
  }
})
.finally(()=>
  setLoading(false));
},[])


return ! loading?(
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
<Headers/>
<main>
{/* outlet */}
</main>
<Footer/>
    </div>
  </div>
):(
  <div>
    <h1>Loading...</h1>
  </div>
)
}

export default App
