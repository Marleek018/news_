import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { CiSearch } from "react-icons/ci";
import Card from "../../Components/Card/Card";
import axios from "axios";

const Homepage = () => {
  const [data, setData] = useState("apple");
  const [apiData, setApiData] = useState([]);
  const sliceData = [...apiData].slice(0, 6);
  const handleChange = (e) => {
    setData(e.target.value);
  };
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${data}&from=2024-06-26&to=2024-06-26&sortBy=popularity&apiKey=f195033f190a49209c63eee0c942b451`
      )
      .then((res) => {
        setApiData(res.data.articles);
      })
      .catch((err) => {});
  }, [data]);
  return (
    <div>
      <h3 className="htext">Filter by keywords</h3>
      <div className="searchbox-cont">
        <CiSearch className="search-icon" />
        <input
          value={data}
          onChange={handleChange}
          className="search-box"
          type="search"
          placeholder="The most successful IT companies in 2020"
        />
      </div>
      <div>
        {sliceData.map((element, i) => (
          <Card key={i} element={element} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
