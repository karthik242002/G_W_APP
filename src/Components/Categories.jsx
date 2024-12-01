import React from 'react'
import "./Categories.css"

export default function Categories() {
  return (
    <div>
      <div className="categories">
        <div className="categories-section">
          <div className="container">
            <div className="row">
              <div className="categories-content">
                <h2 className='text-center'>Our <span>Categories</span></h2>
                <div className="col-md-3 text-center icons-cate1">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgkh9uKBm3RaKsKryAzFbinEWYJU8NnSO5TW66hV-8qLgBQ53Yp631uVnNzpULGynLrsE&usqp=CAU" alt="" />
                  <h4 className='text-center'>Organic Vegetables</h4>
                  <p>Upto 45% Off</p>
                  <button>Read More</button>
                </div>
                <div className="col-md-3 text-center icons-cate2">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfCD41_DFGODuGDu33vV1oq9ukf7xwMBerw&s" alt="" />
                  <h4 className='text-center'>Fresh Fruits</h4>
                  <p className='text-center'>Upto 45% Off</p>
                  <button className='text-center'>Read More</button>
                </div>
                <div className="col-md-3 text-center icons-cate3">
                  <img src="data:image/jpeg;base64,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" alt="" />
                  <h4 className='text-center'>Dairy Products</h4>
                  <p className='text-center'>Upto 45% Off</p>
                  <button className='text-center'>Read More</button>
                </div>
                <div className="col-md-3 text-center icons-cate4">
                  <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxXxg5n6Vtaj3-oGZW0IVWwa_xnTNxKD98jTYuS0iojbLunnV1QDg2cpYq-4FdmEzzj1Q6Au45iFg81BjPxsf6l8GkoTiemppkyE-CnhXNILsX9XOr1X62QQ" alt="" />
                  <h4 className='text-center'>Dairy Products</h4>
                  <p className='text-center'>Upto 45% Off</p>
                  <button className='text-center'>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
