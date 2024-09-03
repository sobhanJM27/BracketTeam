import React from "react";
import "./Loader.css";

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default Loader;