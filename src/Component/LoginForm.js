// from validation
import React,{useState} from 'react'

const LoginForm = () => {
    const initialValue = {userName:"", email:"", password :""};
    const [formData,setformData] = useState(initialValue);
    const handleChange = (e)=>{
       console.log(e.target);
       const {name,value} = e.target;
    
       setformData({...formData, [name]:value});
   };
   const  handleSubmit = (e)=>{
         e.preventdefault();
   };
  return (
    <div>
       <pre>{JSON.stringify(formData,undefined,2)}</pre>
        <form onSubmit={handleSubmit}>
               <h1>Login Form</h1>
            <div>
                <label>Username</label>
                <input type="text" name="username" placeholder='Enterusername' value={formData.userName} onChange={handleChange} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" placeholder='Enteremail'value={formData.email} onChange={handleChange}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" placeholder='Enterpassword'value={formData.password} onChange={handleChange}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
     </div>
  )
}

export default LoginForm