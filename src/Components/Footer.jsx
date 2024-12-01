import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-cont">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2>Grocie<i class="fa-solid fa-basket-shopping fa"></i></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nulla atque deleniti autem quas veritatis.</p>
                        <div className="footer-icons">
                        <i class="fa-brands fa-facebook fa-1x"></i><i class="fa-brands fa-instagram fa-1x"></i><i class="fa-brands fa-twitter fa-1x"></i><i class="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="contact-info">
                        <h2>Contact info</h2>
                        <p><i class="fa-solid fa-phone"></i>+123-456-7890</p>
                       <p> <i class="fa-solid fa-phone"></i>+111-222-3333</p>
                        <p><i class="fa-solid fa-envelope"></i>Shaikhanas@gmail.com</p>
                       <p> <i class="fa-solid fa-location-dot"></i>Mumbai,India-400104</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="links">
                            <h2>Quick Links</h2>
                            <ul>
                            <a href="/"><li>Home</li></a>
                            <a href="feature"><li>Features</li></a>
                            <a href="product"><li>Products</li></a>
                            <a href=""><li>Categories</li></a>
                             <a href=""><li>Review</li></a>
                            <a href=""><li>Cart</li></a>
                            <a href=''><li>Login</li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="letter">
                            <h2>Newsletter</h2>
                            <p>Subscribe for latest updates</p>
                            <input type="text" placeholder='your email'/><br />
                            <button>Subscribe</button><br />
                            <img src="data:image/png;base64,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" alt="" />
                             <img src="data:image/png;base64,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" alt="" />
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6tA3-HtpcEzsoZz-gyShJYp7w_fsZ0QMKA&s" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
