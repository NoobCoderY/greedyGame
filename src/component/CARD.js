import React, { useEffect, useState } from "react";
import { fetchMainData } from "../redux/slice/MainData";
import { useDispatch, useSelector } from "react-redux";
import "./card.css";
import Card2 from "./Card2";

const Card = () => {
  const[dateVal,setdateVal]=useState("2017-06-01")
  const[dateVal2,setdate2Val]=useState("2017-06-03")
  
  
  let arr2=["date",
  "app_id",
  " request",
  "response",
  "impression",
  "Fill Rate ",
  "CTR"]
  const [arr, setarr] = useState([
    "date",
      "app_id",
      " request",
      "response",
      "impression",
      
  ])
  const [col, setCol] = useState([
    "date",
    "app_id",
    " request",
    "response",
    "Impression",
    "Fill Rate ",
    "CTR",
  ]);
  const [col1, setCol1] = useState([
    "date",
    "app_id",
    " request",
    "response",
    "impression",
  ]);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchMainData(dateVal,dateVal2))

  },[dateVal])
  console.log(dateVal)
  
  
  const handleChange = (key) => {
    let arr1=[...arr]
    if (arr1.includes(key)) {
      console.log(key)
      arr1 = arr1.filter((m) => {
        return m !== key;
      });
      setarr(arr1)
      console.log( "yash1",arr)
      
    } else {
      let index=arr2.indexOf(key);
      console.log("index",index)
      console.log( "yash2",arr)
      setarr([...arr.slice(0,index),key, ...arr.slice(index)])
    }
  };
  const handleChange1 = () => {
    setCol1([arr]);
  };
  // console.log("yash", col1);
  // console.log("date",dateVal)
  

  return (
    <div>
      <h2> Analytics</h2>
      <div className="header1">
        <div className="date">
          <input type="date" value={dateVal} onChange={(e)=>{setdateVal(e.target.value)}}></input>
          <input type="date" value={dateVal2} onChange={(e)=>{setdate2Val(e.target.value)}} 
          style={{marginLeft:"10px"}}></input>
        </div>
        {/* <div className="setting">
          <h4>setting</h4>
        </div> */}
      </div>
      <div className="column">
        {col.map((key) => {
          return (
            <div
              className="subcolumn"
              onClick={() => {
                handleChange(key);
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
