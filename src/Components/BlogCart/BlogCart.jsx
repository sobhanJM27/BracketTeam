import React from 'react';

const BlogCart = (carts) => {
    return (
        <div className="blogcart">
            <ul>
                {
                    carts.map((cart) => {
                        <li key={cart.id}>
                            <div className="blogcart-cart">
                                <img src={cart.image} alt="" />
                                <div className="blogcart-cart-icon">
                                    <div className="icon">
                                        <i className="fa fa-calendar"></i>
                                        <p>{cart.history}</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-user"></i>
                                        <p>توسط اعضای تیم</p>
                                    </div>
                                    <div className="icon">
                                        <i className='fa fa-comment'></i>
                                        <p>{cart.comment}</p>
                                    </div>
                                </div>
                                <h4>{cart.title}</h4>
                                <p>{cart.content}</p>
                            </div>
                            <button>بیشتر بدانید</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default BlogCart;
