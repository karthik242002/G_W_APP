import React from 'react'
import Reviewstyle from "./Reviewstyle.css"
export default function Review() {
  return (
    <div>
      <div className="review">
        <div className="container">
            <div className="row">
                <h2 className='text-center'>Customer's <span>review</span></h2>
                <div className="col-md-4  text-center">
                    <div className="review-page">
                    <img className='text-center' src="https://media.istockphoto.com/id/943026448/photo/beautiful-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=s-4Nr3_Ynl-pV3v5ejJUauj8bXM1PmoviMvyEK8IrYw=" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repellendus ducimus reprehenderit explicabo accusamus earum perspiciatis aut? Nulla itaque unde vero assumenda corrupti quaerat laudantium.</p>
                    <h3>John Doe</h3>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i><br />
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="review-page1">
                    <img className='text-center' src="https://images.unsplash.com/photo-1698767839718-850659ea2d9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmxzJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repellendus ducimus reprehenderit explicabo accusamus earum perspiciatis aut? Nulla itaque unde vero assumenda corrupti quaerat laudantium.</p>
                    <h3>John Doe</h3>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i><br />
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="review-page3">
                    <img className='text-center' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95cyUyMGZhY2V8ZW58MHx8MHx8fDA%3D" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repellendus ducimus reprehenderit explicabo accusamus earum perspiciatis aut? Nulla itaque unde vero assumenda corrupti quaerat laudantium.</p>
                    <h3>John Doe</h3>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i><br />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
