import React, { Fragment } from "react";
import SEO from "../component/seo"
import LayoutOne from "../layouts/LayoutOne";
// Wrapper
import BannerThirty from "../wrapper/banner/BannerThirty";
import ProductSliderFour from "../wrapper/product/ProductSliderFour";
import FeatureIconSix from "../wrapper/feature-icon/FeatureIconSix";
import HeroSliderTwentyEight from "../wrapper/hero-slider/HeroSliderTwentyEight";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {store} from "../store/store"
import { setProducts } from "../store/slices/product-slice";
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
        titleTemplate="Fashion Home"
        description="Fashion home of flone react minimalist eCommerce template."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderTwentyEight />
        {/* feature text */}
        <FeatureIconSix spaceBottomClass="pb-100" spaceTopClass="pt-30" />
        
        {/* product slider */}
        <ProductSliderFour category="fashion" />
        {/* banner */}
        <BannerThirty spaceTopClass="pt-100" spaceBottomClass="pb-70" />
  
      </LayoutOne>
    </Fragment>
  );
};

export default HomeScreen;
