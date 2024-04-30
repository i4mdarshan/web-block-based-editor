import update from "immutability-helper";
import React, { useCallback } from "react";
import { Block } from "../components";

const BlockList = ({ blocks, setBlocks }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const moveBlock = useCallback((dragIndex, hoverIndex) => {
    setBlocks((prevBlock) =>
       (prevBlock, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevBlock[dragIndex]],
        ],
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {blocks.map((block, index) => {
        return (
          <Block
            id={block.blockId}
            index={index}
            key={index}
            inputValue={block.blockContent}
            moveBlock={moveBlock}
          />
        );
      })}
    </div>
  );
};

export default BlockList;
