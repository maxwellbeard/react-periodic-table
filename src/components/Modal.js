import React from 'react'
import ReactDOM from 'react-dom'
import data from '../PeriodicTableData.json'
import styled from 'styled-components'
import Element from './Element'

const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 25%;
    z-index: 1000;
    text-align: center;
    padding: 10px;

    .close {
        position: absolute;
        top: 5px;
        right: 5px;
    }

    .elem {
        width: 10vw;
        height: 10vw;
        margin: auto;
        font-size: xx-large;
        padding-top: 10px;
        float: left;
        margin-right: 10px;
        margin-bottom: 20px;
        border: 1px solid black;
        cursor: default;
    }

    .elem #atomic-number {
        font-size: 0.8vw;
        padding-left: 10px;
    }

    .elem #symbol {
        font-size: 5vw;
    }

    .summary {
        clear: left;
        text-align: left;
    }

    table {
        margin: auto;
        border-collapse: collapse;
        border: 1px solid #ddd;
        margin-bottom: 20px;
    }

    th, td {
        border-bottom: 1px solid #ddd;
        padding: 15px;
    }

    th{
        text-align: right;
    }

    tr:nth-child(odd) {
        background-color: #f2f2f2;
    }

    td {
        text-align: left;
    }
`;

const Modal = ({ open, number, setState }) => {
    if (!open) return null;

    const handleClick = () => setState({ isOpen: false, number: number });
    const checkUnknown = (data) => data === null ? "unknown" : data;
    const checkUnits = (data, units) => data === "unknown" ? data : data + " " + units;

    return ReactDOM.createPortal(
        <>
            <div className="modal_bg" onClick={handleClick} />
            <StyledModal>
                <button className="close" onClick={handleClick}>X</button>
                <Element className="elem" number={number} setState={setState}/>
                <h1>{data.elements[number].name}</h1>
                <p>{data.elements[number].category}</p>
                <p>Appearance: {checkUnknown(data.elements[number].appearance)}</p>
                <br></br>
                <p className="summary">{data.elements[number].summary}</p>

                <table>
                    <tr>
                        <th>Phase</th>
                        <td>{data.elements[number].phase}</td>
                    </tr>
                    <tr>
                        <th>Atomic Number</th>
                        <td>{data.elements[number].number}</td>
                    </tr>
                    <tr>
                        <th>Atomic Mass</th>
                        <td>{checkUnits(checkUnknown(data.elements[number].atomic_mass), "u")}</td>
                    </tr>
                    <tr>
                        <th>Density</th>
                        <td>{checkUnits(checkUnknown(data.elements[number].density), "g/cm^3")}</td>
                    </tr>
                    <tr>
                        <th>Molar Heat</th>
                        <td>{checkUnits(checkUnknown(data.elements[number].molar_heat), "J/mol K")}</td>
                    </tr>
                    <tr>
                        <th>Melting Point</th>
                        <td>{checkUnits(checkUnknown(data.elements[number].melt), "K")}</td>
                    </tr>
                    <tr>
                        <th>Boiling Point</th>
                        <td>{checkUnits(checkUnknown(data.elements[number].boil), "K")}</td>
                    </tr>
                </table>

                <a href={data.elements[number].source} target="_blank" rel="noreferrer">Source</a>
            </StyledModal>
        </>,
            document.getElementById('portal')
    )
}

export default Modal
