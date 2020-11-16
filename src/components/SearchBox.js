import React from "react";
import "../styles/SearchBox.css";

function SearchBox({ handleSearchChange }) {
    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    // when a change happens, the handleSearchChange is called, which
                    // bubbles back up thru the tree (from here --> Nav -->DataArea)
                    // to where the function is defined
                    onChange={e => handleSearchChange(e)}
                />
            </form>
        </div>
    );
}

export default SearchBox;
