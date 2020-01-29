import React, { useRef } from 'react';
import useDraggable from '../hooks/useDraggable';

const Item = ({ id, contents }) => {
  const dragRef = useRef();

  const { isDragging } = useDraggable({
    id,
    ref: dragRef,
  });

  return (
    <article className="item" ref={dragRef}>
      <h3>{contents}</h3>
      <p>{`id : #${id}`}</p>
    </article>
  );
};

export default React.memo(Item);
