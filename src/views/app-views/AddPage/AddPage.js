import React from 'react';
import {
  Card,
  Tabs,
} from 'antd';
import {
  AddExpense,
  AddIncome,
} from '../../../components'
const { Tabpane } = Tabs;

const AddPage = () => {
  return (
    <section className='single-page'>
      <Card>
        {/* <Tabs type="card" items={items} /> */}
        <Tabs
          type='card'
          centered
        >
          <Tabpane key="1" tab="Add Amount">
            <AddIncome />
          </Tabpane>
          <Tabpane key="2" tab="Add Expense">
            <AddExpense />
          </Tabpane>
        </Tabs>
      </Card>
    </section>
  )
}

export default AddPage;