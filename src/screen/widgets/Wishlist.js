import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../component/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrapper/breadcrumb/Breadcrumb";
import { addToCart } from "../../store/slices/cart-slice";
import { deleteFromWishlist, deleteAllFromWishlist } from "../../store/slices/wishlist-slice"
import { photo } from "../../api";
import { numberFormatter } from "../../wrapper/product/NumberFormatter";

const Wishlist = () => {
  const dispatch = useDispatch();
  let { pathname } = useLocation();
  
  const currency = useSelector((state) => state.currency);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);
  

  return (
    <Fragment>
      <SEO
        titleTemplate="Wishlist"
        description="Wishlist page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Нүүр", path: process.env.PUBLIC_URL + "/" },
            {label: "Хүслийн жагсаалт", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {wishlistItems && wishlistItems.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">Хүслийн жагсаалт</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>Зураг</th>
                            <th>Нэр</th>
                            <th>Үнэ</th>
                            <th>Сагсанд нэмэх</th>
                            <th>Устгах</th>
                          </tr>
                        </thead>
                        <tbody>
                          {wishlistItems.map((wishlistItem, key) => {
                          
                            const finalProductPrice = (
                              wishlistItem.price * currency.currencyRate
                            ).toFixed(2);
                          
                            const cartItem = cartItems.find(
                              item => item.id === wishlistItem.id
                            );
                            return (
                              <tr key={key}>
                                <td className="product-thumbnail">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      wishlistItem.id
                                    }
                                  >
                                    {wishlistItem.images && 
                                    <img
                                    className="img-fluid"
                                    src={
                                      photo +
                                      wishlistItem.images.image1
                                    }
                                    alt=""
                                    />
                                  }
                                  </Link>
                                </td>

                                <td className="product-name text-center">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      wishlistItem.id
                                    }
                                  >
                                    {wishlistItem.title}
                                  </Link>
                                </td>

                                <td className="product-price-cart">
                                    <span className="amount">
                                        {numberFormatter.format(finalProductPrice)} ₮
                                      </span>
                                </td>

                                <td className="product-wishlist-cart">
                                  {wishlistItem.stock &&
                                    wishlistItem.stock > 0 ? (
                                    <button
                                      onClick={() =>
                                        dispatch(addToCart(wishlistItem))
                                      }
                                      className={
                                        cartItem !== undefined &&
                                        cartItem.quantity > 0
                                          ? "active"
                                          : ""
                                      }
                                      disabled={
                                        cartItem !== undefined &&
                                        cartItem.quantity > 0
                                      }
                                      title={
                                        wishlistItem !== undefined
                                          ? "Сагсанд байна"
                                          : "Сагсанд хийх"
                                      }
                                    >
                                      {cartItem !== undefined &&
                                      cartItem.quantity > 0
                                        ? "Нэмэгдсэн"
                                        : "Сагсанд нэмэх"}
                                    </button>
                                  ) : (
                                    <button disabled className="active">
                                      Дууссан
                                    </button>
                                  )}
                                </td>

                                <td className="product-remove">
                                  <button
                                    onClick={() =>
                                      dispatch(deleteFromWishlist(wishlistItem.id))
                                    }
                                  >
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="cart-shiping-update-wrapper">
                    
                      <div className="cart-clear">
                        <button onClick={() => dispatch(deleteAllFromWishlist())}>
                          Хүслийн жагсаалт хоослох
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-like"></i>
                    </div>
                    <div className="item-empty-area__text">
                      Хүслийн жагсаалтанд бараа байхгүй байна<br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/"}>
                        Бараа нэмэх
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Wishlist;
