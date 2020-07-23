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
        "LOOK AND THINK BEFORE OPENING THE SHUTTER.THE HEART AND MIND ARE TRUE LENS OF THE CAMERA." This is my Gallery. SEARCH and EXPLORE!!
    </h1>
  </FlexWrapper>
)
