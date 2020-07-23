import React from 'react';
import styled from 'styled-components';
const FlexWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const About = () => (
  <FlexWrapper>
    <h2> About    Page </h2>
         <p>
             This is my project on API Autimated Gallery Website. API and access key are used from Unsplash.
            This website allows you to see photos that you are interested to explore. 
            SEARCH AND ENJOY!
        </p>
  </FlexWrapper>
)
