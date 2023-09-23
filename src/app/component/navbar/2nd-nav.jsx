import React from 'react'
import './NavBar.css'
import Imaga from '..//IMAGES/Property 1=Default.svg'
import Image from 'next/image'

const Navbar = () => {
  return (



    <div className="container">
      <nav className="navbar navbar-expand-lg">

        <Image src={Imaga} className='nameee' />
        <a className="navbar-brand " href="#">

        </a>
        <button
          className="navbar-toggler text-white buttn"
          type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span> </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li>
              <a href="#" className="nav-clour nav-link text-white px-4 ">
                Collection</a></li>
            <li>
              <a href="#" className="nav-clour nav-link text-white px-4">
                Community </a> </li>
            <li>
              <a href="#" className="nav-clour nav-link text-white px-4">
                create </a> </li>
            <li>
              <a href="#" className="nav-clour nav-link text-white px-4">
                About </a>  </li>
          </ul>


          <div class="double-border-button-1">
            <button class="home">Sign In</button>
          </div>

          <h3 className='text-white sign px-5 mt-4'>Sign-up</h3>


        </div>





      </nav>
    </div>

  )
}
export default Navbar