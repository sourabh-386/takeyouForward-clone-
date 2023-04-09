import React, { useRef, useState } from 'react'
import './Navbar.css'
const Navbar = () => {

  const [nav_display,setnav_display]=useState(false)

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
      <div class='navbar_menu' onClick={toggle_navbar}><i class={`bi ${!nav_display?'bi-list':'bi-x'}`}></i> Navigation</div>
      <div className="navbar" ref={navbar}>
        <p>Striver's SDE Sheet</p>
        <p>Striver's DSA Course/Sheet</p>
        <p>Striver's DP Series</p>
        <p>CS Subjects  <i class="bi bi-chevron-down"></i></p>
        <p>Interview Prep  <i class="bi bi-chevron-down"></i></p>
        <p>Programming  <i class="bi bi-chevron-down"></i></p>
        <p> Courses</p>
      </div>
    </div>
  )
}

export default Navbar