import {  useState } from "react";
import PropTypes from "prop-types";
import { EffectFade, Thumbs } from "swiper";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swiper, { SwiperSlide } from "../../component/swiper";
import { getProductCartQuantity } from "../../helpers/product";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import { addToCompare } from "../../store/slices/compare-slice";
import { photo } from "../../api";
import { numberFormatter } from "../../wrapper/product/NumberFormatter";

function ProductModal({
  product,
  show,
  onHide,
  wishlistItem,
  compareItem,
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const [quantityCount, setQuantityCount] = useState(1);
  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
  );

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

  const onCloseModal = () => {
    setThumbsSwiper(null);
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onCloseModal}
      className="product-quickview-modal-wrapper"
    >
      <Modal.Header closeButton></Modal.Header>

      <div className="modal-body">
        <div className="row">
          <div className="col-md-5 col-sm-12 col-xs-12">
            <div className="product-large-image-wrapper">
              <Swiper options={gallerySwiperParams}>
                {product.thumbnail  ? (
                  <SwiperSlide>
                    <div className="single-image">
                      <img
                        src={photo + product.thumbnail}
                        className="img-fluid"
                        alt="Product"
                      />
                    </div>
                  </SwiperSlide>
                ) : null}
                {/* {product.images && product.images.image1 ? (
                  <SwiperSlide>
                    <div className="single-image">
                      <img
                        src={photo + product.images.image1}
                        className="img-fluid"
                        alt="Product"
                      />
                    </div>
                  </SwiperSlide>
                ) : null} */}
                {/* {product.images && product.images.image2 ? (
                  <SwiperSlide>
                    <div className="single-image">
                      <img
                        src={photo + product.images.image2}
                        className="img-fluid"
                        alt="Product"
                      />
                    </div>
                  </SwiperSlide>
                ) : null}
                {product.images && product.images.image3 ? (
                  <SwiperSlide>
                    <div className="single-image">
                      <img
                        src={photo + product.images.image3}
                        className="img-fluid"
                        alt="Product"
                      />
                    </div>
                  </SwiperSlide>
                ) : null}
                {product.images && product.images.image4 ? (
                  <SwiperSlide>
                    <div className="single-image">
                      <img
                        src={photo + product.images.image4}
                        className="img-fluid"
                        alt="Product"
                      />
                    </div>
                  </SwiperSlide>
                ) : null} */}
              </Swiper>
            </div>
            <div className="product-small-image-wrapper mt-15">
              <Swiper options={thumbnailSwiperParams}>
              {product.images && product.images.image1 ? (
                  <SwiperSlide>
                    <div className="single-image">
                      <img
                        src={photo + product.images.image1}
                        className="img-fluid"
                        alt="Product"
                      />
                    </div>
                  </SwiperSlide>
                ) : null}
                {product.images && product.images.image2 ? (
                  <SwiperSlide>
                    <div className="single-image">
                      <img
                        src={photo + product.images.image2}
                        className="img-fluid"
                        alt="Product"
                      />
                    </div>
                  </SwiperSlide>
                ) : null}
                {product.images && product.images.image3 ? (
                  <SwiperSlide>
                    <div className="single-image">
                      <img
                        src={photo + product.images.image3}
                        className="img-fluid"
                        alt="Product"
                      />
                    </div>
                  </SwiperSlide>
                ) : null}
                {product.images && product.images.image4 ? (
                  <SwiperSlide>
                    <div className="single-image">
                      <img
                        src={photo + product.images.image4}
                        className="img-fluid"
                        alt="Product"
                      />
                    </div>
                  </SwiperSlide>
                ) : null}
              </Swiper>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12">
            <div className="product-details-content quickview-content">
              <h2>{product.title}</h2>
              <div className="product-details-price">
                  <span> {numberFormatter.format(product.price)} ₮</span>
              </div>
        
              <div className="pro-details-list">
                <p>{product.shortDescription}</p>
              </div>
                <div className="pro-details-quality">
                  <div className="cart-plus-minus">
                    <button
                      onClick={() =>
                        setQuantityCount(
                          quantityCount > 1 ? quantityCount - 1 : 1
                        )
                      }
                      className="dec qtybutton"
                    >
                      -
                    </button>
                    <input
                      className="cart-plus-minus-box"
                      type="text"
                      value={quantityCount}
                      readOnly
                    />
                    <button
                      onClick={() =>
                        setQuantityCount(
                          quantityCount < product.stock - productCartQty
                            ? quantityCount + 1
                            : quantityCount
                        )
                      }
                      className="inc qtybutton"
                    >
                      +
                    </button>
                  </div>
                  <div className="pro-details-cart btn-hover">
                    {product.stock && product.stock > 0 ? (
                      <button
                        onClick={() =>
                          dispatch(
                            addToCart({
                              ...product,
                              quantity: quantityCount,
                             
                            })
                          )
                        }
                        disabled={productCartQty >= product.stock}
                      >
                        {" "}
                        Сагсанд хийх{" "}
                      </button>
                    ) : (
                      <button disabled>Дууссан</button>
                    )}
                  </div>
                  <div className="pro-details-wishlist">
                    <button
                      className={wishlistItem !== undefined ? "active" : ""}
                      disabled={wishlistItem !== undefined}
                      title={
                        wishlistItem !== undefined
                          ? "Хүслийн жагсаалтанд байна"
                          : "Хүслийн жагсаалтанд хийх"
                      }
                      onClick={() => dispatch(addToWishlist(product))}
                    >
                      <i className="pe-7s-like" />
                    </button>
                  </div>
                  <div className="pro-details-compare">
                    <button
                      className={compareItem !== undefined ? "active" : ""}
                      disabled={compareItem !== undefined}
                      title={
                        compareItem !== undefined
                          ? "Харьцуулалтад байна"
                          : "Харьцуулах"
                      }
                      onClick={() => dispatch(addToCompare(product))}
                    >
                      <i className="pe-7s-shuffle" />
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

ProductModal.propTypes = {
  currency: PropTypes.shape({}),
  discountedprice: PropTypes.number,
  finaldiscountedprice: PropTypes.number,
  finalproductprice: PropTypes.number,
  onHide: PropTypes.func,
  product: PropTypes.shape({}),
  show: PropTypes.bool,
  wishlistItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
};

export default ProductModal;
