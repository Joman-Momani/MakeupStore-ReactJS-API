import React from 'react';

import styles from './footer.module.css';
export default function Footer() {
  return (
    <>
<footer>
<div className="footertop p-5">
<div className="container">
<div className="row ">
<div className={`${styles.iner} d-flex justify-content-between`}>
<div clssName={`col-lg-4 col-md-4 col-sm-12 col-xs-12   `}>
<div className={` box d-block ${styles.box}`}>
<div ClassName={styles.icon}>
<i className={`fa-solid fa-phone fa-2x  ${styles.i}`}></i>
<span className={styles.span}>Do You have  Question</span>
</div>
<div className={styles.text}>+0123 456 789</div>
</div>


</div>
<div clssName="col-lg-4 col-md-4 col-sm-12 col-xs-12  ">
<div className={` box d-block ${styles.box}`}>
<div ClassName={styles.icon}>
<i className={`fa-solid fa-envelope fa-2x  ${styles.i}`}></i>
<span className={styles.span}>Do You have  Question</span>
</div>
<div className={styles.text}>Contact@sagitta.com</div>
</div>


</div>
<div clssName="col-lg-4 col-md-4 col-sm-12 col-xs-12  ">
<div className={` box d-block ${styles.box}`}>
<div ClassName={styles.icon}>
<i className={`fa-solid fa-globe fa-2x  ${styles.i}`}></i>
<span className={styles.span}>Do You have  Question</span>
</div>
<div className={styles.text}>support@sagitta.com</div>
</div>


</div>
</div>
</div>    
</div>
</div>

<div  className={styles.footerM}>
  <div className={`container ${styles.container}` } >
    <div classname="row "   className={styles.row}>  
      <div classname="footer-col  " className={styles.footercol} >
        <h3 className={styles.h3}>EXTRAS</h3>
        <ul>
          <li className={styles.li}>
            <a  className={styles.a} href="#">BRAND</a> 
            <a className={styles.a}  href="#">pages</a> 
            <a className={styles.a}   href="#">section</a> 
            <a className={styles.a}  href="#">documanation</a>
            <a className={styles.a}   href="#">Spefcials</a> 
          </li>
        </ul>
      </div>
      <div className={styles.footercol} >
        <h3 className={styles.h3}>PRODUCTS</h3>
        <ul>
          <li className={styles.li}>
            <a className={styles.a}  href="#">price drop</a> 
            <a className={styles.a}   href="#">pages</a> 
            <a className={styles.a}   href="#">section</a> 
            <a className={styles.a}   href="#">documanation</a>
            <a className={styles.a}   href="#">sitemp</a> 
          </li>
        </ul>
      </div>
      <div  className={styles.footercol} >
        <h3 className={styles.h3} >OUR COMPANY</h3>
        <ul>
          <li className={styles.li}>
            <a className={styles.a}  href="#">dlivary</a> 
            <a className={styles.a}  href="#">pages</a> 
            <a className={styles.a}  href="#">section</a> 
            <a className={styles.a}  href="#">documanation</a>
            <a className={styles.a}   href="#">changelog</a> 
          </li>
        </ul>
      </div>
      <div  className={styles.footercol}>
        <h3 className={styles.h3} >YOUR ACCOUNT</h3>
        <ul>
          <li className={styles.li}>
            <a className={styles.a}  href="#">Adresses</a> 
            <a className={styles.a}  href="#">pages</a> 
            <a className={styles.a}  href="#">section</a> 
            <a className={styles.a}  href="#">documanation</a>
            <a className={styles.a}   href="#">changelog</a> 
          </li>
        </ul>
      </div>
    </div>
    </div>
</div>



<div className="footerbottom">
 <div className="container">
<div className="ineerb p-4 w-100    ">
<div className="row">
<div className={`col-lg-6 col-md-6 col-xs-12 ${styles.po}`}>
  <div className={styles.para}>Copyright</div> 
  <div className={styles.pos}>Posthemes</div>
  <div className={styles.para}>.All Rights Reserved</div> 
</div>
<div className='col-lg-6 col-md-6 col-xs-12'>
 <div className={`imgc w-100  ms-5 ps-5 d-flex  justify-content-end ${styles.botm} `}>
  <img src={require("./payment.png")} classNmae="w-100"   alt='imgcard' />
  </div> 
</div>

</div>
</div>


  </div>   
</div>

    
    
    
</footer>
    </>
  )
}
