import React, { useEffect, useState } from "react";
import "./CloseAccount.css";
const CloseAccount = ({ setClose }) => {
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");
  const [fee, setFee] = useState(false);
  const [closeBtn, setCloseBtn] = useState(false);

  useEffect(() => {
    if (email && file && reason && note && fee) {
      setCloseBtn(true);
    }
  }, [email, file, reason, note, fee]);

  return (
    <div className="modal-background">
      <div className="close-container">
        <div className="top">
          <h2>Close account</h2>
          <span
            class="material-symbols-outlined"
            style={{ cursor: "pointer" }}
            onClick={() => setClose(false)}
          >
            close
          </span>
        </div>
        <div>
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="radio">
          <p>Want to file UAR</p>
          <input
            type="radio"
            name="file_name"
            value="yes"
            onChange={(e) => setFile(e.target.value)}
          />
          <p>Yes</p>
          <input
            type="radio"
            name="file_name"
            value="no"
            onChange={(e) => setFile(e.target.value)}
          />
          <p>No</p>
        </div>
        <div>
          <label>Reason</label>
          <input type="text" onChange={(e) => setReason(e.target.value)} />
        </div>
        <div>
          <label>Note</label>
          <textarea
            style={{ height: "65px", width: "434px" }}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>
        <div className="botton">
          <div className="botton-radio">
            <input
              type="radio"
              value="fee"
              onChange={(e) => setFee(e.target.value)}
            />
            <label> Charge closure fee</label>
          </div>
          <button className={closeBtn ? "able" : "disable"}>
            Close Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloseAccount;
