import React, { useEffect } from "react";
import { Input, Space } from 'antd';
import { instance } from './../../api/api';

const { Search } = Input;


const MySearch = ({selected, setData}) => {
  useEffect(() => {
    instance.get(`product?category=${selected}`).then(res=>{
      setData(res.data);
    })
  }, [selected, setData]);

  const onSearch = (value) => {
    if (!selected || value) {
      instance.get(`product?name=${value}&category=${selected}`).then(res=>{
        setData(res.data)
      })
    }else{
      instance.get(`product?category=${selected}`).then(res=>{
        setData(res.data);
      })
    }
  }  

  return (
    <Space direction="vertical" style={{width: '40%'}}>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </Space>
  );
};

export default MySearch;
