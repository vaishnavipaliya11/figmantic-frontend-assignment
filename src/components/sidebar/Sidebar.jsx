import "../../styles.css";
import { MdDashboard } from "react-icons/md";
import { SiKnowledgebase } from "react-icons/si";
import { SiMicrosoftteams } from "react-icons/si";
import { BsChatLeftQuote } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdBusiness } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
export const Sidebar = () => {
  return (
    <div className="common-flex-col sidebar-container start">
      <div className="common-flex-col start margin-l">
        <div className="common-flex-row center">
          {" "}
          <p>
            <MdDashboard />
          </p>
          <p className="margin-sm"> Dashboard</p>
        </div>
        <div className="common-flex-row center">
          {" "}
          <p>
            {" "}
            <SiKnowledgebase />{" "}
          </p>
          <p className="margin-sm"> Knowledge</p>
        </div>
        <div className="common-flex-row center">
          {" "}
          <p>
            <SiMicrosoftteams />
          </p>
          <p className="margin-sm"> Members</p>
        </div>
        <div className="common-flex-row center">
          {" "}
          <p>
            <SiMicrosoftteams />
          </p>
          <p className="margin-sm"> Teams</p>
        </div>
        
        <div className="common-flex-row center">
          {" "}
          <p>
            <BsChatLeftQuote />
          </p>
          <p className="margin-sm"> Chat</p>
        </div>
      </div>

      <div className="common-flex-col start margin-l">
        <div className="common-flex-row center">
          {" "}
          <p>
            <FiSettings />
          </p>
          <p className="margin-sm"> Setting</p>
        </div>
        <div className="common-flex-row center">
          {" "}
          <p>
            <MdBusiness />{" "}
          </p>
          <p className="margin-sm"> Company</p>
        </div>
        <div className="common-flex-row center">
          {" "}
          <p>
            {" "}
            <FaUserCircle />{" "}
          </p>
          <p className="margin-sm"> My-Profile</p>
        </div>
      </div>
    </div>
  );
};
