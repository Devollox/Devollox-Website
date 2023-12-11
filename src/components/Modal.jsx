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
                            <li><a href='https://steamcommunity.com/id/Cookiemp4/' className="btn-modal lineHideBlock">Steam</a></li>
                            <li id="githubOfLi"><a href='https://github.com/Devollox' className="btn-modal lineHideBlock">GitHub</a></li>
                            <li id="otherOfLi"><a className="btn-modal lineHideBlock">Other</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;