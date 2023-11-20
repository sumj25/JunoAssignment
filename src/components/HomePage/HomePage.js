import React, { useState } from "react";
import "./HomePage.css";
import Table from "../Table/Table";
import CloseAccount from "../CloseAccount/CloseAccount";
import Droupdown from "../Dropdown/Dropdown";
const HomePage = () => {
  const [status, setStatus] = useState("pending");
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("");
  const [close, setClose] = useState(false);
  const [trigger, setTrigger] = useState("");

  const riskLevel = ["All", "High", "Medium", "Low"];
  const Trigger_reason = [
    "Trigger reason",
    "Hard flag",
    "Temp flag",
    "Restricted unflag",
    "Un flag",
    "Reviewed",
  ];

  return (
    <div className="monitoring">
      <h1>Monitoring</h1>
      <div className="tabs">
        <div className="toggle">
          <p
            className={status === "pending" ? "active" : ""}
            onClick={() => {
              setStatus("pending");
              setSearch("");
              setLevel("");
              setTrigger("");
            }}
          >
            Pending
          </p>
          <p
            className={status === "completed" ? "active" : ""}
            onClick={() => {
              setStatus("completed");
              setSearch("");
              setLevel("");
              setTrigger("");
            }}
          >
            completed
          </p>
        </div>
        <button className="btn" onClick={() => setClose(true)}>
          <span class="material-symbols-outlined">cancel</span>
          <p>Close account</p>
        </button>
      </div>
      <div className="filter">
        <div className="search-flex">
          <span class="material-symbols-outlined">search</span>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Droupdown
          options={Trigger_reason}
          label="Trigger reason"
          trigger={trigger}
          setTrigger={setTrigger}
        />
        <Droupdown
          options={riskLevel}
          label="Risk level"
          setLevel={setLevel}
          level={level}
        />
      </div>
      <div className="table">
        <Table status={status} search={search} level={level} />
      </div>
      {close && <CloseAccount setClose={setClose} />}
    </div>
  );
};

export default HomePage;
