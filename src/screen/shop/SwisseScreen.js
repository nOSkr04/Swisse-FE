import React, { Fragment } from "react";
import SEO from "../../component/seo";
import LayoutOne from "../../layouts/LayoutOne";
import BlogFeatured from "../../wrapper/blog-featured/BlogFeatured";
import HeroSliderEight from "../../wrapper/hero-slider/HeroSliderEight";
// import FeatureIconThree from "../../wrapper/feature-icon/FeatureIconThree";
import TabProductFive from "../../wrapper/product/TabProductFive";

const HomeCosmetics = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Cosmetics Home"
        description="Cosmetics home of flone react minimalist eCommerce template."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <HeroSliderEight />
        {/* tab product */}
        <TabProductFive
          spaceTopClass="pt-95"
          spaceBottomClass="pb-70"
        />
        {/* feature icon */}
        {/* <FeatureIconThree
          spaceBottomClass="pb-70"
          featureShapeClass="support-shape-3"
        /> */}
        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeCosmetics;
