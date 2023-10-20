import React from "react";

const Modal = ({ open, handleClick }) => {
    function handlerClickSteam() {
        window.location.href = 'https://steamcommunity.com/id/Cookiemp4/';
    }
    function handlerClickGithub() {
        window.location.href = 'https://github.com/Devollox';
    }
    return (
        <>
            {open && (
                <div className="contentNew" id="getHideContent">
                    <div>
                        <ul className="table">
                            <li onClick={handlerClickSteam} id="steamOfLi"><a className="lineHideBlock">Steam</a></li>
                            <li onClick={handlerClickGithub} id="githubOfLi"><a className="lineHideBlock">GitHub</a></li>
                            <li id="otherOfLi"><a className="lineHideBlock">Other</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;