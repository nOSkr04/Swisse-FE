import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { EffectFade, Thumbs } from 'swiper';
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
      crossFade: true
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
    navigation: true
  };

  return (
    <Fragment>
      <div className="product-large-image-wrapper">
      
        {product?.images ? (
          <Swiper options={gallerySwiperParams}>
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
           
            {/* <AnotherLightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={slides}
                plugins={[Thumbnails, Zoom, Fullscreen]}
            /> */}
          </Swiper>
        ) : null}

      </div>
      <div className="product-small-image-wrapper mt-15">
        {product?.images ? (
          <Swiper options={thumbnailSwiperParams}>
         
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
          </Swiper>
        ) : null}
      </div>
    </Fragment>
  );
};

ProductImageGallery.propTypes = {
  product: PropTypes.shape({})
};

export default ProductImageGallery;
