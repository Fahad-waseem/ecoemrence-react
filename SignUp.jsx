import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import {  auth,db} from './Config/Config'
// import {useHistory} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export const SignUp = () => {

    const [errorMsg,setErrorMsg]=useState('')
    const [successMsg,setSuccessMsg]=useState('')
//   const history=useHistory()    

  const [user,setUser]=useState({
name:"",
email:"",
password:"",
cnfPass:"",
country:"",
city:"",
no:"",
  })


  const handleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value);
  
    setUser({ ...user, [name]: value })
  }
  const handleSignup=async(e)=>{
      e.preventDefault();
    // console.log(user)






    const auth = getAuth();
    createUserWithEmailAndPassword(auth, user.email, user.password,user.name,user.country,user.city,user.no)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setSuccessMsg('sign up success')
        // user.email('');
        // user.password('');
        // user.name('');
        // user.country('');
        // user.city('');
        // user.no('');
        // setErrorMsg('');
        
        // setTimeout(() => {
        //     setSuccessMsg('')
        //    history.push('./login')
        // }, 3000);
        // ...
      })
      .catch((error) => {
          setErrorMsg(error.message)
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });



  }
  
    return (
    <div className='container'>
        <br />
        <br />
<h1>Sign Up</h1>
<hr />
{successMsg &&<>
<div className='success-msg'>{successMsg}</div>
<br />
</>}
<form className='form-group' autoComplete='off' onSubmit={handleSignup}> 
<label>Full Name</label>
<input onChange={handleInputs} value={user.name}  name='name'  type="text" className='form-control' required />
<br />
<label>Email</label>
<input onChange={handleInputs} value={user.email}  name='email' type="email " className='form-control' required />
<br />
<label>Password</label>
<input onChange={handleInputs} value={user.password}  name='password' type="password" className='form-control' required />
<br />
<label>Confirm Password</label>
<input onChange={handleInputs} value={user.cnfPass}  name='cnfPass' type="password" className='form-control' required />
<br />
<label>Country</label>
<input onChange={handleInputs} value={user.country}  name='country' type="country" className='form-control' required />
<br />
<label>City</label>
<input onChange={handleInputs} value={user.city}  name='city' type="city" className='form-control' required />
<br />
<label>Mobile No</label>
<input onChange={handleInputs} value={user.no}  name='no' type="number" className='form-control' required />
<br />
<div className='btn-box'>
    <span>Already have an acount
        <Link to="/login"> Login</Link>
    </span> <br />
    <button type='submit' className='btn btn-success btn-md '>Sign Up</button>
</div>

</form>
{errorMsg &&<>
<div className='error-msg'>{errorMsg}</div>
<br />
</>}

        </div>
  )
}
