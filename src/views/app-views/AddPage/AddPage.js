import React from 'react';
import {
  Card,
  Tabs,
} from 'antd';


const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: `Tab Title ${id}`,
    key: id,
    children: (
      <>
        <p>Content of Tab Pane {id}</p>
        <p>Content of Tab Pane {id}</p>
        <p>Content of Tab Pane {id}</p>
      </>
    ),
  };
});

const AddPage = () => {
  return (
    <section className='single-page'>
      <Card>
        <Tabs type="card" items={items} />
      </Card>
    </section>
  )
}

export default AddPage;