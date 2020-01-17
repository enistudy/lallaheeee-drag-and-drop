import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './style';
import Header from '../../components/Header';

const NotMatch = () => (
  <>
    <Header />
    <Styled.WeAreSorry>
      <Styled.Title>
        This page isn&#39;t available. Sorry about that.
      </Styled.Title>
      <Styled.Description>
        If you want start over, go to the
        <Link to="/"> homepage</Link>
      </Styled.Description>
    </Styled.WeAreSorry>
  </>
);

export default NotMatch;
