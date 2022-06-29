import React from "react";
import { Select } from "antd";
const { Option } = Select;

const MySelect = ({ setSelected }) => {

  const handleChange = (value) => {
    setSelected(value)
  };

  return (
    <Select
      defaultValue="all"
      style={{
        width: 200,
      }}
      onChange={handleChange}
    >
      <Option value="smartphones">smartphones</Option>
      <Option value="laptops">laptops</Option>
      <Option value="fragrances">fragrances</Option>
      <Option value="skincare">skincare</Option>
      <Option value="groceries">groceries</Option>
      <Option value="home-decoration">home-decoration</Option>
    </Select>
  );
};

export default MySelect;
