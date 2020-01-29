import { useState, useEffect } from 'react';

const useDroppable = ({ ref, onDrop }) => {
  const [dropstate, setDropState] = useState('droppable');

  const dragOver = e => {
    e.preventDefault();
  };

  const drop = e => {
    e.preventDefault();
    onDrop(e.dataTransfer.getData('source'));
    setDropState('dropped');
  };

  const removeEvent = ele => () => {
    ele.removeEventListener('drop', drop);
    ele.removeEventListener('dragover', dragOver);
  };

  const addEvent = () => {
    const ele = ref.current;
    if (!ele) return;

    ele.addEventListener('drop', drop);
    ele.addEventListener('dragover', dragOver);

    return removeEvent(ele);
  };

  useEffect(addEvent, [onDrop]);

  return {
    dropstate,
  };
};

export default useDroppable;
