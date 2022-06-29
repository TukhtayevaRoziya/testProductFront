import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Image, Pagination } from "antd";

import style from "./Products.module.css";
import Product from "./Product";

const AllProducts = ({ data }) => {
  const navigate = useNavigate();
  const [id, setId] = useState([]);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(3);

  useEffect(() => {}, []);
  const total = data && data.products && data.products.length;

  function HandleChange(page) {
    setCurrent(page);
    setMinIndex((page - 1) * 3);
    setMaxIndex(page * 3);
  }
  if (data === []) {
    return <>Eror</>;
  }

  const dataMap =
    data &&
    data.products &&
    data.products.map((item, index) => {
      if (index >= minIndex && index < maxIndex) {
        const onClick = () => {
          setId(item);
          navigate("item/" + item.id);
        };
        return (
          <div className={style.product_map} key={item.id}>
            <span className={style.product_map__span}></span>
            <span className={style.product_map__span}></span>
            <span className={style.product_map__span}></span>
            <span className={style.product_map__span}></span>
            <Image src={item.thumbnail} />
            <div className={style.product_map__text}>
              <h1>
                <strong> Title:</strong> {item.title}
              </h1>
              <h3>
                <strong>Description:</strong>{" "}
                {item.description.substring(0, 30) + "..."}
              </h3>
            </div>
            <button onClick={onClick}>See more</button>
          </div>
        );
      }
    });

  return (
    <div className={style.product}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {dataMap}

              <Pagination
                pageSize={3}
                current={current}
                total={total}
                onChange={HandleChange}
                style={{
                  textAlign: "center",
                  marginTop: "1rem",
                  marginBottom: "3rem",
                }}
              />
            </>
          }
        />
        <Route path="/item" element={<Product data={id} />}>
          <Route path=":id" element={<Product data={id} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AllProducts;
