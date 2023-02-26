import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { EffectFade, Thumbs } from "swiper";
// import AnotherLightbox from "yet-another-react-lightbox";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Swiper, { SwiperSlide } from "../../component/swiper";
import { photo } from "../../api";

const ProductImageGallery = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const [index, setIndex] = useState(-1);
  // const slides = product?.image.map((img, i) => ({
  //     src: process.env.PUBLIC_URL + img,
  //     key: i,
  // }));

  // swiper slider settings
  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs],
  };

  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: true,
  };

  return (
    <Fragment>
      <div className="product-large-image-wrapper">
      <Swiper options={gallerySwiperParams}>
      { product?.thumbnail && 
            <SwiperSlide>
              {/* <button className="lightgallery-button" >
                  <i className="pe-7s-expand1"></i>
                </button> */}
              <div className="single-image">
                <img
                  src={photo + product?.thumbnail}
                  className="img-fluid"
                  alt=""
                  />
              </div>
            </SwiperSlide>
                }
                </Swiper>
      </div>
      <div className="product-small-image-wrapper mt-15">
        {product?.images ? (
          <Swiper options={thumbnailSwiperParams}>
            {product?.images.image && 
            <SwiperSlide>
              {/* <button className="lightgallery-button" >
                  <i className="pe-7s-expand1"></i>
                </button> */}
              <div className="single-image">
                <img
                  src={photo + product?.images.image}
                  className="img-fluid"
                  alt=""
                  />
              </div>
            </SwiperSlide>
                }
            {product.images.image1 && (
              <SwiperSlide>
                {/* <button className="lightgallery-button" >
                  <i className="pe-7s-expand1"></i>
                </button> */}
                <div className="single-image">
                  <img
                    src={photo + product?.images.image1}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            )}
            {product.images.image2 && (
              <SwiperSlide>
                {/* <button className="lightgallery-button" >
                  <i className="pe-7s-expand1"></i>
                </button> */}
                <div className="single-image">
                  <img
                    src={photo + product?.images.image2}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            )}
            {product.images.image3 && (
              <SwiperSlide>
                {/* <button className="lightgallery-button" >
                  <i className="pe-7s-expand1"></i>
                </button> */}
                <div className="single-image">
                  <img
                    src={photo + product?.images.image3}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            )}
            {product.images.image4 && (
              <SwiperSlide>
                {/* <button className="lightgallery-button" >
                  <i className="pe-7s-expand1"></i>
                </button> */}
                <div className="single-image">
                  <img
                    src={photo + product?.images.image4}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        ) : null}
      </div>
    </Fragment>
  );
};

ProductImageGallery.propTypes = {
  product: PropTypes.shape({}),
};

export default ProductImageGallery;
