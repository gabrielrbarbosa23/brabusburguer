import React from "react";

import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";

import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductSlider.css'

import ProductCard from './components/ProductCard';

import img1 from './img/product1.png';
import img2 from './img/product2.png';
import img3 from './img/product3.png';
import img4 from './img/product4.png';
import img5 from './img/product5.png';
import img6 from './img/product6.png';
import img7 from './img/product7.png';
import img8 from './img/product8.png';
import img9 from './img/product9.png';
import img10 from './img/product10.png';
import img11 from './img/product11.png';

const ProductSlider = () => {
    return (
        <div className="ProductSlider" id="cardapio">
        <div className="container py-4 px-4 justify-content-center">
            <h1 className="title">Entradas</h1>
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 5,
                    },
                }}
            >
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img6, price: 'R$22,00', title: 'hamburguer 1'}} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img7, price: 'R$22,00', title: 'hamburguer 2'}} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img8, price: 'R$22,00', title: 'hamburguer 3'}} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img9, price: 'R$22,00', title: 'hamburguer 4'}} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img10, price: 'R$22,00', title: 'hamburguer 5'}} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img11, price: 'R$22,00', title: 'hamburguer 1'}} />
                </SwiperSlide>
            </Swiper>
                <h1 className="title">Artesanais</h1>
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 5,
                    },
                }}
            >
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img1, price: 'R$22,00', title: 'hamburguer 1'}} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img2, price: 'R$22,00', title: 'hamburguer 2'}} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img3, price: 'R$22,00', title: 'hamburguer 3'}} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img4, price: 'R$22,00', title: 'hamburguer 4'}} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img5, price: 'R$22,00', title: 'hamburguer 5'}} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img1, price: 'R$22,00', title: 'hamburguer 1'}} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img2, price: 'R$22,00', title: 'hamburguer 2'}} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img3, price: 'R$22,00', title: 'hamburguer 3'}} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img4, price: 'R$22,00', title: 'hamburguer 4'}} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard data={{imgSrc: img5, price: 'R$22,00', title: 'hamburguer 5'}} />
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
    );
};

export default ProductSlider;