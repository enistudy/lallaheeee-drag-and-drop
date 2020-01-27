import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
import initialValue from './initialValue';
import { MOVE_DROPPABLE, REORDER_DROPPABLE } from './Actions';

const DragDropContext = createContext(initialValue);

const DragDropStore = ({ children }) => {
  const [
    {
      draggedId,
      droppableList,
      draggableList,
      draggedIndex,
    },
    dragDispatch,
  ] = useReducer(Reducer, initialValue);

  const getList = id => draggableList[id];

  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      dragDispatch({
        type: REORDER_DROPPABLE,
        payload: {
          droppableId: source.droppableId,
          target: source.index,
          destination: destination.index,
        },
      });
    } else {
      dragDispatch({
        type: MOVE_DROPPABLE,
        payload: {
          source: getList(source.droppableId),
          destination: getList(destination.droppableId),
          droppableSource: source,
          droppableDestination: destination,
        },
      });
    }
  };

  return (
    <DragDropContext.Provider
      value={{
        draggedId,
        droppableList,
        draggableList,
        dragDispatch,
        draggedIndex,
        handleDragEnd,
        getList,
      }}
    >
      {children}
    </DragDropContext.Provider>
  );
};

export { DragDropContext, DragDropStore };
