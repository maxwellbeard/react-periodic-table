import React from 'react'
import Element from './Element'
import Legend from './Legend'
import styled from 'styled-components'

const StyledTable = styled.div`
    display: grid;
    grid-gap: 3px 3px;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto; 
    justify-content: center;
    padding-top: 30px;

    .row1 {
        grid-column: 2 / 18;
    }

    .row2 {
        grid-column: 3 / 13;
        grid-row: 2 / 4;
    }

    .space {
        grid-column: 1 / 3;
    }
`;

const Table = ({ setState }) => {
    const createElements = () => {
        let elements = [];
        let lanthanides = [<div className="space"></div>, <div>*</div>];
        let actinides = [<div className="space"></div>, <div>**</div>];

        for (var i = 0; i < 118; i++){
            switch (i) {
                case 1:
                    elements.push(<div className="row1"></div>);
                    break;
                case 4:
                    elements.push(<Legend key={i + 364} className="row2" />);
                    break;
                case 56:
                    elements.push(<div>*</div>);
                    break;
                case 88:
                    elements.push(<div>**</div>);
                    break;
                default:
                    break;
            }

            if (i >= 56 && i <= 70) {
                lanthanides.push(<Element key={i} number={i} setState={setState} />);
            } else if (i >= 88 && i <= 102) {
                actinides.push(<Element key={i} number={i} setState={setState} />);
            } else {
                elements.push(<Element key={i} number={i} setState={setState} />);
            }
        }
        return {
            elements: elements,
            lanthanides: lanthanides,
            actinides: actinides
        };
    }

    return (
        <StyledTable>
            {createElements().elements.map(elem => elem)}
            <br></br>
            <br></br>
            {createElements().lanthanides.map(elem => elem)}
            {createElements().actinides.map(elem => elem)}
        </StyledTable>
    )
}

export default Table
