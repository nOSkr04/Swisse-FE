import PropTypes from "prop-types";
import clsx from "clsx";

const VideoPopup = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("video-popup pt-100", spaceBottomClass)}>
      <div className="container">
        <div className="row align-items-center">
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
          <div className="col-lg-6">
            <div className="video-popup__content">
              <h2 className="title mb-30">
              Swisse
              </h2>
              <p className="text mb-30">
              Swisse нь 1969 онд Австралид байгуулагдсан, дэлхийд алдартай премиум эрүүл мэндийн бренд бөгөөд амин дэм, хүнсний нэмэлт, арьс арчилгааны бүтээгдэхүүн зэргийг худалдаалдаг. Swisse – Австрали, АНУ, Итали, Шинэ Зеланд, Их Британи, Нидерланд, Энэтхэг, Хятад зэрэг дэлхийн 120 гаруй орны хэрэглэгчдийн танил брэнд. Дэлхийн Эрүүл Мэндийн Байгууллагаас ямар витамин хүний биед биед хамгийн сайн үр дүн үзүүлэхийг тодорхойлдог 4 үндсэн үзүүлэлт байдаг. Үүнд Найрлага, Хүчин чадал, Биологийн хэрэглээ, Аюулгүй байдал зэрэг шалгуур ордог. Swisse – ийн бүх амин дэмийн бүтээгдэхүүний дээрхи 4 үзүүлэлт шинжлэх ухааны үндэслэлтэйгээр нотлогдсон учраас Австралийн төдийгүй дэлхийд чанараараа гайхагдсан бүтээгдэхүүн болж чадсан бөгөөд Аmazon, Wallgrees.com, IHerb болон гэх мэтчилэн дэлхийн бусад тэргүүлэгч онлайн худалдааны витамины борлуулалтыг тэргүүлдэг.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VideoPopup.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default VideoPopup;
