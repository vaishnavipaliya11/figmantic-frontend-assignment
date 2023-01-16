import "../../styles.css";
import { BiMenu } from "react-icons/bi";
export const Navbar = () => {
  return (
    <div className="common-flex-row bet center  navbar-container">
      <div>
        <p>KNOWLEDGE</p>
      </div>
      <div className="common-flex-row bet center">
        <button className="common-btn">CREATE COURSE</button>
        <button className="margin-sm nav-icon-btn">
          <BiMenu />
        </button>
      </div>
    </div>
  );
};
