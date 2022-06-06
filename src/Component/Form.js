import React,{useState} from 'react'

 const Form = () => {
   const[email,setEmail]=useState("");
   const [password,setPassword] = useState("");
   const [data,setData] = useState([]);
   const emailHandler = (e)=>{
     setEmail(e.target.value);
   }
   const passwordHandler = (e)=>{
     setPassword(e.target.value)
   }
  const submitHandler = (e)=>{
    e.preventDefault();
    const newData ={email:email,password:password};
     setData([...data,newData]);
   }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Basic Form</h1>
        <div>
          <label>Email</label>
          <input type="text" placeholder='Enter Email' value={email} onChange={emailHandler} />
        </div>
        <div>
          <label>Password</label>
           <input type="password" placeholder='Enter Password' value={password} onChange={passwordHandler} />
        </div>
         <button type="submit">Login</button>
      </form>
      <div>
        {
          data.map((e)=>{
            return(
              <div>
                  <h1>{ e.email}</h1>
                  <p>{ e.password}</p>
               </div>
               );
          })
        }
      </div>
    </div>
  )
}
export default Form
