import PropTypes from "prop-types";
import clsx from "clsx";
import {
  getIndividualCategories,

} from "../../helpers/product";
import ShopCategories from "../../component/product/ShopCategories";


const ShopSidebar = ({ products, getSortParams, sideSpaceClass }) => {
  const uniqueCategories = getIndividualCategories(products);


  return (
    <div className={clsx("sidebar-style", sideSpaceClass)}>
      {/* filter by categories */}
      <ShopCategories
        categories={uniqueCategories}
        getSortParams={getSortParams}
      />
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
  sideSpaceClass: PropTypes.string
};

export default ShopSidebar;
