import React from 'react'
import data from '../PeriodicTableData.json'
import styled from 'styled-components'

const StyledElement = styled.div`
    width: 5vw;
    height: 5vw;
    padding: 2px;
    border: 1px solid #333;
    border-collapse: collapse;
    overflow: hidden;

    #atomic-number,
    #symbol,
    #name {
        padding: 5px;
    }

    #name {
        font-size: 80%;
    }
`;

const Element = ({ number, setState }) => {
    const handleClick = (e) => {
        setState({isOpen: true, number: number});
        console.log(e);
        console.log(number);
    }

    return (
        <StyledElement className={data.elements[number].category} onClick={handleClick}>
            <div id="atomic-number">{data.elements[number].number}</div>
            <div id="symbol">{data.elements[number].symbol}</div>
            <div id="name">{data.elements[number].name}</div>
        </StyledElement>
    )
}

export default Element
