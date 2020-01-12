import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ItemContainer = styled('div')`
    
`
ItemContainer.displayName = 'ItemContainer'

export const Item = ({dino}) => {
    console.log('dino', dino);
    return (
        <ItemContainer>
            {`${dino.name} - ${dino.label}`}
        </ItemContainer>
    );
};

Item.propTypes = {
    dino: PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.string,
        url: PropTypes.string
    })
}

export default Item

