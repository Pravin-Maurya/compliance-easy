import React from "react";
import "./analytics_card.css";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import circle from "../../../Asset/circle.png";
import totalMember from "../../../Asset/totalMember.png";
import activeContracts from "../../../Asset/activeContracts.png";

const analytics_Card = () => {
  return (
    <>
      <div className="status-card">
        <div className="status-card__icon">
          Total Closed contracts
          <div className="status-card__icon">
            68 <AiOutlineCaretUp />
          </div>
        </div>
        <div className="status-card__info">
          <img src={circle} alt="circle" className="stat-img" />
        </div>
      </div>
      <div className="status-card">
        <div className="status-card__icon">
          <p> 562 </p>
          <p>Total Members </p>
          <AiOutlineCaretUp />
          <p>-2% than last month</p>
        </div>
        <div className="status-card__info">
          <img src={totalMember} alt="total-member" className="stat-img" />
        </div>
      </div>
      <div className="status-card">
        <div className="status-card__icon">
          Ongoing <br />
          contracts
        </div>
        <div className="status-card__info">76 left from target</div>
      </div>
      <div className="status-card">
        <div className="status-card__icon">
          Progress
          <div className="status-card__icon">
            {/* <img src={activeContracts} alt='active' className="stat-img"/> */}
          </div>
        </div>
        <div className="status-card__info"></div>
      </div>
    </>
  );
};

export default analytics_Card;
