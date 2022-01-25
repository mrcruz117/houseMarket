import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/pesonOutlineIcon.svg";

function Navbar() {
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem">
            <ExploreIcon fill="#2c2c2c" width="36px" height={36} />
            <p>Explore</p>
          </li>
          <li className="navbarListItem">
            <OfferIcon fill="#2c2c2c" width="36px" height={36} />
            <p>Offer</p>
          </li>
          <li className="navbarListItem">
            <PersonOutlineIcon fill="#2c2c2c" width="36px" height={36} />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
