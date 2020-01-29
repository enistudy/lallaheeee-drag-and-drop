import React, { useRef } from 'react';
import useDroppable from '../hooks/useDroppable';

const Container = ({ title, children, onDrop }) => {
  const dropRef = useRef();

  const { dropState } = useDroppable({
    ref: dropRef,
    onDrop,
  });

  return (
    <section className="container" ref={dropRef}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default React.memo(Container);
