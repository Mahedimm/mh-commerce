import { default as React } from 'react';
import { Autoplay, EffectCards } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from './Product';





const RecommendedProduct = ({productsData}) => {
    return (
        <>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards,Autoplay]}
          autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
          className="mySwiper"
        >
        {productsData?.map(product => (
            <SwiperSlide key={product._id} className=""> 
                <Product product={product}/>
            </SwiperSlide>
        ))}
          
        </Swiper>
      </>
    );
};

export default RecommendedProduct;