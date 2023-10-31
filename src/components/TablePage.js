import React from 'react';
import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    name: 'Khuong1',
    age: 20,
    address: 'D1, HCM',
  },
  {
    key: '2',
    name: 'Khuong2',
    age: 25,
    address: 'Paris',
  },
  {
    key: '2',
    name: 'Khuong3',
    age: 19,
    address: 'Tan Binh',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

function TablePage() {
  return (
    <div>
      <h2>Table Page</h2>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default TablePage;
