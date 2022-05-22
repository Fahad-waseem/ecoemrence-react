import { color } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='navbar'>
     

        {/* <Link to="/Home">home</Link> */}


        <div className="leftSide">
  <Link to={"/Home"}>
  <img  className='a' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4e5k7UYvU7R2dVtYvaks-wwGuz88WRhWbg&usqp=CAU" 
  style={{widh:'400px',height:'200px'}}
  alt="eceomernce" />
  </Link>
</div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light s" >


<Link style={{marginLeft:'900px',textDecoration:'none', color:'orange' ,fontSize:'bolder'}} to="/signup">Signup</Link>
<Link style={{marginLeft:'160px',textDecoration:'none',justifyContent:'center',color:'orange' ,position:'center'}} to="/login">Login</Link>
</nav>




<div className='hero'>

</div>

    </div>
  )
}
