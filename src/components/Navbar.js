import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='header'>
      <nav className='nav d-flex flex-column'>
        <div className='navbar-logo'>
          <h4>Menu</h4>
          <span className='burger'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></span>
        </div>
        <div className='search-box'>
          <input type="search" className='searchbar' placeholder='Search' />
        </div>


       
        
      


        <div className='task4box '>
        <div><Link to={"/"} style={{textDecoration:"none",color:"white"}}>Dashboard</Link></div>
        <div><Link to={"/students"} style={{textDecoration:"none",color:"white"}}>Students</Link></div>
        <div> <Link to={"/course"} style={{textDecoration:"none",color:"white"}}>Courses</Link></div>
        <div><Link to={"/attend"} style={{textDecoration:"none",color:"white"}}>Attendance</Link></div>
        <div  style={{textDecoration:"none",color:"white"}}>Settings</div>
        <div className='sign-out'  style={{textDecoration:"none",color:"white"}}>Sign Out</div>
          



        </div>








      </nav>

    </div>
  )
}

export default Navbar