import React ,{ useContext,useState}from 'react';
import UserContext from '../context/UserContext';   
const Login = () => {
    const [username,setUsernmae]=useState('')

    const [password,setPassword]=useState('')
const {setUser} = useContext(UserContext)

    const handleSubmit =(e) =>{
       e.preventDefault()
       setUser({username, password})
    }



    return (
        <div>
             <h1>Login</h1>
             <input type='text' value ={username} 
             onChange={(e) => setUsernmae(e.target.value)}
             placeholder='usernmae'/>
             <input type='text' value ={password} 
             onChange={(e) => setPassword(e.target.value)}
             placeholder='password'/>
             <button onClick={handleSubmit}>Submit</button>
        </div>
        
    )
}

export default Login;
