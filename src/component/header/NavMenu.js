import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  
  return (
    <div
      className={clsx(sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}
    >
      <nav>
        <ul>
       
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              Нүүр
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              Дэлгүүр
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu"> 
              <li>
                <Link to={process.env.PUBLIC_URL + "/swisse"}>
                  Swisse
                </Link>
              </li>
              {/* <li>
                <Link to={process.env.PUBLIC_URL + "/swisse"}>
                 Nutrex
                </Link>
              </li> */}
            </ul>
          </li>
          {/* <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>
            Нийтлэл
              
            </Link>
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
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
