import React, { useState } from 'react';
import * as Styled from './style';

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
  const [dragItem, setDragItem] = useState(null);
  const [dragList, setDragList] = useState(data);

  const handleDragStart = (e, i) => {
    e.dataTransfer.setData('text/html', e.target);
    setDragItem(parseInt(e.target.textContent, 10));
    setDraggedIdx(i);
  };

  const handleDragEnter = (e, idx) => {
    const newList = dragList.filter((item, i) => i !== draggedIdx);
    newList.splice(idx, 0, dragList[draggedIdx]);

    setDraggedIdx(idx);
    setDragList(newList);
  };

  const handleDragEnd = () => {
    setDraggedIdx(null);
    setDragItem(null);
  };

  const ListMap = dragList.map((item, i) => (
    <li
      key={`drag-id: ${item.index}`}
      draggable
      onDragStart={e => handleDragStart(e, i)}
      onDragEnter={e => handleDragEnter(e, i)}
      onDragEnd={handleDragEnd}
    >
      <Styled.Item dragging={dragItem === item.index}>{item.index}</Styled.Item>
    </li>
  ));

  return <Styled.DropZone>{ListMap}</Styled.DropZone>;
};

export default React.memo(DragList);
