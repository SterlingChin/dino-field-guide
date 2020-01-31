import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Item from './Item';

const DinoListContainer = styled('div')`
    
`
DinoListContainer.displayName = 'DinoListContainer'

export const DinoList = ({dinosaurList}) => {
    return (
        <DinoListContainer>
            {dinosaurList.map((dino, i) => <Item dino={dino}/>)}
        </DinoListContainer>
    );
};

DinoList.propTypes = {
    dinosaurList: PropTypes.array,
}

export default DinoList

