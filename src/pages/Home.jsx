import { Sidebar } from "../components/sidebar/Sidebar";
import "../styles.css";
import { data } from "../data/stateData";
import { DisplayCards } from "../components/displayCards/DisplayCards";
import { useState } from "react";
import { Navbar } from "../components/navbar/Navbar";
export const Home = () => {
  const [cardData, setCardData] = useState(data);
  console.log(data);
  return (
    <div className="main-container">
      <Sidebar />
      <div>
        <Navbar/>
       
        <div className="common-flex-row  center page-bg bet">
          <div className="common-flex-row margin-l">
            <p>ALL</p>
            <p className="margin-l">LIVE</p>
            <p className="margin-l">DRAFT</p>
            <p className="margin-l">ARCHIEVED</p>
          </div>

          <label>
            <input type="search" placeholder="Select team" id="team-input"/>
          </label>
        </div>
        <div class="common-flex-row wrap products-mapped page-bg">
          {cardData.map((item) => {
            return <DisplayCards item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
