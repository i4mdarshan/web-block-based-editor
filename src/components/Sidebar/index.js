import React, { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
const index = ({ collapsed }) => {
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div style={{ margin: '15px 10px', height: '30px', background: 'black', borderRadius: '3px' }}></div>
        <Menu
          mode='inline'
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <RightOutlined />,
              label: "Page 1",
            },
            {
              key: "2",
              icon: <RightOutlined />,
              label: "Page 2",
            },
            {
              key: "3",
              icon: <RightOutlined />,
              label: "Page 3",
            },
          ]}
        />
      </Sider>
    </>
  );
};

export default index;
