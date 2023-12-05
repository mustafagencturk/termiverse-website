import Link from "next/link";
import Nav from "./Nav";

const DefaultHeader = ({ singleMenu }) => {
  return (
    <header className="main-header menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rpy-10 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} />
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
           
            {/* Menu Button */}
            <div className="menu-btns">
              {/* menu sidbar */}
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default DefaultHeader;
