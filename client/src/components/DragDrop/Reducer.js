import {
  SET_DRAGGED_ITEM,
  SET_DRAGGED_INDEX,
  MOVE_DROPPABLE,
  REORDER_DROPPABLE,
} from './Actions';

const reorder = (list, target, destination) => {
  const result = Array.from(list);
  const [removed] = result.splice(target, 1);
  result.splice(destination, 0, removed);

  return result;
};

const deepCopy = target => JSON.parse(JSON.stringify(target));

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const reorderDroppable = (state, { droppableId, target, destination }) => ({
  ...state,
  draggableList: {
    ...deepCopy(state.draggableList),
    [droppableId]: reorder(
      state.draggableList[droppableId],
      target,
      destination,
    ),
  },
  draggedIndex: destination,
});

const moveDroppable = (
  state,
  {
    source,
    destination,
    droppableSource,
    droppableDestination,
  },
) => ({
  ...state,
  draggedId: {
    ...state.draggedId,
    droppableId: droppableDestination.droppableId,
  },
  draggedIndex: droppableDestination.index,
  draggableList: {
    ...deepCopy(state.draggableList),
    ...move(source, destination, droppableSource, droppableDestination),
  },
});

const setDragItem = (state, { id, droppableId, index }) => ({
  ...state,
  draggedId: { id, droppableId },
  draggedIndex: index,
});

const setDragIndex = (state, { index }) => ({
  ...state,
  draggedIndex: index,
});

const Reducer = (state, { type, payload }) => {
  const reducers = {
    [SET_DRAGGED_ITEM]: setDragItem,
    [SET_DRAGGED_INDEX]: setDragIndex,
    [MOVE_DROPPABLE]: moveDroppable,
    [REORDER_DROPPABLE]: reorderDroppable,
  };

  const reducer = reducers[type];
  return reducer ? reducer(state, payload) : state;
};

export default Reducer;
