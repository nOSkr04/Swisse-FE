import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>
            Нүүр
          </Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={"#"}>Дэлгүүр</Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/swisse"}>Swisse</Link>
            </li>
            {/* <li>
              <Link to={process.env.PUBLIC_URL + "/swisse"}>Nutrex</Link>
            </li> */}
          </ul>
        </li>
        {/* <li>
          <Link to={process.env.PUBLIC_URL + "/blog"}>Нийтлэл</Link>
        </li> */}
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            Бидний тухай
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/all-product"}>
            Бүх бүтээгдэхүүн
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
