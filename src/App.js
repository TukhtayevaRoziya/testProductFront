import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import MySearch from "./components/search/Search";
import MySelect from "./components/select/Select";
import AllProducts from "./components/products/AllProducts";

import "./App.css";
import "antd/dist/antd.css";

const App = () => {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <div className="header">
                <MySearch selected={selected} setData={setData} />
                <br />
                <MySelect setSelected={setSelected} />
              </div>
              <AllProducts data={data} />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
