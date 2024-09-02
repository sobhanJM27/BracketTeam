import React from "react";
import "./Loader.css";
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="loader-container">
            <InfinitySpin
                visible={true}
                width="200"
                color="var(--secondary-color)"
                ariaLabel="infinity-spin-loading"
            />

        </div>
    );
};

export default Loader;