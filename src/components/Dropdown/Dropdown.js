import React, { useState } from "react";
import "./dropdown.css";
const Dropdown = ({ options, label, setLevel, level, trigger, setTrigger }) => {
  const [isOpen, setIsOpen] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOnClick = (option) => {
    if (setLevel) {
      setLevel(option);
    } else {
      setTrigger(option);
    }
    if (option === "All") {
      setLevel("");
    }
    setIsOpen(false);
  };
  return (
    <div className="droupdown">
      <div className="droupdown-header" onClick={toggleDropdown}>
        {label === "Risk level" ? (
          <p>{(setLevel && level) || label}</p>
        ) : (
          <p>{trigger || label}</p>
        )}

        {isOpen ? (
          <span class="material-symbols-outlined">expand_less</span>
        ) : (
          <span class="material-symbols-outlined">keyboard_arrow_down</span>
        )}
      </div>
      {isOpen && (
        <ul
          className={
            label === "Risk level" ? "dropdown-list le" : "dropdown-list tg"
          }
        >
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOnClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
