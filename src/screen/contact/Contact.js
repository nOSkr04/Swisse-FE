import { Fragment } from "react"; 
import { useLocation } from "react-router-dom";
import SEO from "../../component/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrapper/breadcrumb/Breadcrumb";
// import GoogleMap from "../../component/google-map"

const Contact = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="Холбоо барих"
        description="Алтан заантай холбоо барих"
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Нүүр", path: process.env.PUBLIC_URL + "/" },
            {label: "Холбоо барих", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            {/* <div className="contact-map mb-10">
              <GoogleMap lat={47.444} lng={-122.176} />
            </div> */}
            <div className="custom-row-2">
              <div className="col-12 col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+976 97007757</p>
                      <p>+976 93008887</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:Altanzaan0@gmail.com">
                        Altanzaan0@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Хаяг, </p>
                      <p>Улаанбаатар, Баянгол дүүрэг, Үйлдвэрийн төвийн бүс-2, Монгол 99 төв, 401 тоот</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Цахим хаяг</h3>
                    <ul>
                      <li>
                        <a href="//facebook.com/swissemongolia/">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="//instagram.com/swissemng?igshid=YmMyMTA2M2Y=">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                     
                    
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Имэйл илгээх</h2>
                  </div>
                  <form className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" placeholder="Өөрийн нэр*" type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" placeholder="Имэйл хаяг*" type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder="Гарчиг*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Илгээх үг*"
                          defaultValue={""}
                        />
                        <button className="submit" type="submit">
                          Илгээх
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
