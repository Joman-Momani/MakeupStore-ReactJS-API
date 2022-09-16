import React from 'react'

export default function Register() {
  return (
    <>
    
    <div>
    <div className="head m-3  text-center  w-100">
      <h1 classname="reg my-5  ">Registration form</h1>
      </div>
  
    <div className="container">
  <form >
    <div className="mb-3">
      <label htmlFor="first_name" className="form-label ">first_name</label>
      <input    type="text"  name="first_name" className="form-control" id="firstname"  />
    </div>

    <div className="mb-3">
      <label htmlFor="last_name" className="form-label ">last_name</label>
      <input   type="text"  name="last_name" className="form-control" id="last_name"  />
    </div>

    <div className="mb-3">
      <label htmlFor="age" className="form-label ">age</label>
      <input  type="number"  name="age" className="form-control" id="age"  />
    </div>

    <div className="mb-3">
      <label htmlFor="email" className="form-label ">email</label>
      <input  type="email"  name="email" className="form-control" id="email"  />
    </div>

    <div className="mb-3">
      <label htmlFor="passsword" className="form-label ">passsword</label>
      <input   type="password"  name="passsword" className="form-control" id="passsword"  />
    </div>

<div className="button  ">
<button className=' btn btn-secondary mb-2  '>Register</button>
</div>

  </form>
</div>
    
    
</div>
    </>
  )
}
