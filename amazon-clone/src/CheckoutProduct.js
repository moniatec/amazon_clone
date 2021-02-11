import React from 'react'

function CheckoutProduct({ id, title, image, price, rating }) {
    return (
        <div className='checkoutProduct'>
            <img src={image} alt='' />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkouProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='checkoutProduct__rating'>
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>:star</p>
                        ))}
                </div>
                <button onClick={RemoveFromToBasket}>Remove From basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
