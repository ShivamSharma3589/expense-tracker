import React from 'react';
import './AddExpense.css';
import {
  Form,
  Input,
  Button,
} from 'antd';

const AddExpense = () => {
  return (
    <Form>
      <Form.Item
        label="Expense Name:"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Amount:"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description:"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type='primary' block>Submit</Button>
      </Form.Item>
    </Form>
  )
}

export default AddExpense;