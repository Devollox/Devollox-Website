import React from "react";
import styled from "styled-components";

const Modal = ({open, handleClick}) => {

    const WrapperContent = styled.div`
        z-index: 1;
        margin-left: 1rem;
        font-family: "Roboto";
        font-weight: 400;
        font-size: 20px;
        padding-top: 90px;
    `

    return (<>
        {open && (<WrapperContent className="modal_content">
            <ul className="table_content">
                <li><a href='https://steamcommunity.com/id/Cookiemp4/'
                       className="btn_modal hiding_text">Steam</a></li>
                <li><a href='https://github.com/Devollox' className="btn_modal hiding_text">GitHub</a></li>
                <li><a className="btn_modal hiding_text">Other</a></li>
            </ul>
        </WrapperContent>)}
    </>);
};

export default Modal;