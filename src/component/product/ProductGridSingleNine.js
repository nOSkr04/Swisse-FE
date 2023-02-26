import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductModal from "./ProductModal";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import { addToCompare } from "../../store/slices/compare-slice";
import { photo } from "../../api";
import { numberFormatter } from "../../wrapper/product/NumberFormatter";

const ProductGridSingleNine = ({
  product,
  cartItem,
  wishlistItem,
  compareItem,
  spaceBottomClass,
  colorClass,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className={clsx("product-wrap-9", spaceBottomClass, colorClass)}>
        <div className="product-img">
          <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
            {product.thumbnail && (
              <img
                className="default-img"
                src={photo + product.thumbnail}
                alt=""
              />
            )}
          </Link>
          <div className="product-action-2">
            {product.stock && product.stock > 0 ? (
              <button
                onClick={() => dispatch(addToCart(product))}
                className={
                  cartItem !== undefined && cartItem.quantity > 0
                    ? "active"
                    : ""
                }
                disabled={cartItem !== undefined && cartItem.quantity > 0}
                title={
                  cartItem !== undefined ? "Сагсанд байна" : "Сагсанд хийх"
                }
              >
                <i className="fa fa-shopping-cart"></i>
              </button>
            ) : (
              <button disabled className="active" title="Дууссан">
                <i className="fa fa-shopping-cart"></i>
              </button>
            )}

            <button onClick={() => setModalShow(true)} title="Хурдан харах">
              <i className="fa fa-eye"></i>
            </button>

            <button
              className={compareItem !== undefined ? "active" : ""}
              disabled={compareItem !== undefined}
              title={
                compareItem !== undefined ? "Харьцуулалтад байна" : "Харьцуулах"
              }
              onClick={() => dispatch(addToCompare(product))}
            >
              <i className="fa fa-retweet"></i>
            </button>
          </div>
        </div>
        <div className="product-content-2">
          <div className="title-price-wrap-2">
            <h3>
              <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                {product.title}
              </Link>
            </h3>
            <div className="price-2">
              <span> {numberFormatter.format(product.price)} ₮ </span>
            </div>
          </div>
          <div className="pro-wishlist-2">
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
              <i className="fa fa-heart-o" />
            </button>
          </div>
        </div>
      </div>
      {/* product modal */}

      <ProductModal
        show={modalShow}
        product={product}
        onHide={() => setModalShow(false)}
        wishlistItem={wishlistItem}
        compareItem={compareItem}
      />
    </Fragment>
  );
};

ProductGridSingleNine.propTypes = {
  cartItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  product: PropTypes.shape({}),
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
};

export default ProductGridSingleNine;
