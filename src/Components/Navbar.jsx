import React from 'react'
import "./Navbarstyle.css"

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="row">
            <div className="col-md-2">
            <div className="logo">
            <i class="fa-solid fa-basket-shopping fa-2x">Grocie</i>
            </div>
            </div>
            <div className="col-md-10">
              <div className="navbar">
                <ul className='route'>
                 <a href="/"><li>Home</li></a>
                 <a href="feature"><li>Features</li></a>
                 <a href="product"><li>Products</li></a>
                 <a href="categories"><li>Categories</li></a>
                 <a href="review"><li>Review</li></a>
                 <a href="cart"><li>Cart</li></a>
                 <a href='login'><li>Login</li></a>
                 <i class="fa-solid fa-magnifying-glass fa-1x"></i><input className='text-center' type="search" placeholder='Search'/>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
