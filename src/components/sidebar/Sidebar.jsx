import "../../styles.css";
export const Sidebar = () => {
  return (
    <div className="common-flex-col sidebar-container start">
      <div className="common-flex-col start">
        <div>
          {" "}
          <p> dashboard</p>
        </div>
        <div>
          {" "}
          <p> Knowledge</p>
        </div>
        <div>
          {" "}
          <p> Members</p>
        </div>
        <div>
          {" "}
          <p> teams</p>
        </div>
        <div>
          {" "}
          <p> vault</p>
        </div>
        <div>
          {" "}
          <p> chat</p>
        </div>
      </div>

      <div className="common-flex-col start">
        <div>
          {" "}
          <p> Setting</p>
        </div>
        <div>
          {" "}
          <p> company</p>
        </div>
        <div>
          {" "}
          <p> my-profile</p>
        </div>
      </div>
    </div>
  );
};
