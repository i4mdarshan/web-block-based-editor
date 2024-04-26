import React, { useState } from "react";
import { Button, Col, Input, Row, Space } from "antd";
import {
  HolderOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
const { TextArea, Group } = Input;

const index = ({ inputValue }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(inputValue);
  return (
    <div>
      <Row>
        <Space.Compact size='small' block>
          <Col xs={24} md={24}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button type='text'>
                <HolderOutlined />
              </Button>
              <TextArea
                variant='borderless'
                placeholder='Enter your text here ...'
                onChange={(e) => setValue(e.target.value)}
                autoSize
              />
              <Button type='text' icon={<DeleteOutlined />} danger/>
            </div>
          </Col>
        </Space.Compact>
      </Row>
    </div>
  );
};

export default index;
