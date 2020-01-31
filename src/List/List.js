import React, { useState } from 'react';
import styled from '@emotion/styled';
import { dinolist } from '../Util/dinolist'
import { dinoListCleanup } from '../Util/filter';
import DinoList from './DinoList.js'

const ListContainer = styled('div')`
    
`
ListContainer.displayName = 'ListContainer'

const Alphabet = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: fixed;
    top: 0px;
    margin: auto;
    text-align: center;
`
Alphabet.displayName = 'Alphabet'


export const List = () => {

    const [selectedLetter, setSelectedLetter ] = useState('Q')
    const [list] = useState(dinoListCleanup(dinolist))

    const handleLetterSelection = letter => {
        setSelectedLetter(letter)
    }

    return (
        <ListContainer>
            <Alphabet>
                {Object.keys(list).map((letter) => <div onClick={() => handleLetterSelection(letter)} >{letter}</div>)}
            </Alphabet>
            <DinoList dinosaurList={list[selectedLetter]} />
        </ListContainer>
    );
};

export default List
