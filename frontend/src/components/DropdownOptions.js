import React from "react";
import { SPECIES_OPTIONS, STATUS } from "../constants";

const DropdownOptions = props => {
  const { handleFilterChange } = props;
  return (
    <div>
      <div>
        <select id="species" onChange={handleFilterChange}>
          <option key="-100" value="-----">
            -- Filter By Species --
          </option>
          {SPECIES_OPTIONS.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
          }
        </select>
      </div>
      <div>
        <select id="status" onChange={handleFilterChange}>
          <option key="-100" value="-----">
            -- Filter By Status --
          </option>
          {STATUS.map((item, index) => (
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
