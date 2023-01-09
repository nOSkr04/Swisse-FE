import PropTypes from "prop-types";
import clsx from "clsx";
import FeatureIconThreeSingle from "../../component/feature-icon/FeatureIconThreeSingle.js";

const FeatureIconThree = ({
  bgColorClass,
  spaceBottomClass,
  featureShapeClass
}) => {
  const data = [
    {
      "id": 1,
      "title": "Free Shipping!",
      "subtitle": "Lorem ipsum dolor sit amet consectetu adipisicing elit sed"
    },
    {
      "id": 2,
      "title": "Support 24/7",
      "subtitle": "Lorem ipsum dolor sit amet consectetu adipisicing elit sed"
    },
    {
      "id": 3,
      "title": "Money Return",
      "subtitle": "Lorem ipsum dolor sit amet consectetu adipisicing elit sed"
    }
  ]
  return (
    <div
      className={clsx("support-area", bgColorClass, spaceBottomClass)}
    >
      <div className="container">
        <div className="row">
          {data?.map((single, key) => (
            <div className="col-lg-4 col-md-4 col-sm-6" key={key}>
              <FeatureIconThreeSingle
                data={single}
                spaceBottomClass="mb-30"
                featureShapeClass={featureShapeClass}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FeatureIconThree.propTypes = {
  bgColorClass: PropTypes.string,
  featureShapeClass: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default FeatureIconThree;
