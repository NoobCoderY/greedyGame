import React, { useEffect, useState } from "react";
import "./card.css";
import { useSelector } from "react-redux";

const Card2 = ({ col1 }) => {
  const [whdta, setwhdata] = useState([]);
  const state = useSelector((state) => state);
  console.log(state);
  useEffect(() => {
    setwhdata(state.Main_data.data.data?.slice(0,9));
    setSortData();
  }, [state.Main_data.data.data]);

  const [responseSort, setResponseSort] = useState([]);
  const [requestSort, setrequestSort] = useState([]);
  const [FillSort, setFillSort] = useState([]);
  const [CtrSort, setCtrSort] = useState([]);
  const setSortData = () => {
    setrequestSort([]);
    setResponseSort([])
    whdta?.map((p) => {
      let a=p.responses;
      let b=p.requests
      let c=(a/b)*100;
      setResponseSort((old) => [...old, p.responses]);
      setrequestSort((prev)=>[...prev,p.requests])
      setFillSort((prev)=>[...prev,c])
    });
  };
console.log("yash1",FillSort.sort())
  return (
    <>
      <div>
        <table className="GeneratedTable">
          <thead>
            <tr>
              {col1.map((p, key) => {
                return <th>{p}</th>;
              })}
            </tr>
            {col1.includes("date")?<td>
              {whdta?.map((q, key) => {
                return <tr>{q?.date.slice(0,10)}</tr>;
              })}
            </td>:""}
            
            <td>
              {whdta?.map((p, key) => {
                return <tr>{p?.app_id}</tr>;
              })}
            </td>
            
              {col1.includes("requests")?
               <td>{requestSort.sort()?.map((p, key) => {
                    return <tr>{p}</tr>;
                  })}
               </td>:"mm"}
             
               {col1.includes("responses")?
               <td>{responseSort.sort()?.map((p, key) => {
                    return <tr>{p}</tr>;
                  })}
               </td>:"mm"}
               {col1.includes("impression")?
               <td>{whdta?.map((p, key) => {
                    return <tr>{p?.impressions}</tr>;
                  })}
               </td>:""}
               {col1.includes("Fill Rate")?
               <td>{FillSort?.map((p, key) => {
                const str_a = p.toString();
                const result = Number(str_a.slice(0, 7));
                    return <tr>{result}%</tr>;
                  })}
               </td>:""}
               {col1.includes("CTR")?
               <td>{FillSort?.map((p, key) => {
                const str_a = p.toString();
                const result = Number(str_a.slice(0, 7));

                    return <tr>{result}%</tr>;
                  })}
               </td>:""}
            
          </thead>
        </table>
      </div>
    </>
  );
};

export default Card2;
