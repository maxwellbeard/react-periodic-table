import React from 'react'
import styled from 'styled-components'

const StyledLegend = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    text-align:left;

    .box {
        width: 1vw;
        height: 1vw;
        border: 1px solid black;
        float: left;
    }

    .col1, .col2, .col3{
        margin: auto;
        overflow: hidden;
    }

    p {
        margin-left: 25px;
    }
`;

const Legend = ({className}) => {
    return (
        <StyledLegend className={className}>
            <div className="col1">
                <div>
                    <div className="nonmetal box"></div>
                    <p>= nonmetal</p>
                </div>
                <div>
                    <div className="alkali box"></div>
                    <p>= alkali metal</p>
                </div>
                <div>
                    <div className="alkaline box"></div>
                    <p>= alkaline earth metal</p>
                </div>
            </div>
            <div className="col2">
                <div>
                    <div className="post-transition box"></div>
                    <p>= post-transition metal</p>
                </div>
                <div>
                    <div className="transition box"></div>
                    <p>= transition metal</p>
                </div>
                <div>
                    <div className="noble box"></div>
                    <p>= noble gas</p>
                </div>
            </div>
            <div className="col3">
                <div>
                    <div className="metalloid box"></div>
                    <p>= metalloid</p>
                </div>
                <div>
                    <div className="lanthanide box"></div>
                    <p>= lanthanide</p>
                </div>
                <div>
                    <div className="actinide box"></div>
                    <p>= actinide</p>
                </div>
            </div>
        </StyledLegend>
    )
}

export default Legend
