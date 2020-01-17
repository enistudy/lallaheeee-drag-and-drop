import React, { useState } from 'react';
import * as Styled from './style';
import DragItem from './Item';

const data = [
  { index: 1 },
  { index: 2 },
  { index: 3 },
  { index: 4 },
  { index: 5 },
  { index: 6 },
];

const DragList = () => {
  const [draggedIdx, setDraggedIdx] = useState(null);
  const [dragList, setDragList] = useState(data);

  const handleDragStart = (e, i) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target);
    setDraggedIdx(i);
  };

  const handleDragEnter = idx => {
    const newList = dragList.filter((item, i) => i !== draggedIdx);
    newList.splice(idx, 0, dragList[draggedIdx]);

    setDraggedIdx(idx);
    setDragList(newList);
  };

  const handleDragEnd = () => {
    setDraggedIdx(null);
  };

  return (
    <Styled.DropZone>
      {dragList.map((item, i) => (
        <DragItem
          key={item.index}
          index={item.index}
          draggable
          onDragStart={e => handleDragStart(e, i)}
          onDragEnter={() => handleDragEnter(i)}
          onDragEnd={handleDragEnd}
        />
      ))}
    </Styled.DropZone>
  );
};

export default DragList;
