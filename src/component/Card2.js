import React, { useEffect, useState } from "react";
import "./card.css";
import { useSelector } from "react-redux";
import { asc, desc } from "./SortingFunction";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Card2 = ({ col1 }) => {
  console.log("yash3", col1);
  const [whdta, setwhdata] = useState([]);
  const state = useSelector((state) => state);

  console.log("state", state);
  useEffect(() => {
    setwhdata(state.Main_data.data.data);
    setSortData();
  }, [state.Main_data.data.data]);

  console.log("yash2", whdta);
  const [responseSort, setResponseSort] = useState([]);
  const [requestSort, setrequestSort] = useState([]);
  const [FillSort, setFillSort] = useState([]);
  const setSortData = () => {
    setrequestSort([]);
    setResponseSort([]);
    setFillSort([]);
    whdta?.map((p) => {
      let a = p.responses;
      let b = p.requests;
      let c = (a / b) * 100;
      setResponseSort((old) => [...old, p.responses]);
      setrequestSort((prev) => [...prev, p.requests]);
      setFillSort((prevv) => [...prevv, c]);
    });
  };
  console.log("yash2", whdta);
  console.log(responseSort);
  // console.log("yash1", whdta?.impressions);
  return (
    <>
      <div className="Main_table">
        <table className="GeneratedTable">
          <thead>
            <tr>
              {col1.map((p, key) => {
                return (
                  <th>
                    {p === "responses" ? (
                      <div
                        style={{
                          display: "flex",
                          alignItem: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <span>
                          <FaArrowDown
                            onClick={() => {
                              setResponseSort(asc(responseSort));
                            }}
                            style={{ cursor: "pointer" }}
                          ></FaArrowDown>
                        </span>
                        <span>
                          <FaArrowUp
                            onClick={() => {
                              setResponseSort(desc(responseSort));
                            }}
                            style={{ cursor: "pointer" }}
                          ></FaArrowUp>
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                    {p}
                  </th>
                );
              })}
            </tr>
            {col1.includes("date") ? (
              <td
                style={{
                  display: "inlineBlock",
                  width: "127px",
                  height: " 233px",
                }}
              >
                {whdta?.map((q, key) => {
                  return <tr>{q?.date.slice(0, 10)}</tr>;
                })}
              </td>
            ) : (
              ""
            )}
            {col1.includes("app_id") ? (
              <td>
                {whdta?.map((p, key) => {
                  return <tr>{p?.app_id}</tr>;
                })}
              </td>
            ) : (
              ""
            )}

            {console.log(col1.includes("requests"))}
            {col1.includes("requests") ? (
              <td>
                {requestSort.sort()?.map((p, key) => {
                  return <tr>{p}</tr>;
                })}
              </td>
            ) : (
              ""
            )}

            {col1.includes("responses") ? (
              <td>
                {responseSort?.map((p, key) => {
                  console.log(p);
                  return <tr>{p}</tr>;
                })}
              </td>
            ) : (
              ""
            )}
            {col1.includes("impression") ? (
              <td>
                {whdta?.map((p, key) => {
                  return <tr>{p?.impressions}</tr>;
                })}
              </td>
            ) : (
              ""
            )}
            {col1.includes("Fill Rate") ? (
              <td>
                {FillSort?.map((p, key) => {
                  const str_a = p.toString();
                  const result = Number(str_a.slice(0, 7));
                  return <tr>{result}%</tr>;
                })}
              </td>
            ) : (
              ""
            )}
            {col1.includes("CTR") ? (
              <td>
                {FillSort?.map((p, key) => {
                  const str_a = p.toString();
                  const result = Number(str_a.slice(0, 7));

                  return <tr>{result}%</tr>;
                })}
              </td>
            ) : (
              ""
            )}
          </thead>
        </table>
      </div>
    </>
  );
};

export default Card2;
