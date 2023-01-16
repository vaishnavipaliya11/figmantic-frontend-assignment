import "../../styles.css"
import "../displayCards/cards.css"
export const DisplayCards =({item})=>{
    console.log(item);
    const { type, img, Purpose, time, updated, lessons,status } = item;
    return(
        <div className="product-card">
      <div className="badge">
        <button className="clear-btn">{status}</button>
      </div>

      <div className="product-tumb">
        <img src={img} alt="houses" />
      </div>
      <div className="product-details">
        <span className="product-catagory common-flex-col">
          {" "}
          <p  class="fs-sm">{type}</p>
          <p  class="fs-sm">Last updated:{updated}</p>
        </span>
        <div className="product-price common-flex-row">
          <p  class="fs-sm">Minutes : {time}</p>
          <p  class="fs-sm">Lessons: {lessons}</p>
         
          
        </div>
        <hr/>

        <div className="product-bottom-details common-flex-row center">
          <div className="rating-container">
            <small class="fs-sm">{Purpose}</small>
          </div>
        </div>
      </div>
    </div>
    )
}