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
    cursor: pointer;

    :hover {
        border: 3px solid black;
    }

    #atomic-number {
        float: left;
        font-size: 0.5vw;
        position: absolute;
    }

    #symbol {
        font-weight: bold;
        text-align: center;
        margin-top: 0.5vw;
        font-size: 2vw;
    }

    #name {
        font-size: 0.7vw;
        text-align: center;
    }
`;

const Element = ({ number, setState, className }) => {
    const handleClick = (e) => setState({isOpen: true, number: number});

    return (
        <StyledElement className={data.elements[number].category + ' ' + className} onClick={handleClick}>
            <div id="atomic-number">{data.elements[number].number}</div>
            <div id="symbol">{data.elements[number].symbol}</div>
            <div id="name">{data.elements[number].name}</div>
        </StyledElement>
    )
}

export default Element
