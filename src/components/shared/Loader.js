import React from 'react';
import Spinner from "../../assets/icons/Spinner.gif"

const Loader = () => {
    return (
        <div style={{width : "100%", textAlign: "center"}}>
            <img src={Spinner} alt="" />
        </div>
    );
};

export default Loader; 