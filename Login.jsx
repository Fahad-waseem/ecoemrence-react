import React,{useState} from 'react'
import { Link } from 'react-router-dom'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
    const[email,setEmail]=useState('' )
    const[password,setPassword]=useState('' )
const [errorMsg,setErrorMsg]=useState('')
const [successMsg,setSuccessMsg]=useState('')

const handleLogin=(e)=>{
    e.preventDefault()
    console.log(email,password)



    //   for  sign in
    //   const auth = getAuth();
    //   signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       // Signed in 
    //       const user = userCredential.user;
    //       // ...
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //     });


    // db.createUserWithEmailAndPassword(user).then((Credentials)=>{
    //     console.log(Credentials)
    // }).catch((error)=>{
    //     setErrorMsg(error.errorMsg)
    // })

}

  return (
    <div className='container'>
        
        <br />
        <br />
<h1>Login</h1>
<hr />
<form className='form-group' autoComplete='off' onSubmit={handleLogin}> 

<label>Email Address</label>
<input type="email " className='form-control' required
onChange={(e)=>setEmail(e.target.value)} value={email}
/>
<br />
<label>Password</label>
<input type="password" className='form-control' required
onChange={(e)=>setPassword(e.target.value)} value={password}

/>
<br />


<div className='btn-box'>
    <span>Don't have an acount
        <Link to="/Signup "> Sign up</Link>
    </span> <br />
    <button type='submit' className='btn btn-success btn-md '>Login</button>
</div>

</form>
    </div>
  )
}
