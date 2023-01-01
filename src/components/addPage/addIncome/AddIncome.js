import React from 'react';
import './AddIncome.css';
import {
  Form,
  Input,
  Button,
} from 'antd';

const AddIncome = () => {
  return (
    <Form>
      <Form.Item
        label="Amount Holder Name: "
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Amount to be added: "
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type='primary' solid block>Submit</Button>
      </Form.Item>
    </Form>
  )
}

export default AddIncome;