import { useState, useEffect } from 'react';

const useDraggable = ({
  id,
  ref,
  effect,
  onDragStart,
  onDragOver,
  onDragEnd,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const dragStart = e => {
    setIsDragging(true);
    e.dataTransfer.setData('source', id);
    e.dataTransfer.dropEffect = effect;
    onDragStart && onDragStart();
  };

  const dragEnd = () => {
    setIsDragging(false);
    onDragEnd && onDragEnd();
  };

  const removeEvent = ele => () => {
    ele.removeEventListener('dragstart', dragStart);
    ele.removeEventListener('dragover', onDragOver);
    ele.removeEventListener('dragend', dragEnd);
  };

  const addEvent = () => {
    const ele = ref.current;
    if (!ele) return;

    ele.setAttribute('draggable', true);
    ele.addEventListener('dragstart', dragStart);
    ele.addEventListener('dragover', onDragOver);
    ele.addEventListener('dragend', dragEnd);

    return removeEvent(ele);
  };

  useEffect(addEvent, []);

  return {
    isDragging,
  };
};

export default useDraggable;
