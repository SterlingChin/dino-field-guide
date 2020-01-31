import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import * as constants from '../Util/constants'

const ItemContainer = styled('div')`
    border: 1px solid #000000;
    font-size: 16px;
    width: 500px;
    display: flex;
    flex-direction: column;
    img {
        max-width: 500px;
        object-fit: contain;
    }
`

const Title = styled('div')`
    font-size: 20px;
    font-weigth: 600;
`
Title.displayName = 'Title'

const Label = styled('div')`
    font-size: 14px;
`
Label.displayName = 'Label'

const Link = styled('a')`
    cursor: pointer;
    text-decoration: none;
    color: #FFFFFF;
`
Link.displayName = 'Link'


export const Item = ({dino}) => {

    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        fetch(`${constants.SEARCH_BASE_URL}q=${dino.name}&safeSearch=${constants.SAFE_SEARCH}&count=${constants.SEARCH_COUNT}`,  {
            method: 'GET',
            headers: {
                'Ocp-Apim-Subscription-Key': '112b20ee69844d39897f3ae0d99e670b'
            }
        })
        .then(res => res.json())
        .then(response => {
            setImageUrl(response.value[0].contentUrl)
        })
    })
    return (
        <ItemContainer>
            {imageUrl && <img src={imageUrl} alt='dino' />}
            <Title >{dino.name}</Title>
            <Label >{dino.label}</Label>
            <Link href={dino.wiki} target='_blank' rel='noopener noreferrer'>Wikipedia Link</Link>
        </ItemContainer>
    );
};

Item.propTypes = {
    dino: PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.string,
        url: PropTypes.string
    }),
    updateList: PropTypes.func
}

export default Item

