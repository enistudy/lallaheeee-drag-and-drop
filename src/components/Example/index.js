import React, { useState } from 'react';
import Item from './Item';
import Container from './Container';
import './style.scss';

const data = {
  1: {
    contents: 'First thing',
    state: 'todo',
  },
  2: {
    contents: 'Second thing',
    state: 'todo',
  },
  3: {
    contents: 'Third thing',
    state: 'todo',
  },
  4: {
    contents: 'Fourth thing',
    state: 'todo',
  },
};

const Example = () => {
  const [toDos, setToDos] = useState(data);

  const onDrop = state => id => {
    const currentTodo = { ...toDos[id] };
    currentTodo.state = state;
    const deepCopy = JSON.parse(JSON.stringify(toDos));

    setToDos({
      ...deepCopy,
      [id]: currentTodo,
    });
  };

  const getList = state => Object.keys(toDos)
    .map(key => ({ id: key, ...toDos[key] }))
    .filter(todo => todo.state === state)
    .map(todo => (
      <Item id={todo.id} contents={todo.contents} key={todo.id} />
    ));

  return (
    <div className="box">
      <Container title="Todos" onDrop={onDrop('todo')}>
        {getList('todo')}
      </Container>
      <Container title="Doing" onDrop={onDrop('doing')}>
        {getList('doing')}
      </Container>
      <Container title="Done" onDrop={onDrop('done')}>
        {getList('done')}
      </Container>
    </div>
  );
};

export default Example;
