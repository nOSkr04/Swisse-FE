import { Fragment } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../component/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrapper/breadcrumb/Breadcrumb";
import axios from "axios";
import { useState } from "react";
import QpayModal from "./QpayModal";

const Checkout = () => {
  let cartTotalPrice = 0;
  let { id, price } = useParams();
  let { pathname } = useLocation();
  const [modalShow, setModalShow] = useState(false);
  const [base64Img, setBase64Img] = useState("");
  const [district, setDistrict] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [floor, setFloor] = useState("");
  const [houseCode, setHouseCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [locationDetail, setLocationDetail] = useState("");
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const [invoince, setInvoince] = useState("");
  const handleDistrict = (event) => {
    setDistrict(event.target.value);
  };
  const handleAps = (event) => {
    setApartmentNumber(event.target.value);
  };
  const handleFloor = (event) => {
    setFloor(event.target.value);
  };
  const handleHouseCode = (event) => {
    setHouseCode(event.target.value);
  };
  const handlePhone = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleLocation = (event) => {
    setLocationDetail(event.target.value);
  };
  const wallet = async () => {
    await axios
      .put(
        `https://altanzaan.org/api/v1/bills/${id}`,
        {
          district: district,
          apartmentNumber: apartmentNumber,
          floor: floor,
          houseCode: houseCode,
          phoneNumber: phoneNumber,
          locationDetail,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTAxNWE4NDQ0ODAyMmY1MGM1OGJlNSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3ODI5NjMxMSwiZXhwIjoxNjgwODg4MzExfQ.UkWEOTRdQyKuwbKoU4AUjTsZenOtGNaSdbhHqYGObtI`,
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    await axios
      .post(`https://altanzaan.org/api/v1/products/invoice/${id}`, {
        amount: price,
      })
      .then((res) => {
        setModalShow(true);
        setBase64Img(res.data?.data.qrImage);
        setInvoince(res.data?.data.invoiceId);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Fragment>
      <SEO titleTemplate="????????????" description="???????????? ????????????" />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "????????", path: process.env.PUBLIC_URL + "/" },
            { label: "??????????p", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>?????????????????? ????????</h3>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>???????????? ??????????</label>
                          <input
                            placeholder="??????, 4??-??????????"
                            type="text"
                            value={district}
                            onChange={handleDistrict}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>???????? ???????? / ?????????? ????????</label>
                          <input
                            type="text"
                            value={apartmentNumber}
                            onChange={handleAps}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>?????????? ??????????????</label>
                          <input
                            type="text"
                            value={floor}
                            onChange={handleFloor}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>???????</label>
                          <input
                            type="text"
                            value={houseCode}
                            onChange={handleHouseCode}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>????????</label>
                          <input
                            type="text"
                            value={phoneNumber}
                            onChange={handlePhone}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="additional-info-wrap">
                      <h4>?????????????????????? ????????????????</h4>
                      <div className="additional-info">
                        <textarea
                          placeholder="?????????????? ??????????????????????"
                          name="message"
                          defaultValue={""}
                          value={locationDetail}
                          onChange={handleLocation}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>???????? ????????????????</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>????????????????????????</li>
                            <li>????????</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
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
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className="order-price">
                                    {discountedPrice !== null
                                      ? (
                                          finalDiscountedPrice *
                                          cartItem.quantity
                                        ).toFixed(2)
                                      : (
                                          finalProductPrice * cartItem.quantity
                                        ).toFixed(2)} ???
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        {/* <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">Shipping</li>
                            <li>Free shipping</li>
                          </ul>
                        </div> */}
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">????????</li>
                            <li>{cartTotalPrice.toFixed(2)} ???</li>
                          </ul>
                        </div>
                      </div>
                      <div className="payment-method"></div>
                    </div>
                    <div className="place-order mt-25">
                      <button className="btn-hover" onClick={wallet}>
                        ???????????? ??????????
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      ???????? ?????????????? ???????????????????????? ?????????????? ?????????? <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        ?????????????? ??????????
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
      <QpayModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        base64Img={base64Img}
        invoince={invoince}
        id={id}
      />
    </Fragment>
  );
};

export default Checkout;
