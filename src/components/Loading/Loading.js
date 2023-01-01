import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import './Loading.css';

const Loading = () => {
  return (
    <div className='loading-spinner'>
      <Spin
        indicator={
          <LoadingOutlined
            spin
            className='loading-icon'
          />
        }
      />
    </div>
  )
}

export default Loading;