import React from 'react'
import styles from './home.module.css'
import { Link } from 'react-router-dom'
import { useEffect ,useState } from 'react';
export default function Home() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });

  }

  return (
  <>
 

      {showButton && (
        <button onClick={scrollToTop} className={styles.backtotop}>
          &#8679;
        </button>
      )}


<div className={styles.ani}>..</div>
<div className={styles.sectionE}>
<div ClassName="container">
<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      
      <img src={require("./2.jpg")} className={`d-block w-100 ${styles.g}`}alt="..." />
    </div>
    <div className="carousel-item">
      <img src={require("./1.jpg")} className="d-block w-100" alt="..." />
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>


</div>

<div className="sectionF m-5">
<div className="container">
<div className="row">


<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 box1">
  <div className={styles.binner}>
    <a  className={styles.aa} href="#"> <img src={require("./cms_6.1.jpg")} className={styles.igg}  alt="img"   /></a>
  </div>
</div>

<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 box1">
<div className={styles.binner}>
    <a  className={styles.aa} href="#"> <img src={require("./cms_6.2.jpg")} className={styles.igg}  alt="img"   /></a>
  </div>
</div>




</div>
</div>

</div>

<div className="sectionF text-center m-5 ">
<div className="container">
 <div className="row">
<div className="">
  <ul className={`nav nav-tabs ${styles.tabsul}`} id="myTab" role="tablist">
    <li className={`nav-item ${styles.liT}`} role="presentation">
      <button className={`nav-link active ${styles.tabs}`} id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">New Arrival</button>
    </li>
    <li className={`nav-item ${styles.liT}`} role="presentation">
      <button  className={`nav-link  ${styles.tabs}`} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Bestseller</button>
    </li>
    <li className={`nav-item ${styles.liT}`} role="presentation">
      <button  className={`nav-link  ${styles.tabs}`} id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Featured Products</button>
    </li>
  </ul>
<div className="tab-content" id="myTabContent">
<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
<div className={`one w-100 d-flex  ${styles.m}`}>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/1.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/2.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/3.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>

<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/4.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>
</div>
<div className={`one w-100 d-flex  ${styles.m}`}>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/5.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/6.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/7.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>

<div className={`w-25  p-5 ${styles.w}`}>

 <img src={require("./pro/8.jpg")} className=" w-100 h-100" alt="img" />

     <div className={styles.products}>
       
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>

     </div>
     <div className={styles.new}>new</div>
</div>
</div>

 
 </div>
<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
<div className={`one w-100 d-flex  ${styles.m}`}>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/9.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/10.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/11.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>

<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/12.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>
</div>

<div className={`one w-100 d-flex  ${styles.m}`}>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/13.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/3.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/5.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>

<div className={`w-25  p-5 ${styles.w}`}>

 <img src={require("./pro/4.jpg")} className=" w-100 h-100" alt="img" />

     <div className={styles.products}>
       
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>

     </div>
     <div className={styles.new}>new</div>
</div>
</div>



 </div>
<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
<div className={`one w-100 d-flex  ${styles.m}`}>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/1.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/2.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>-10%</div>
</div>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/3.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>

<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/12.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>-10%</div>
</div>
</div>

<div className={`one w-100 d-flex  ${styles.m}`}>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/5.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>new</div>
</div>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/6.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>-10%</div>
</div>
<div className={`w-25  p-5 ${styles.w}`}>
 <img src={require("./pro/11.jpg")} className=" w-100 h-100" alt="img" />
     <div className={styles.products}>
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>
     </div>
     <div className={styles.new}>-10%</div>
</div>

<div className={`w-25  p-5 ${styles.w}`}>

 <img src={require("./pro/12.jpg")} className=" w-100 h-100" alt="img" />

     <div className={styles.products}>
       
       <h4 className={styles.hp}>suffered alteration</h4>
      <span className={styles.hs}>$432.00</span>
      <span className={styles.hss}>$480.00</span>

     </div>
     <div className={styles.new}>new</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>

<div className={`sectionD m-5 p-5 w-100  ${styles.d}`}>
<div className="container">
<div className={styles.Homes}>
<div className={styles.homeimg}>
<div className={styles.hometext}>
<h1 className={styles.h1}>New arrivals</h1>
<h2 className={styles.h22}>Radiant Triple Peptide Firming Serum</h2>
<h3 className={styles.h33}>up to 80% off</h3>
<p className={styles.pp}>These peptides are certain amino acids that rebuild connective tissue and encourage collagen production that's been damaged by the sun and in aging.</p>
<button className={styles.btn}>DISCOVER</button>
</div>

</div>

</div>
</div>
</div>
<div className="sectionC m-5">
<div className="container">
<div className="row">
<div className={styles.item}>
  <h2 className={styles.h2}>Our Blog Posts</h2>
  <pre className={styles.pre}>Do you want to present posts in the best way to higlight interesting moments of your blog?</pre>
</div>

<div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="slider">
  <div className="contet">
    <img src={require("./home1.jpg")} className="w-100" alt='home'/>
    <div className="im   text-center ">
      <h2 className={styles.h5}>Our Editors Share the 13 Best Interior Designers</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the ...</p>
      <button className={styles.btn}>read me</button>
    </div>
  </div>
</div>
    </div>
    <div className="carousel-item">
    <div className="slider">
  <div className="contet">
    <img src={require("./home3.jpg")} className="w-100" alt='home'/>
    <div className="im   text-center ">
      <h2 className={styles.h5}>Our Editors Share the 13 Best Interior Designers</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the ...</p>
      <button className={styles.btn}>read me</button>
    </div>
  </div>
</div>
    </div>
    <div className="carousel-item">
    <div className="slider">
  <div className="contet">
    <img src={require("./home2.jpg")} className="w-100" alt='home'/>
    <div className="im   text-center ">
      <h2 className={styles.h5}>Our Editors Share the 13 Best Interior Designers</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the ...</p>
      <button className={styles.btn}>read me</button>
    </div>
  </div>
</div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>




</div>
</div>
</div>
<div className="container">
<div className={styles.sectionB}>
<div className="row position-relative">
<div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require("./imageshome/1.jpg")} className=" w-25" alt="img" />
      <img src={require("./imageshome/2.jpg")} className=" w-25" alt="img" />
      <img src={require("./imageshome/3.jpg")} className=" w-25" alt="img" />
      <img src={require("./imageshome/4.jpg")} className=" w-25" alt="img" />
    </div>
    <div className="carousel-item">
    <img src={require("./imageshome/1.jpg")} className=" w-25" alt="img" />
      <img src={require("./imageshome/2.jpg")} className=" w-25" alt="img" />
      <img src={require("./imageshome/3.jpg")} className=" w-25" alt="img" />
      <img src={require("./imageshome/4.jpg")} className=" w-25" alt="img" />
    </div>
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
  </div>
</div>
<div className={styles.A}>
<div className="row d-flex justify-content-evenly ">
       
    <div className={`${styles.social}  ` }>
       <ul className={styles.ul}>
        <li className={styles.li}><i className={`fa-brands fa-facebook-f fa-2x`}></i></li>
        <li className={styles.li}><i className={`fa-brands fa-google-plus-g fa-2x`}></i></li>
        <li className={styles.li}><i className={`fa-brands fa-github fa-2x `}></i></li>
        <li className={styles.li}><i className={`fa-brands fa-instagram fa-2x `}></i></li>
       </ul>
       </div>
    
  <div className={`${styles.ft} `}>
        <div className="content   ">
          <h4 className={styles.h4}>Join Our Newsletter</h4>
        
        </div>
      </div>
<div className={styles.em}>
<form>
<div className="serac">
<input name="email"  className={styles.email} type="text" placeholder="Your email address"/>
<button className={styles.bb}>Sumbit</button>

</div>

</form>
</div>





    </div>
</div>

  </>
  )
}
