import React from 'react'

export default function Login() {
  return (
    <>
    <div>
    <div className="head m-3  text-center  w-100">
      <h1 classname="reg my-5  ">login form</h1>
      </div>

    <div className="container">
      <form >
        <div className="all m-5 text-align-center">
        <div className="mb-3 ">
      <label htmlFor="email" className="form-label ">Enter your Email</label>
      <input   type="email"  name="email" className="form-control" id="email"  />
    </div>

    <div className="mb-3 ">
      <label htmlFor="passsword" className="form-label ">Enter your Passsword</label>
      <input    type="password"  name="passsword" className="form-control" id="passsword"  />
    </div>

<button className=' btn btn-secondary '>Register</button>

        </div>
  
</form>
      </div>

   

      </div>
</>
  )
}
