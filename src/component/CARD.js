import React, { useEffect, useState } from "react";
import { fetchMainData } from "../redux/slice/MainData";
import { useDispatch, useSelector } from "react-redux";
import "./card.css";
import Card2 from "./Card2";
import { GoSettings } from "react-icons/go";

const Card = () => {
  const [dateVal, setdateVal] = useState("2017-06-01");
  const [dateVal2, setdate2Val] = useState("2017-06-03");

  let arr2 = [
    "date",
    "app_id",
    "requests",
    "responses",
    "impression",
    "Fill Rate",
    "CTR",
  ];
  const [arr, setarr] = useState([
    "date",
    "app_id",
    "requests",
    "responses",
    "impression",
  ]);
  const [col, setCol] = useState([
    "date",
    "app_id",
    "requests",
    "responses",
    "impression",
    "Fill Rate",
    "CTR",
  ]);
  const [col1, setCol1] = useState([
    "date",
    "app_id",
    "requests",
    "responses",
    "impression",
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMainData(dateVal, dateVal2));
  }, [dateVal]);
  console.log(dateVal);

  const handleChange = (key, idx) => {
    let arr1 = [...arr];
    if (arr1.includes(key)) {
      console.log(key);
      arr1 = arr1.filter((m) => {
        return m !== key;
      });
      setarr(arr1);
      console.log("yash1", arr);
    } else {
      let index = arr2.indexOf(key);
      console.log("index", index);
      console.log("yash2", arr);
      setarr([...arr.slice(0, index), key, ...arr.slice(index)]);
    }
  };
  const handleChange1 = () => {
    setCol1(arr);
  };

  return (
    <div>
      <h2 style={{marginLeft:"2rem"}}> Analytics</h2>
      <div className="header1">
        <div className="date">
          <input
            type="date"
            value={dateVal}
            onChange={(e) => {
              setdateVal(e.target.value);
            }}
          ></input>
    
        </div>
        <div className="setting">
          <button>
            {" "}
            <GoSettings style={{ width: "50px !imp" }}></GoSettings>setting
          </button>
        </div>
      </div>
      <div className="column">
        {col.map((key, idx) => {
          return (
            <div
              className="subcolumn"
              style={{
                borderLeft: col1.includes(key) ? "" : "5px blue",
              }}
              onClick={(e) => {
                handleChange(key, idx);
              }}
            >
              {key}
            </div>
          );
        })}
      </div>
    
      <button
        className="btn"
        onClick={() => {
          handleChange1();
        }}
      >
        {" "}
        Apply Changes
      </button>
      
      <Card2 col1={col1}></Card2>
      {/* <button onClick={(e) => dispatch(fetchMainData(dateVal,dateVal2))}>card1</button> */}
    </div>
  );
};

export default Card;
