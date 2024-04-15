import React from "react";
import { Row, Col, Button, Dropdown, Space } from "antd";
import { DownOutlined,FontSizeOutlined,AreaChartOutlined } from '@ant-design/icons';

const Home = () => {

  const handleMenuClick = (e) => {
    console.log('click', e);
  };
  const items = [
    {
      label: 'Add Text',
      key: 'add-text',
      icon: <FontSizeOutlined />,
    },
    {
      label: 'Add Image',
      key: 'add-image',
      icon: <AreaChartOutlined />,
    }
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <Row>
        <Col xs={2} md={2} lg={2}>
          
        </Col>
        <Col
          xs={20}
          md={20}
          lg={20}
        >
          <Row >
            <Col span={20} offset={10}>
              <Dropdown menu={menuProps}>
                <Button type="primary">
                  <Space>
                      Add Row
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </Col>
          </Row>
        </Col>
        <Col xs={2} md={2} lg={2}>
          
        </Col>
      </Row>
    </>
  );
};

export default Home;
