import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Movie/SYLV_2020_GWBleedingHero_3000x1200_POST_Final_noLocale_PVD6240_SylviesLove._CB416257388_.jpgban'
                    alt='' />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket.
                    </p>
                    </div>
                ) : (
                        <div>
                            <h2 className='checkout__title'>Your Shopping Basket</h2>
                            {/* list out all of the Checkout products */}
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}

                        </div>
                    )
                }
            </div>
            {basket.length > 0 && (
                <div className='checkout__right' >
                    <h1></h1>

                </div>
            )}
        </div>
    )
}

export default Checkout


