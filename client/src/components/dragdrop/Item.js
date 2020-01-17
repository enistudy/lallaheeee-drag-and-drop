import React from 'react';
import * as Styled from './style';

const DragItem = ({
  index,
  onDragStart,
  onDragEnter,
  onDragEnd,
}) => (
  index && (
    <Styled.Item
      draggable
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
    >
      {index}
    </Styled.Item>
  )
);

export default DragItem;
