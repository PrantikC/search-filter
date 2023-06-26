import React, { useEffect, useState } from 'react'
import "./app.css"

const App = () => {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=100");
        const resJson = await response.json();
        setData(resJson.results);
        setFilteredData(resJson.results);
      } catch(error) {
        console.error("Couldn't fetch data", error);
      }
    }
    fetchData();
  }, [])

  const filterChangeHandler = (e) => {
    setFilterText(e.target.value);
    filteredDataHandler(e.target.value);
  }

  const filteredDataHandler = (text) => {
    const filtered = filteredData.filter((data) => data.name.first.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(filtered);
  }

  const resetHandler = () => {
    setFilteredData([]);
  }

  return (
    <div>
      <input type="text" placeholder='Search...' className='search' onChange={filterChangeHandler} value={filterText}/>
      <button onClick={resetHandler}>Reset</button>
      <ul className='list'>
        {filteredData.map((user) => <li className='listItem' key={user.login.uuid}>{user.name.first}</li>)}
      </ul>
    </div>
  )
}

export default App