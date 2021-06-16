import React from "react";
import { Link } from "react-router-dom";

class AddBooks extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="add-books">
                <div className="search-bar">
                    <div className="close-search">
                        <Link to="/" className="btn">
                            Close
                        </Link>
                    </div>
                    <div className="search-input-wrapper">
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search by title or author"
                        ></input>
                    </div>
                </div>
                <h1>Add Book</h1>
            </div>
        );
    }
}

export default AddBooks;
