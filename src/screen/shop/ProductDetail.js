import React, { Fragment } from "react"; 
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../../component/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrapper/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrapper/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrapper/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrapper/product/ProductImageDescription";

const ProductDetail = () => {
  let { pathname } = useLocation();
  let { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const product = products.find(product => product.id === id);
  return (
    <Fragment>
      <SEO
        titleTemplate="Бараа дэлгэрэнгүй"
        description="Алтан заан"
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Нүүр", path: process.env.PUBLIC_URL + "/" },
            {label: "Бараа дэлгэрэнгүй", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        />
        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product.description}
          otherInfo={product.otherInfo}
          weight={product.weight}
          ingredients={product.ingredients}
        />

        {/* related product slider */}
        <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product.subCategory}
        />
      </LayoutOne>
    </Fragment>
  );
};

export default ProductDetail;
