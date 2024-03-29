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
    reorderDragList,
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
    reorderDragList({
      source: {
        droppableId: draggedId.droppableId,
        index: draggedIndex,
      },
      destination: {
        droppableId,
        index: idx,
      },
    });
    e.stopPropagation();
  };

  const onDragEnter = () => {
    if (droppableId === draggedId.droppableId) return;

    reorderDragList({
      source: {
        droppableId: draggedId.droppableId,
        index: draggedIndex,
      },
      destination: {
        droppableId,
        index: draggableList[droppableId].length,
      },
    });
  };

  const handleDragEnd = () => {
    dragDispatch({
      type: SET_DRAGGED_ITEM,
      payload: { id: null, droppableId: null, index: null },
    });
  };

  return (
    <section
      className="droppable"
      onDrop={handleDragEnd}
      onDragEnter={onDragEnter}
    >
      {draggableList[droppableId].map((item, idx) => (
        <Draggable
          key={item.draggableId}
          draggableId={item.draggableId}
          onDragStart={e => handleDragStart(e, idx)}
          onDragEnter={e => handleDragEnter(e, idx)}
          onDragEnd={handleDragEnd}
        />
      ))}
    </section>
  );
};

export default React.memo(Droppable);
