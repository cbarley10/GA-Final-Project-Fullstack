import React from "react";

const Mortys = ({ data }) => {
  return (
    <div className="container mortys">
      {data &&
        data.map(item => {
          return (
            <div key={item.id} className="morty">
              <h1>{item.name} </h1>
              <p>
                Status:{" "}
                <span className={item.status.toLowerCase()}>{item.status}</span>
              </p>
              <img src={item.image} alt={item.image} />
            </div>
          );
        })}
    </div>
  );
};

export default Mortys;
