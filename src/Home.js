import React from 'react';
import styled from 'styled-components';
const FlexWrapper = styled.div`
  display: flex;
  grid-gap: 20px;
  margin-top: 3em;
  margin-left: 8em;
  margin-right: 8em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Home = (props) => (
  <FlexWrapper>
    <h1>
        This is my Gallery. Search according to your choice.
    </h1>
  </FlexWrapper>
)