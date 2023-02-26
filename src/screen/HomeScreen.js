import React, { Fragment } from "react";
import SEO from "../component/seo"
import LayoutOne from "../layouts/LayoutOne";
// Wrapper
import BannerThirty from "../wrapper/banner/BannerThirty";
import ProductSliderFour from "../wrapper/product/ProductSliderFour";
import HeroSliderTwentyEight from "../wrapper/hero-slider/HeroSliderTwentyEight";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {store} from "../store/store"
import { setProducts } from "../store/slices/product-slice";
import VideoPopup from "../component/video-popup/VideoPopup";
import VideoPopupOne from "../component/video-popup/VideoPopupOne";
const HomeScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://altanzaan.org/api/v1/products").then((res) => {
      setData(res.data.data);

    });
  }, []);
  store.dispatch(setProducts(data));
  return (
    <Fragment>
      <SEO
        titleTemplate="Нүүр хуудас"
        description="Алтан заан."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderTwentyEight />
        {/* feature text */}
        <VideoPopup spaceBottomClass="pb-100"  />
        <VideoPopupOne spaceBottomClass="pb-100"  />
        {/* <FeatureIconSix spaceBottomClass="pb-100" spaceTopClass="pt-30" /> */}
        
        {/* product slider */}
        <ProductSliderFour category="fashion" />
        {/* banner */}
        <BannerThirty spaceTopClass="pt-100" spaceBottomClass="pb-70" />
  
      </LayoutOne>
    </Fragment>
  );
};

export default HomeScreen;
