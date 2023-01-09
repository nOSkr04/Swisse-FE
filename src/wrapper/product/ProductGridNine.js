import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Swiper, { SwiperSlide } from "../../component/swiper";
import ProductGridSingleNine from "../../component/product/ProductGridSingleNine";

const settings = {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 30,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
};

const ProductGridNine = ({
  spaceBottomClass,
  colorClass,
}) => {
  const { products } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  // const prods = getProducts(products, category, type, limit);

  if(!products?.length) return <p>Бараа олдсонгүй</p>;

  return (
    <Swiper options={settings}>
      {products.map((product) => {
        return (
          <SwiperSlide key={product.id}>
            <ProductGridSingleNine
              spaceBottomClass={spaceBottomClass}
              colorClass={colorClass}
              product={product}
              cartItem={
                cartItems.find((cartItem) => cartItem.id === product.id)
              }
              wishlistItem={
                wishlistItems.find(
                  (wishlistItem) => wishlistItem.id === product.id
                )
              }
              compareItem={
                compareItems.find(
                  (compareItem) => compareItem.id === product.id
                )
              }
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

ProductGridNine.propTypes = {
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number
};

export default ProductGridNine;
