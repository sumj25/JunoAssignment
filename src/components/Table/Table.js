import React, { useEffect, useState } from "react";
import "./table.css";
import data from "../../data";
import linkIcon from "../../images/linkIcon.png";
import upDown from "../../images/upDown.png";
const Table = ({ status, search, level }) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    let filteredData = data.filter((item) => item.status === status);
    if (search) {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (level !== "") {
      filteredData = filteredData.filter((item) => item.level === level);
    }
    setDatas(filteredData);
  }, [status, level, search]);

  return (
    <table>
      {status === "completed" ? (
        <tr className="headers">
          <th style={{ width: "255px" }}>User</th>
          <th style={{ width: "149px" }}>
            <div className="sort">
              <p>Risk level</p>
              <img src={upDown} alt="updown" />
            </div>
          </th>
          <th style={{ width: "164px" }}>Action reason</th>
          <th style={{ width: "155px" }}>
            <div className="sort">
              <p>Time to close</p>
              <img src={upDown} alt="updown" />
            </div>
          </th>
          <th style={{ width: "170px" }}>
            <div className="sort">
              <p>Date added on</p>
              <img src={upDown} alt="updown" />
            </div>
          </th>
          <th style={{ width: "181.5px" }}>Action taken by</th>
        </tr>
      ) : (
        <tr className="headers">
          <th style={{ width: "255px" }}>User</th>
          <th style={{ width: "149px" }}>
            <div className="sort">
              <p>Risk level</p>
              <img src={upDown} alt="updown" />
            </div>
          </th>
          <th style={{ width: "164px" }}>Trigger reason</th>
          <th style={{ width: "155px" }}>
            <div className="sort">
              <p>In queue for</p>
              <img src={upDown} alt="updown" />
            </div>
          </th>
          <th style={{ width: "170px" }}>
            <div className="sort">
              <p>Date added on</p>
              <img src={upDown} alt="updown" />
            </div>
          </th>
          <th style={{ width: "181.5px" }}>Previously reviewed</th>
        </tr>
      )}
      {datas.map((item) =>
        item.status === "completed" ? (
          <tr>
            <td>
              <div className="user-link">
                <div>
                  <h4>{item.name}</h4>
                  <p
                    style={{
                      color: "rgba(119, 118, 118, 1)",
                      fontWeight: "500",
                    }}
                  >
                    {item.email}
                  </p>
                </div>
                <img
                  src={linkIcon}
                  // alt="external link"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </td>
            <td
              className={
                (item.level === "Medium" && "medium") ||
                (item.level === "Low" && "low") ||
                (item.level === "High" && "high")
              }
            >
              <div></div>
              <p>{item.level}</p>
            </td>
            <td>{item.Action_reason}</td>
            <td>{item.Time_to_close}</td>
            <td style={{ color: "rgba(119, 118, 118, 1)", fontWeight: "500" }}>
              {item.date}
            </td>
            <td>
              <h4>{item.reviewed_By}</h4>
              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(119, 118, 118, 1)",
                  fontWeight: "500",
                }}
              >
                {item.reviewed_email}
              </p>
            </td>
          </tr>
        ) : (
          <tr>
            <td>
              <div className="user-link">
                <div>
                  <h4>{item.name}</h4>
                  <p
                    style={{
                      color: "rgba(119, 118, 118, 1)",
                      fontWeight: "500",
                    }}
                  >
                    {item.email}
                  </p>
                </div>
                <img
                  src={linkIcon}
                  alt="external link"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </td>
            <td
              className={
                (item.level === "Medium" && "medium") ||
                (item.level === "Low" && "low") ||
                (item.level === "High" && "high")
              }
            >
              <div></div>
              {item.level}
            </td>
            <td>{item.Trigger_reason}</td>
            <td>{item.In_queue}</td>
            <td style={{ color: "rgba(119, 118, 118, 1) ", fontWeight: "500" }}>
              {item.date}
            </td>
            <td>
              <h4>{item.Previously_reviewed}</h4>
              {item.reviewed_Date && (
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(119, 118, 118, 1)",
                    fontWeight: "500",
                  }}
                >
                  {item.reviewed_Date}
                </p>
              )}
            </td>
          </tr>
        )
      )}
    </table>
  );
};

export default Table;
