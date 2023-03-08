import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation,  useNavigate } from "react-router-dom";
import SEO from "../../component/seo";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrapper/breadcrumb/Breadcrumb";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  deleteAllFromCart,
} from "../../store/slices/cart-slice";
import { cartItemStock } from "../../helpers/product";
import { photo } from "../../api";
import { numberFormatter } from "../../wrapper/product/NumberFormatter";
import axios from "axios";

const Cart = () => {
  let cartTotalPrice = 0;

  const [quantityCount] = useState(1);
  const dispatch = useDispatch();
  let { pathname } = useLocation();
  const navigate = useNavigate()
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  
  const postBill = async(price) => {
   await axios
      .post("https://altanzaan.org/api/v1/bills", { products: cartItems })
      .then((res) => {
        navigate(process.env.PUBLIC_URL + "/checkout/" + res.data?.data._id + `/${price}`)
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  return (
    <Fragment>
      <SEO
        titleTemplate="Cart"
        description="Cart page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Нүүр", path: process.env.PUBLIC_URL + "/" },
            { label: "Сагс", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">Сагсны жагсаалт</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>Зураг</th>
                            <th>Нэр</th>
                            <th>Үнэ</th>
                            <th>Ширхэг</th>
                            <th>Нийт үнэ</th>
                            <th>Устгах</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((cartItem, key) => {
                            const discountedPrice = getDiscountPrice(
                              cartItem.price,
                              cartItem.discount
                            );
                            const finalProductPrice = (
                              cartItem.price * currency.currencyRate
                            ).toFixed(2);
                            const finalDiscountedPrice = (
                              discountedPrice * currency.currencyRate
                            ).toFixed(2);

                            discountedPrice != null
                              ? (cartTotalPrice +=
                                  finalDiscountedPrice * cartItem.quantity)
                              : (cartTotalPrice +=
                                  finalProductPrice * cartItem.quantity);
                            return (
                              <tr key={key}>
                                <td className="product-thumbnail">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      cartItem.id
                                    }
                                  >
                                    {cartItem.thumbnail && (
                                      <img
                                        className="img-fluid"
                                        src={photo + cartItem.thumbnail}
                                        alt=""
                                      />
                                    )}
                                  </Link>
                                </td>

                                <td className="product-name">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      cartItem.id
                                    }
                                  >
                                    {cartItem.title}
                                  </Link>
                                </td>

                                <td className="product-price-cart">
                                  <span className="amount">
                                    {numberFormatter.format(finalProductPrice)}{" "}
                                    ₮
                                  </span>
                                </td>

                                <td className="product-quantity">
                                  <div className="cart-plus-minus">
                                    <button
                                      className="dec qtybutton"
                                      onClick={() =>
                                        dispatch(decreaseQuantity(cartItem))
                                      }
                                    >
                                      -
                                    </button>
                                    <input
                                      className="cart-plus-minus-box"
                                      type="text"
                                      value={cartItem.quantity}
                                      readOnly
                                    />
                                    <button
                                      className="inc qtybutton"
                                      onClick={() =>
                                        dispatch(
                                          addToCart({
                                            ...cartItem,
                                            quantity: quantityCount,
                                          })
                                        )
                                      }
                                      disabled={
                                        cartItem !== undefined &&
                                        cartItem.quantity &&
                                        cartItem.quantity >=
                                          cartItemStock(cartItem)
                                      }
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td className="product-subtotal">
                                  {numberFormatter.format(
                                    finalProductPrice * cartItem.quantity
                                  )}{" "}
                                  ₮
                                </td>

                                <td className="product-remove">
                                  <button
                                    onClick={() =>
                                      dispatch(
                                        deleteFromCart(cartItem.cartItemId)
                                      )
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
                  <div className="col-lg-6">
                    <div className="cart-shiping-update-wrapper">
                      <div className="cart-clear">
                        <button onClick={() => dispatch(deleteAllFromCart())}>
                          Хоослох
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="grand-totall">
                      <h5>
                        Нийт үнэ{" "}
                        <span>
                          {cartTotalPrice.toFixed(2)} ₮
                        </span>
                      </h5>
                      <Link onClick={() => postBill(cartTotalPrice)} >
                        Үргэлжлүүлэх
                      </Link>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cart"></i>
                    </div>
                    <div className="item-empty-area__text">
                      Сагсанд бараа байхгүй байна <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/"}>
                        Бүтээгдэхүүн үзэх
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

export default Cart;
