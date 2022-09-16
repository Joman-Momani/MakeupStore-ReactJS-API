import axios from 'axios';
import { Mediacontext } from '../MContext/Context';
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './product.module.css';


export default function Product() {

  let {product}=useContext(Mediacontext);
  let {women}=useContext(Mediacontext);
  let {jew}=useContext(Mediacontext);
  return (
   <>
<div className="row">
<div className={styles.brdro}  >
<h2 className={`mt-3 ${styles.h2}`}> Men Clothing </h2>
</div>
{product.map((product,index)=>
<div className="product mt-5 text-center col-md-3 col-12 " >
  <div className= {styles.item}>
    
  <img className={` ${styles.img}`}  src={product.image}   alt="" />

<div className="start">
<div className={styles.i}>
  <i className="fa-solid fa-star" />
  <i className="fa-solid fa-star" />
  <i className="fa-solid fa-star" />
  <i className="fa-solid fa-star" />
</div>

</div>
<h5 className={styles.h5}>{product.title?product.title:'no name'}</h5>
<h4 className={styles.h3}>{product.price+"$"}</h4>
<button className={`btn ${styles.bb}`}>Buy now</button>
  </div>
</div>
  )}
</div>

<div className="row">
<div className={styles.brdro}  >
<h2 className={styles.h2}> Women Clothing</h2>
</div>
{women.map((women,index)=>
<div className="product mt-3 text-center  col-md-4 col-12 " >
  <div className= {styles.item}>
  <img className={` ${styles.img}`}  src={`${women.image}`}   alt="" />
<div className="start">
<div className={styles.i}>
  <i className="fa-solid fa-star" />
  <i className="fa-solid fa-star" />
  <i className="fa-solid fa-star" />
  <i className="fa-solid fa-star" />
</div>

</div>
<h5 className={styles.h5}>{women.title?women.title:'no name'}</h5>
<h4 className={styles.h3}>{women.price+"$"}</h4>
<button className={`btn ${styles.bb}`}>Buy now</button>
  </div>

</div>
 )}
</div>
   

   
<div className="row">
<div className={styles.brdro}  >
<h2 className={styles.h2}> Jewelry </h2>
</div>
{jew.map((jew,index)=>
<div className="product mt-3 text-center  col-md-4 col-12 " >
  <div className= {styles.item}>
  <img className={styles.img}  src={jew.image}   alt="" />
<div className="start">
<div className={styles.i}>
  <i className="fa-solid fa-star" />
  <i className="fa-solid fa-star" />
  <i className="fa-solid fa-star" />
  <i className="fa-solid fa-star" />
</div>

</div>
<h5 className={styles.h5}>{jew.title?jew.title:'no name'}</h5>
<h4 className={styles.h3}>{jew.price+"$"}</h4>
<button className={`btn ${styles.bb}`}>Buy now</button>
  </div>

</div>
 )}
</div>







   
   </>
  )
}

