import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {

  const [input, setInput] = new useState(
    {
      "name": "",
      "phone": "",
      "email": "",
      "password": "",
      "cnfpassword": ""
    }
  )
  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value })
  }

  const readValue = () => {
    if (input.password == input.cnfpassword) {


      let newInput = {
        "name": input.name,
        "phone": input.phone,
        "email": input.email,
        "password": input.password

      }
      // console.log(newInput)
      axios.post("http://localhost:3000/signup", newInput).then(
        (Response) => {
          console.log(Response.data)
          if (Response.data.status == "success") {
            alert("Registered successfully")

            setInput({"name": "",
              "phone": "",
              "email": "",
              "password": "",
              "cnfpassword": ""})
          } else {
            alert("Email id already exists")
            setInput({"name": "",
              "phone": "",
              "email": "",
              "password": "",
              "cnfpassword": ""})

          }
        }

      ).catch(
        (error) => {
          console.log(error)
        }
      )

    } else {
      alert("password and confirm password doesn't match")
    }
  }





  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Phone</label>
                <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Email id</label>
                <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">password</label>
                <input type="password" className="form-control" name="password" value={input.password} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name="cnfpassword" value={input.cnfpassword} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readValue}>Register</button>


              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-primary" onClick={readValue}>Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp