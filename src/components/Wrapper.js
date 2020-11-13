import React from 'react';
import "../styles/Wrapper.css";

// this function builds the Wrapper that is imported in App.js
// it becomes the main container of the DOM
function Wrapper({ children }) {
    return (
        <div className="wrapper">
            {/* the children of this div are Header and Main, as seen in App.js */}
            { children }
        </div>
    );
}

export default Wrapper;