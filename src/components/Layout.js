/**
 * @author Dev Prince Maurya
 * @version 0.0.1
 * ...
 */

import React from 'react';
import styled from 'styled-components';

// Styled component for the header container
const MainLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
`;

const Layout = ({ children }) => {
    return (
        <MainLayoutContainer>
            {children}
        </MainLayoutContainer>
    )
}

export default Layout