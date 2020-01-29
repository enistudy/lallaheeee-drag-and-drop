import React, {
  useEffect,
  useContext,
  useRef,
  useCallback,
} from 'react';
import { DragDropContext } from './Store';

const addClass = (ref, classname) => ref.current.classList.add(classname);
const removeClass = (ref, classname) => ref.current.classList.remove(classname);

const Draggable = ({
  draggableId,
  onDragStart,
  onDragEnter,
  onDragEnd,
}) => {
  const selfRef = useRef(null);
  const { draggedId } = useContext(DragDropContext);

  const setColor = useCallback(() => {
    if (!draggedId.id) {
      removeClass(selfRef, 'dragging');
      return;
    }

    if (draggedId.id === draggableId) {
      addClass(selfRef, 'dragging');
    }
  }, [selfRef, draggedId]);

  useEffect(setColor, [draggedId]);

  return (
    <article
      draggable
      className="draggable"
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={event => event.preventDefault()}
      ref={selfRef}
    >
      <h1> Item </h1>
      <p>{`# ${draggableId}`}</p>
    </article>
  );
};

export default React.memo(Draggable);
