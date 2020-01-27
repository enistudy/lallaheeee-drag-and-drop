import React, { useContext } from 'react';
import './style.scss';
import { DragDropContext } from './Store';
import { SET_DRAGGED_ITEM } from './Actions';
import Draggable from './Draggable';

const Droppable = ({ droppableId }) => {
  const {
    draggableList,
    dragDispatch,
    draggedId,
    handleDragEnd,
    draggedIndex,
  } = useContext(DragDropContext);

  const handleDragStart = (e, i) => {
    e.dataTransfer.setData('text/html', e.target);
    dragDispatch({
      type: SET_DRAGGED_ITEM,
      payload: {
        id: draggableList[droppableId][i].draggableId,
        droppableId,
        index: i,
      },
    });
  };

  const handleDragEnter = (e, idx) => {
    handleDragEnd({
      source: {
        droppableId: draggedId.droppableId,
        index: draggedIndex,
      },
      destination: {
        droppableId,
        index: idx,
      },
    });
  };

  const handleDraggingEnd = () => {
    dragDispatch({
      type: SET_DRAGGED_ITEM,
      payload: { id: null, droppableId: null, index: null },
    });
  };

  return (
    <section className="droppable">
      {draggableList[droppableId].map((item, idx) => (
        <Draggable
          key={item.draggableId}
          draggableId={item.draggableId}
          onDragStart={e => handleDragStart(e, idx)}
          onDragEnter={e => handleDragEnter(e, idx)}
          onDragEnd={handleDraggingEnd}
        />
      ))}
    </section>
  );
};

export default React.memo(Droppable);
