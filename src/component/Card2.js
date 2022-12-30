import React, { useEffect, useState } from "react";
import "./card.css";
import {useSelector } from "react-redux";

const card2 = ({ col1 }) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[whdata,setwhdata]=useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const state = useSelector ((state) => state);
  console.log(state);
   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(() => {
    const getUsers = async () => {
      const users = await state;
      setwhdata(users);
    };
  
    getUsers(); // run it, run it
  
    return () => {
      // this now gets called when the component unmounts
    };
  }, []);
  return (
    <>
      <div>
        <table  style={{border:"1" ,width:"100%"}}>
        <thead>  
          <tr>
            {col1.map((p,key) => {
              return <th>{p}</th>;
            })}
          </tr>
          <tr>
            {whdata.map((q,key) => {
              return <th>{q?.app_id}</th>;
            })}
          </tr>
          
          </thead>
        </table>
      </div>
    </>
  );
};

export default card2;
