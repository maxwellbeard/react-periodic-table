import React from 'react'
import ReactDOM from 'react-dom'
import data from '../PeriodicTableData.json'
import styled from 'styled-components'

const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: lightgrey;
    width: 500px;
    height: 500px;
    z-index: 1000;
`;

const Modal = ({ open, number, setState }) => {
    if (!open) return null;

    const handleClick = () => setState({ isOpen: false, number: number });

    return ReactDOM.createPortal(
        <>
            <div className="modal_bg" />
            <StyledModal>
                <h1>Hello!</h1>
                <p>{data.elements[number].name}</p>
                <button onClick={handleClick}>X</button>
            </StyledModal>
        </>,
            document.getElementById('portal')
    )
}

export default Modal
