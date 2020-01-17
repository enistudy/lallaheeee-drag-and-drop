import styled from 'styled-components';

const Item = styled.li`
  height: 4rem;
  width: 6rem;
  border: gray 0.05rem solid;
  border-radius: 0.2rem;
  margin: 0.2rem;
  padding: 1.3rem;
  text-align: center;
`;

const DropZone = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export { DropZone, Item };
