
import React from 'react'
import "./Productstyle.css"
import ScrollImage from './ScrollImage'

export default function Productcontent() {
  return (
    <div>
      <div className="products">
         <div className="container">
            <div className="row">
                <div className="icons">
                    <h2 className='text-center'>Our <span>Products</span></h2>
                    <div className="col-md-4">
                        <div className="products-pic text-center">
                            <img src="https://5.imimg.com/data5/SELLER/Default/2023/5/305062155/SB/TM/XR/86539219/fresh-orange-fruit.jpg" alt="" />
                            <h3>Fresh Orange</h3>
                            <h4>$4.99 - $10.99</h4>
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i><br />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="products-pic text-center">
                            <img src="data:image/jpeg;base64,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" alt="" />
                            <h3>Fresh Onion</h3>
                            <h4>$4.99 - $10.99</h4>
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i><br />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="products-pic1 text-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBm9sg_VklfX9GtpN_CeALTMra7v2UrGDVA&s" alt="" />
                            <h3>Fresh Meat</h3>
                            <h4>$4.99 - $10.99</h4>
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i><br />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="scroll">
               <ScrollImage/>
                 </div>
            </div>
         </div>
      </div>
    </div>
  )
}
