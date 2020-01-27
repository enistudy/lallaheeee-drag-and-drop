import React from 'react';

const Draggable = ({
  draggableId,
  onDragStart,
  onDragEnter,
  onDragEnd,
}) => (
    <article
      draggable
      className="draggable"
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
    >
      <h1> Item </h1>
      <p>{`# ${draggableId}`}</p>
    </article>
);

export default React.memo(Draggable);
