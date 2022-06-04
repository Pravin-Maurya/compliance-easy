import React from "react";
import "./analytics_card.css";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";


const analytics_Card = () => {
  return (<>
    <div className="status-card">
      <div className="status-card__icon">
        Total Closed 
        contracts
        <div className="status-card__icon">
        68  <AiOutlineCaretUp />
        </div>
      </div>
      <div className="status-card__info">hii</div>
    </div>
    <div className="status-card">
      <div className="status-card__icon">
        Total Closed 
        contracts 
      
        68 <AiOutlineCaretUp />+0.5
        
      </div>
      <div className="status-card__info">hii</div>
    </div>
    <div className="status-card">
      <div className="status-card__icon">
        Total Closed <br />
        contracts
        <div className="status-card__icon">
          <AiOutlineCaretUp />
        </div>
      </div>
      <div className="status-card__info">hii</div>
    </div>
    <div className="status-card">
      <div className="status-card__icon">
        Total Closed <br />
        contracts
        <div className="status-card__icon">
          <AiOutlineCaretUp />
        </div>
      </div>
      <div className="status-card__info">
      
      </div>
    </div>
    </>
  );
};

export default analytics_Card;
