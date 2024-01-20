import React from "react";
import styled from "styled-components";

const Modal = ({ open, handleClick }) => {
    function handlerClickSteam() {
        window.location.href = 'https://steamcommunity.com/id/Cookiemp4/';
    }
    function handlerClickGithub() {
        window.location.href = 'https://github.com/Devollox';
    }

    const ModalContent = styled.div`
      z-index: 1;
      margin-left: 1rem;
      font-family: "Roboto";
      font-weight: 400;
      font-size: 20px;
      padding-top: 90px;
    `

    return (
        <>
            {open && (
                <ModalContent className="modal_content">
                     <ul className="table_content">
                         <li><a href='https://steamcommunity.com/id/Cookiemp4/' className="btn_modal hiding_text">Steam</a></li>
                         <li><a href='https://github.com/Devollox' className="btn_modal hiding_text">GitHub</a></li>
                         <li><a className="btn_modal hiding_text">Other</a></li>
                     </ul>
                </ModalContent>
            )}
        </>
    );
};

export default Modal;