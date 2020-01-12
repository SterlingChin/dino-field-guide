import React from 'react';
import styled from '@emotion/styled';
import { dinolist } from '../Util/dinolist'
import Item from './Item';
import { dinoListCleanup } from '../Util/filter';

const ListContainer = styled('div')`
    
`
ListContainer.displayName = 'ListContainer'

export const List = () => {

    const list = dinoListCleanup(dinolist)
    console.log('list', Object.keys(list), list);
    return (
        <ListContainer>
            {Object.keys(list).map((letter) => `${letter}`)}
        </ListContainer>
    );
};

export default List

