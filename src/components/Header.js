/**
 * @author Dev Prince Maurya
 * @version 0.0.1
 * ...
 */

import React from 'react';

// components
import { HeaderContainer, LeftSection, RightSection, StyledImage, Typography } from './StyledComponentAtoms';

// assets
import cart from '../assets/cart-48.png'
import dropdown from '../assets/dropdown-24.png'


/**
 * An component for main header
 */
const Header = () => {
    return (
        <div style={{ width: '100%', backgroundColor: '#1e633f' }}>

            <HeaderContainer>
                <LeftSection>
                    <h2>Reeco</h2>
                    <Typography pointer >Store</Typography>
                    <Typography pointer>Orders</Typography>
                    <Typography pointer >Analytics</Typography>
                </LeftSection>
                <RightSection>
                    <StyledImage src={cart} alt='cart' />
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <Typography pointer >Hello, James</Typography>
                        <StyledImage src={dropdown} alt='dropdown' />
                    </div>
                </RightSection>
            </HeaderContainer>
        </div>
    )
}

export default Header