import React, { useState } from "react";
import Play from "./Play";
import ProfileImg from "../images/image-jeremy.png";

import Classes from "./NameCard.module.css";
const NameCard = () => {
  const [daily, setDaily] = useState(true);
  const [weekly, setWeekly] = useState(false);
  const [monthly, setmonthly] = useState(false);
  const DailyChangeHandler = () => {
    setDaily(!daily);
    setmonthly(false);
    setWeekly(false);
  };
  const WeeklyChangeHandler = () => {
    setWeekly(!weekly);
    setDaily(false);
    setmonthly(false);
  };
  const MonthlyChangeHandler = () => {
    setmonthly(!monthly);
    setWeekly(false);
    setDaily(false);
  };
  return (
    <div className={Classes.container}>
      <div className={Classes.wrapper}>
        <div className={Classes.NameCard}>
          <div className={Classes.reportCard}>
            <img src={ProfileImg} />
            <div>
              <p>Report for</p>
              <h1>Jeremy Robson</h1>
            </div>
          </div>
          <ul className={Classes.timeInterval}>
            <li onClick={DailyChangeHandler}>
              <a
                className={daily ? Classes.clicked : Classes.unClicked}
                href="#"
              >
                Daily
              </a>
            </li>
            <li onClick={WeeklyChangeHandler}>
              <a
                className={weekly ? Classes.clicked : Classes.unClicked}
                href="#"
              >
                Weekly
              </a>
            </li>
            <li onClick={MonthlyChangeHandler}>
              <a
                className={monthly ? Classes.clicked : Classes.unClicked}
                href="#"
              >
                Monthly
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Play Day={daily} Week={weekly} Month={monthly} />
        </div>
      </div>
    </div>
  );
};

export default NameCard;
