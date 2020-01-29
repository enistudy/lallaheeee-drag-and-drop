import React from 'react';
import './style.scss';
import { DragDropStore } from './Store';
import Droppable from './Droppable';

const DragDrop = () => {
  return (
    <DragDropStore>
      <div className="dragdrop-container">
        <Droppable droppableId="drop-1" />
        <Droppable droppableId="drop-2" />
      </div>
    </DragDropStore>
  );
};

export default DragDrop;
