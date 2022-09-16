import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

export default function Navbar() {

  const [fix,setfix]=useState(false);

  function setFixed(){
  if(window.scrollY>=50){
  setfix(true);
  }else{
    setfix(false);
  }
  }
  window.addEventListener("scroll",setFixed);







  return (

   <>
<div className={fix ? `${styles.navblue}` :`${styles.navhide}` }>
<nav className="navbar navbar-expand-lg navbar-light bg-white ">
  <div className="container-fluid  d-flex text-center">
    <a className={`navbar-brand ${styles.navtre} `} href="#">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className={`nav-link active  ${styles.navtre}`} aria-current="page" href="#">Legeal Note</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link   ${styles.navtre}`} href="#">secure payment</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link   ${styles.navtre}`}   href="#">Delivary</a>
        </li>
        <li className="nav-item dropdown">
          <a className={`nav-link dropdown-toggle ${styles.navtre}`} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            custom block
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </div> 

<header className={styles.header}>
<div className={`${styles.headerlist}`}>
    <div className={styles.logo} ><Link to="#"><img src={require("./logo.jpg")} alt='logo' /></Link></div>
    <span className={styles.p} >Order online or call us : (1800) 000 8808</span>
    <div class="dropdown  ">
  <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    English
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">English</a></li>
    <li><a class="dropdown-item" href="#">Francia</a></li>
  </ul>
</div>
<div class="dropdown ms-2">
  <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    EUR $
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">EUR $</a></li>
    <li><a class="dropdown-item" href="#">USD $</a></li>
  </ul>
</div>
</div>
</header>


<nav className={`navbar navbar-expand-lg ${styles.nav} p-3`} >
  <div className="container">
  <div className="btn-group">
  <button className={`btn  btn-lg dropdown-toggle ${styles.drop}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Vertical Menu 
  </button>
  <ul className={`dropdown-menu ${styles.ul}`}>
    <li className={styles.li}> <Link className={styles.menu} to="#"> Featured </Link></li>
    <li className={styles.li} ><Link className={styles.menu} to="#" >lips </Link> </li>
    <li className={styles.li} > <Link className={styles.menu} to="#" >eye </Link> </li>
  </ul>
</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 ms-5">
        <li className="nav-item ms-5  ml-5 fs-5">
          <Link className="nav-link " to="Home" >Home</Link>
        </li>
        <li className="nav-item ms-5 fs-5 ">
          <Link className="nav-link " to="About" >About</Link>
        </li>
        <li className="nav-item ms-5 fs-5 ">
          <Link className="nav-link " to="Product" >Products</Link>
        </li>
        <li className="nav-item ms-5 fs-5 ">
          <Link className="nav-link " to="Delivary" >Delivary</Link>
        </li>
      </ul>

      </div>
  </div>
  </nav>
   
   
   
   
   
   
   
   </>
  )
}
