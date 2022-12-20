import React from 'react';
import {
  Card,
  Row,
  Col,
  Tabs,
} from 'antd';
import 'antd/dist/reset.css';

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

const Home = () => {
  return (
    <section className='single-page'>
      <Card size="small" className='expenses-card-ui'>
        <Row gutter={[12, 12]} align={'stretch'}>
          <Col xs={24}>
            <Card size="small" >
              <div className='total-title'>
                TOTAL
              </div>
              <div className='amount-text'>
                50,000
              </div>
            </Card>
          </Col>
          <Col xs={12}>
            <Card size="small" >
              <div className='sub-title'>
                REMAINING
              </div>
              <div className='amount-text'>
                50,000
              </div>
            </Card>
          </Col>
          <Col xs={12}>
            <Card size="small" style={{width: "100%",}}>
              <div className='sub-title'>
                SPENT
              </div>
              <div className='amount-text'>0</div>
            </Card>
          </Col>
        </Row>
      </Card>

      <Card>
        <Tabs type="card" items={items} />
      </Card>
    </section>
  )
}

export default Home;