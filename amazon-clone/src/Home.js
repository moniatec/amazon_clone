import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <img className='home__image'
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Movie/SYLV_2020_GWBleedingHero_3000x1200_POST_Final_noLocale_PVD6240_SylviesLove._CB416257388_.jpgban"
                alt=''
            />


            <Product
                id='12321341'
                title='The Lean Startup'
                price={11.96}
                rating={5}
                image='https://s-i.huffpost.com/gen/1148926/images/o-CLASSIC-BOOKS-ORIGINAL-COVERS-facebook.jpg'
            />
        </div>
    )
}

export default Home
