import { Sidebar } from "../components/sidebar/Sidebar";
import "../styles.css";
import { data } from "../data/stateData";
import { DisplayCards } from "../components/displayCards/DisplayCards";
import { useState } from "react";
export const Home = () => {
  const [cardData, setCardData] = useState(data);
  console.log(data);
  return (
    <div className="main-container">
      <Sidebar />
      <div class="common-flex-row wrap products-mapped">
        {cardData.map((item) => {
          return <DisplayCards item={item} />;
        })}
      </div>
    </div>
  );
};
