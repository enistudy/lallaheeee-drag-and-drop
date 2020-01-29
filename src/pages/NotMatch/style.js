import styled from 'styled-components';

const WeAreSorry = styled.main`
  & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    padding: 5rem;
  }
`;

const Title = styled.h1`
  & {
    text-align: center;
    font-size: 2.8rem;
    font-weight: lighter;
    flex: 0 1;
  }
`;

const Description = styled.p`
  & {
    text-align: center;
    font-size: 1.8rem;
    font-weight: lighter;
    flex: 0 1;
  }
`;


export { WeAreSorry, Title, Description };
