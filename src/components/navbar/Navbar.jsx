import React, { useRef, useState } from 'react'
import './Navbar.css'
const Navbar = () => {

// for showing on hover
const [csoption,setcsoption]=useState(false)
const[interviewOption,setinterviewOption]=useState(false)
const[programing,setprograming]=useState(false)

 


// for making navbar responsive
  const [nav_display, setnav_display] = useState(false)

  const navbar = useRef(null)

  function toggle_navbar() {
    if (!nav_display) {
      navbar.current.style.display = 'flex'

      setnav_display(true)
    } else {
      navbar.current.style.display = 'none'
      setnav_display(false)

    }

  }


  
  return (
    <div>
      <div className='navbar_line' > </div>
      <div class='navbar_menu' onClick={toggle_navbar}><i class={`bi ${!nav_display ? 'bi-list' : 'bi-x'}`}></i> Navigation</div>
      <div className="navbar" ref={navbar}>
        <p>Striver's SDE Sheet</p>
        <p>Striver's DSA Course/Sheet</p>
        <p>Striver's DP Series</p>
        <p  className='cs_subj' onMouseOver={()=>setcsoption(true)} onMouseOut={()=>setcsoption(false)}>CS Subjects {csoption?<i class="bi bi-chevron-up"></i>:<i class="bi bi-chevron-down"></i> } 
          <div className='more_subj' style={{display:csoption?'flex':'none'}}>
            <p>SDE Core Sheet</p>
            <hr />
            <p>Operating System</p>
            <hr />
            <p>Computer Networks</p>
            
          </div>
        </p>
        <p onMouseOver={()=>setinterviewOption(true)} onMouseOut={()=>setinterviewOption(false)}>Interview Prep {interviewOption?<i class="bi bi-chevron-up"></i>:<i class="bi bi-chevron-down"></i> } 
        <div className='more_subj' style={{display:interviewOption?'flex':'none'}}>
            <p>Blind 75</p>
            <hr />
            <p>Striver Tree Series</p>
            <hr />
            <p>Striver's CP Sheet</p>
            <hr />
            <p>sourabh</p>
            <hr />
            <p>sourabh</p>
            <hr />
            <p>sourabh</p>
            
          </div>
        
        
        </p>
        <p  onMouseOver={()=>setprograming(true)} onMouseOut={()=>setprograming(false)}>Programming {programing?<i class="bi bi-chevron-up"></i>:<i class="bi bi-chevron-down"></i> } 
        <div className='more_subj' style={{display:programing?'flex':'none'}}>
            <p>sourabh</p>
            <hr />
            <p>sourabh</p>
            <hr />
            <p>sourabh</p>
            <hr />
            <p>sourabh</p>
            
          </div>
        
        </p>
        <p> Courses</p>
      </div>
    </div>
  )
}

export default Navbar