import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../component/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrapper/breadcrumb/Breadcrumb";
import { addToCart } from "../../store/slices/cart-slice";
import { deleteFromCompare } from "../../store/slices/compare-slice";
import { photo } from "../../api";
import { numberFormatter } from "../../wrapper/product/NumberFormatter";

const Compare = () => {
  const dispatch = useDispatch();
  let { pathname } = useLocation();

  const currency = useSelector((state) => state.currency);
  const { compareItems } = useSelector((state) => state.compare);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Fragment>
      <SEO
        titleTemplate="Compare"
        description="Compare page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Нүүр", path: process.env.PUBLIC_URL + "/" },
            { label: "Харьцуулах", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="compare-main-area pt-90 pb-100">
          <div className="container">
            {compareItems && compareItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-12">
                  <div className="compare-page-content">
                    <div className="compare-table table-responsive">
                      <table className="table table-bordered mb-0">
                        <tbody>
                          <tr>
                            <th className="title-column">Бараа дэлгэрэнгүй</th>
                            {compareItems.map((compareItem, key) => {
                              const cartItem = cartItems.find(
                                (item) => item.id === compareItem.id
                              );
                              return (
                                <td className="product-image-title" key={key}>
                                  <div className="compare-remove">
                                    <button
                                      onClick={() =>
                                        dispatch(
                                          deleteFromCompare(compareItem.id)
                                        )
                                      }
                                    >
                                      <i className="pe-7s-trash" />
                                    </button>
                                  </div>
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      compareItem.id
                                    }
                                    className="image"
                                  >
                                    {compareItem.images && (
                                      <img
                                        className="img-fluid"
                                        src={photo + compareItem.images.image1}
                                        alt=""
                                      />
                                    )}
                                  </Link>
                                  <div className="product-title">
                                    <Link
                                      to={
                                        process.env.PUBLIC_URL +
                                        "/product/" +
                                        compareItem.id
                                      }
                                    >
                                      {compareItem.title}
                                    </Link>
                                  </div>
                                  <div className="compare-btn">
                                    {compareItem.stock &&
                                    compareItem.stock > 0 ? (
                                      <button
                                        onClick={() =>
                                          dispatch(addToCart(compareItem))
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
                                          compareItem !== undefined
                                            ? "Сагсанд байна"
                                            : "Сагсан нэмэх"
                                        }
                                      >
                                        {cartItem !== undefined &&
                                        cartItem.quantity > 0
                                          ? "Сагсанд байна"
                                          : "Сагсанд хийх"}
                                      </button>
                                    ) : (
                                      <button disabled className="active">
                                        Дууссан
                                      </button>
                                    )}
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                          <tr>
                            <th className="title-column">Үнэ</th>
                            {compareItems.map((compareItem, key) => {
                              const discountedPrice = getDiscountPrice(
                                compareItem.price,
                                compareItem.discount
                              );
                              const finalProductPrice = (
                                compareItem.price * currency.currencyRate
                              ).toFixed(2);
                              const finalDiscountedPrice = (
                                discountedPrice * currency.currencyRate
                              ).toFixed(2);
                              return (
                                <td className="product-price" key={key}>
                                  <span className="amount">
                                    {numberFormatter.format(finalProductPrice)}{" "}
                                    ₮
                                  </span>
                                </td>
                              );
                            })}
                          </tr>

                          <tr>
                            <th className="title-column">Тайлбар</th>
                            {compareItems.map((compareItem, key) => {
                              return (
                                <td className="product-desc" key={key}>
                                  <p>
                                    {compareItem.description
                                      ? compareItem.description
                                      : "N/A"}
                                  </p>
                                </td>
                              );
                            })}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-shuffle"></i>
                    </div>
                    <div className="item-empty-area__text">
                      Харьцуулах бүтээгдэхүүн байхгүй байна <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/"}>
                        Бүтээгдэхүүн нэмэх
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

export default Compare;
