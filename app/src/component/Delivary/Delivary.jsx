import React from 'react'
import styles from './delivary.module.css'
export default function Delivary() {
  return (
    <>
    
    
    <div className={styles.wrapp}>
      <div className={`container ${styles.co}`}>
        <div className="row">
            <div className="content m-4 col-xs-12 col-sm-12 col-md-12">
                <div className="main m-4">
                <h1 className={styles.h1}>The page you are looking for was not found.</h1>
                </div>
           
            </div>
            <div className={` ${styles.sbrdr}`}>
             <h4>Sorry for the inconvenience.</h4>
             <p>Search again what you are looking for</p>
            </div>
          
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}
