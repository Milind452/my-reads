import React from "react";

class ListBooks extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="list-books">
                <h1>Show Book</h1>
                <div className="open-search">
                    <button>Add a book</button>
                </div>
            </div>
        );
    }
}

export default ListBooks;
