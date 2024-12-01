import React from 'react'
import "./Login.css"
export default function Loginpage() {
  return (
    <div>
      <div className="login">
        <div className="container">
          <div className="login-page">
          <div className="row">
            <div className="login-content">
              <h2 className='text-center'><span>Login</span></h2>
              <div className="col-md-6 text-center">
                <img src="https://freshindiaorganics.com/cdn/shop/files/FIO_Banner3_1.jpg?v=1632811191" alt="" />
              </div>
              <div className="col-md-6 text-center">
              <i class="fa-solid fa-user fa-2x"></i><input type="text" placeholder='Username'/><br />
              <i class="fa-solid fa-lock fa-2x"></i><input type="text" placeholder='Password' /><br />
                <a className='text-center' href='login'><li>Forgot Password</li></a>
                <button className='text-center'>Login</button><br />
                or
                <div className="social">
                  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/aa/dc/2e/aadc2e84-1c24-6e69-811a-28e9d6a3c253/logo_gsa_ios_color-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-85-220-0.png/1200x600wa.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
