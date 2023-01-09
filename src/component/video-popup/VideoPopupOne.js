import PropTypes from "prop-types";
import clsx from "clsx";

const VideoPopupOne = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("video-popup", spaceBottomClass)}>
      <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6">
            <div className="video-popup__content">
              <h2 className="title mb-30">
              Nutrex
              </h2>
              <p className="text mb-30">
              Албан ёсны эрхтэй 2022 оны 3 сард Монголд Nutrex брэндийг оруулж ирсэн. Nutrex Research нь 2002 онд үүсгэн байгуулагдсан бөгөөд Флорида мужийн төв Овьедо үйл ажиллагаагаа явуулдаг. Nutrex нь хамгийн үр дүнтэй орц найрлагатай, дээд зэргийн амттай, шинэлэг, өндөр чанартай нэмэлт бүтээгдэхүүн бий болгоход чиглсээр ирсэн. Nutrex Research нь хамгийн хурдан жинг хасах шингэн капсулын дэвшилтэт технологиор анх салбартаа хүч цохиж гарч ирсэн. Тэр цагаас хойш үр дүнд чиглэсэн олон төрлийн бүтээгдэхүүнийг үргэлжлүүлэн хөгжүүлсээр бараг 20 жилийн турш найдвартай брэнд байсаар иржээ. Өнөөдөр дэлхийн 100 гаруй оронд борлуулагдаж хамгийн сайн бүтээгдэхүүний шийдлийг санал болгох хүсэл эрмэлзэлдээ хөтлөгдөн бие бялдар, фитнессийн зорилгодоо хурдан хүрэхэд тань туслах болно.
              </p>
              {/* <div className="link mb-30">
                <Link to={process.env.PUBLIC_URL + "/about"}>
                  More About Us
                </Link>
              </div> */}
            
             
            </div>
          </div>
          <div className="col-lg-6">
            <div className="video-popup__image">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/img/banner/banner-41.jpg"
                }
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

VideoPopupOne.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default VideoPopupOne;
