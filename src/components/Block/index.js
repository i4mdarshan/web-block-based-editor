import React, { useState, useRef } from "react";
import { ItemTypes } from "./../DnDConstants";
import { useDrag, useDrop } from "react-dnd";
import { Button, Col, Input, Row, Space } from "antd";
import { HolderOutlined, DeleteOutlined } from "@ant-design/icons";
const { TextArea } = Input;

const index = ({ id, index, inputValue, moveBlock }) => {
  // const {
  //   components: { textAreaStyles },
  // } = theme.useToken();

  const blockStyle = {
    fontWeight: "bold",
    cursor: "move",
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(inputValue);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = useRef(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.BLOCK,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingBlock = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingBlock.bottom - hoverBoundingBlock.top) / 2;

      // Determine mouse position
      const mousePosition = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = mousePosition.y - hoverBoundingBlock.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveBlock(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BLOCK,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{ ...blockStyle, opacity }}
      data-handler-id={handlerId}
    >
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
              <Button type='text' icon={<DeleteOutlined />} danger />
            </div>
          </Col>
        </Space.Compact>
      </Row>
    </div>
  );
};

export default index;
