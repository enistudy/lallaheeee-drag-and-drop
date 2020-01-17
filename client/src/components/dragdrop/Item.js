import React, { memo } from 'react';
import * as Styled from './style';

const DragItem = ({
  index,
  onDragStart,
  onDragEnter,
  onDragEnd,
  dragging,
}) => (
  index && (
    <Styled.Item
      draggable
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      dragging={dragging}
    >
      {index}
    </Styled.Item>
  )
);

export default memo(DragItem);
