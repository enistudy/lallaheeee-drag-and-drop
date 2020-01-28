import { useState, useEffect } from 'react';

const useDroppable = ({ ref, onDrop }) => {
  const [dropstate, setDropState] = useState('droppable');

  const drop = e => {
    e.preventDefault();
    onDrop(e.dataTransfer.getData('source'));
    setDropState('dropped');
  };

  const removeEvent = ele => () => {
    ele.removeEventListener('drop', drop);
  };

  const addEvent = () => {
    const ele = ref.current;
    if (!ele) return;

    ele.addEventListener('drop', drop);

    return removeEvent(ele);
  };

  useEffect(addEvent, []);

  return {
    dropstate,
  };
};

export default useDroppable;
