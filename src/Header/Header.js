import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const HeaderContainer = styled('div')`
    
`
HeaderContainer.displayName = 'HeaderContainer'

export const Header = ({props}) => {
    return (
        <HeaderContainer>
            <h1>Page Header</h1>
        </HeaderContainer>
    );
};

Header.propTypes = {
    
}

export default Header

