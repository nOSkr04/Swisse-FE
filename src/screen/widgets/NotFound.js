import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom"; 
import SEO from "../../component/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrapper/breadcrumb/Breadcrumb";

const NotFound = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="Хүсэлт олдсонгүй"
        description="404 Алтан заан"
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Нүүр", path: process.env.PUBLIC_URL + "/" },
            {label: "404 хуудас", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="error-area pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                  <h1>404</h1>
                  <h2>Уучлаарай таны хайсан хүсэлт олдсонгүй</h2>
                  <Link to={process.env.PUBLIC_URL + "/"} className="error-btn">
                    Буцах
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default NotFound;
