import { useState } from "react";
import "./App.css";
const Shopping = ({ data, increment, decrement }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id} className="d-flex justify-content-between p-3">
            <div className="phone-image">
              <img src={item.img} alt={item.title} />
            </div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.price}$</p>
            </div>
            <div className="counting">
              <div className="plus" onClick={() => increment(item.id)}>
                +
              </div>
              <div>{item.count}</div>
              <div className="plus" onClick={() => decrement(item.id)}>
                -
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shopping;
