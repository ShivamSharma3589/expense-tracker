import React from 'react';
import {
  Card,
  Tabs,
  Form,
  Input,
  Button,
} from 'antd';
const { Tabpane } = Tabs;

const AddPage = () => {
  return (
    <section className='single-page'>
      <Card>
        {/* <Tabs type="card" items={items} /> */}
        <Tabs type='card'>
          <Tabpane key="1" tab="Add Amount">
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
          </Tabpane>
          <Tabpane key="2" tab="Add Expense">
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
          </Tabpane>
        </Tabs>
      </Card>
    </section>
  )
}

export default AddPage;