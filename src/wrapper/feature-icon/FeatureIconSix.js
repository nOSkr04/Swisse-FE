import PropTypes from "prop-types";
import clsx from "clsx";
import FeatureIconSixSingle from "../../component/feature-icon/FeatureIconSixSingle.js";

const FeatureIconSix = ({ spaceTopClass, spaceBottomClass }) => {
  const data = [
    {
      "id": 1,
      "title": "Swisse",
      "subtitle": "Swisse нь 1969 онд Австралид байгуулагдсан, дэлхийд алдартай премиум эрүүл мэндийн бренд бөгөөд амин дэм, хүнсний нэмэлт, арьс арчилгааны бүтээгдэхүүн зэргийг худалдаалдаг. Swisse – Австрали, АНУ, Итали, Шинэ Зеланд, Их Британи, Нидерланд, Энэтхэг, Хятад зэрэг дэлхийн 120 гаруй орны хэрэглэгчдийн танил брэнд. Дэлхийн Эрүүл Мэндийн Байгууллагаас ямар витамин хүний биед биед хамгийн сайн үр дүн үзүүлэхийг тодорхойлдог 4 үндсэн үзүүлэлт байдаг. Үүнд Найрлага, Хүчин чадал, Биологийн хэрэглээ, Аюулгүй байдал зэрэг шалгуур ордог. Swisse – ийн бүх амин дэмийн бүтээгдэхүүний дээрхи 4 үзүүлэлт шинжлэх ухааны үндэслэлтэйгээр нотлогдсон учраас Австралийн төдийгүй дэлхийд чанараараа гайхагдсан бүтээгдэхүүн болж чадсан бөгөөд Аmazon, Wallgrees.com, IHerb болон гэх мэтчилэн дэлхийн бусад тэргүүлэгч онлайн худалдааны витамины борлуулалтыг тэргүүлдэг."
    },
    {
      "id": 2,
      "title": "Nutrex",
      "subtitle": "Албан ёсны эрхтэй 2022 оны 3 сард Монголд Nutrex брэндийг оруулж ирсэн. Nutrex Research нь 2002 онд үүсгэн байгуулагдсан бөгөөд Флорида мужийн төв Овьедо үйл ажиллагаагаа явуулдаг. Nutrex нь хамгийн үр дүнтэй орц найрлагатай, дээд зэргийн амттай, шинэлэг, өндөр чанартай нэмэлт бүтээгдэхүүн бий болгоход чиглсээр ирсэн. Nutrex Research нь хамгийн хурдан жинг хасах шингэн капсулын дэвшилтэт технологиор анх салбартаа хүч цохиж гарч ирсэн. Тэр цагаас хойш үр дүнд чиглэсэн олон төрлийн бүтээгдэхүүнийг үргэлжлүүлэн хөгжүүлсээр бараг 20 жилийн турш найдвартай брэнд байсаар иржээ. Өнөөдөр дэлхийн 100 гаруй оронд борлуулагдаж хамгийн сайн бүтээгдэхүүний шийдлийг санал болгох хүсэл эрмэлзэлдээ хөтлөгдөн бие бялдар, фитнессийн зорилгодоо хурдан хүрэхэд тань туслах болно."
    }
  ]
  return (
    <div className={clsx("support-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="border-bottom">
          <div className="row feature-icon-two-wrap">
            {data?.map((single, key) => (
              <div className="col-md-6" key={key}>
                <FeatureIconSixSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  textAlignClass="text-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureIconSix.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureIconSix;
