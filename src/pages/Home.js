import update from "immutability-helper";
import React, { useState, useCallback } from "react";
import { Row, Col, Button, Dropdown, Space } from "antd";
import {
  DownOutlined,
  FontSizeOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";
import { Block } from "../components";
import { ItemTypes } from "../components/DnDConstants";
import { useDrop } from "react-dnd";

const Home = () => {
  const newBlockRow = {
    blockId: Date.now(),
    blockContent: "",
  };
  const [blockRows, setBlockRows] = useState([
    {
      blockId: Date.now(),
      blockContent: "",
    },
  ]);

  const handleMenuClick = ({ key }) => {
    switch (key) {
      case "add-text":
        setBlockRows([...blockRows, newBlockRow]);
        break;
      case "add-image":
        console.log("Handle add-image row click!");
        break;
      default:
        console.log("Handle invalid click!");
    }
  };

  const items = [
    {
      label: "Add Text",
      key: "add-text",
      icon: <FontSizeOutlined />,
    },
    {
      label: "Add Image",
      key: "add-image",
      icon: <AreaChartOutlined />,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const renderBlockRows = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const moveBlock = useCallback((dragIndex, hoverIndex) => {
      setBlockRows((prevBlocks) =>
        update(prevBlocks, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevBlocks[dragIndex]],
          ],
        })
      );
    }, []);

    return blockRows.map((block, index) => {
      return (
        <Block
          id={block.blockId}
          key={index}
          index={index}
          inputValue={block.blockContent}
          moveBlock={moveBlock}
        />
      );
    });
  };

  return (
    <>
      <Row>
        <Col xs={0} md={2} lg={2}></Col>
        <Col xs={24} md={20} lg={20}>
          <Row
            style={{
              marginBottom: "10px",
            }}
          >
            <Col span={20}>
              <Dropdown menu={menuProps}>
                <Button type='primary'>
                  <Space>
                    Add Row
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </Col>
          </Row>
          <Space
            direction='vertical'
            size='small'
            style={{
              display: "flex",
            }}
          >
            {renderBlockRows()}
          </Space>
        </Col>
        <Col xs={0} md={2} lg={2}></Col>
      </Row>
    </>
  );
};

export default Home;
