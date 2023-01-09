import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Home
const HomeScreen = lazy(() => import("./screen/HomeScreen"));
// Shop
const SwisseScreen = lazy(() => import("./screen/shop/SwisseScreen"));
const ProductDetail = lazy(() => import("./screen/shop/ProductDetail.js"));
// contact
const Contact = lazy(() => import("./screen/contact/Contact"));
// allProduct
const AllProduct = lazy(() => import("./screen/allProduct/AllProduct"));
// Widgets
const Cart = lazy(() => import("./screen/widgets/Cart"));
const Wishlist = lazy(() => import("./screen/widgets/Wishlist"));
const Compare = lazy(() => import("./screen/widgets/Compare"));
const Checkout = lazy(() => import("./screen/widgets/Checkout"));
const NotFound = lazy(() => import("./screen/widgets/NotFound"));
// blog
const BlogScreen = lazy(() => import("./screen/blog/BlogScreen"));
const BlogDetails = lazy(() =>
  import("./screen/blog/BlogDetails")
);

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Suspense
          fallback={
            <div className="flone-preloader-wrapper">
              <div className="flone-preloader">
                <span></span>
                <span></span>
              </div>
            </div>
          }
        >
          <Routes>
            <Route
              path={process.env.PUBLIC_URL + "/"}
              element={<HomeScreen />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/swisse"}
              element={<SwisseScreen />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/contact"}
              element={<Contact />}
            />
       
            <Route
              path={process.env.PUBLIC_URL + "/all-product"}
              element={<AllProduct />}
            />
                 <Route path={process.env.PUBLIC_URL + "/cart"} element={<Cart />} />
            <Route
              path={process.env.PUBLIC_URL + "/wishlist"}
              element={<Wishlist />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/compare"}
              element={<Compare />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/checkout"}
              element={<Checkout />}
            />
             <Route
              path={process.env.PUBLIC_URL + "/product/:id"}
              element={<ProductDetail />}
            />
             <Route
              path={process.env.PUBLIC_URL + "/blog"}
              element={<BlogScreen />}
            />
             <Route
              path={process.env.PUBLIC_URL + "/blog-details/:id"}
              element={<BlogDetails />}
            />
            {/* Homepages */}
          

       

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App;
