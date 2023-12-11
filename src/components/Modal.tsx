"use client"
import React from "react";


// @ts-ignore
const Modal = ({ open, handleClick }) => {
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