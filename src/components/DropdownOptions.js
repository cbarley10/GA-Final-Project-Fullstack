import React from "react";

const DropdownOptions = props => {
  const { handleFilterChange } = props;
  const speciesOptions = [
    "human",
    "alien",
    "humanoid",
    "unknown",
    "poopybutthole",
    "mytholog",
    "robot",
    "disease",
    "cronenberg",
    "parasite",
    "animal",
    "vampire"
  ];
  const status = ["alive", "dead", "unknown"];
  return (
    <div>
      <div>
        <label htmlFor="species">Filter By Species: </label>
        <select id="species" onChange={handleFilterChange}>
          {speciesOptions.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
          }
        </select>
      </div>
      <div>
        <label htmlFor="status">Filter By Status: </label>
        <select id="status" onChange={handleFilterChange}>
          {status.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownOptions;
