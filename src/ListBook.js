import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

class ListBooks extends React.Component {
    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        return (
            <div className="list-books">
                <header className="title">
                    <h1>My Reads</h1>
                </header>
                <div className="main-content">
                    <Bookshelf
                        books={this.props.shelves.currentlyReading}
                        title={"Currently Reading"}
                        moveBook={this.props.moveBook}
                    />
                    <Bookshelf
                        books={this.props.shelves.wantToRead}
                        title={"Want to Read"}
                        moveBook={this.props.moveBook}
                    />
                    <Bookshelf
                        books={this.props.shelves.read}
                        title={"Read"}
                        moveBook={this.props.moveBook}
                    />
                </div>
                <div className="open-search">
                    <Link to="/search" className="btn">
                        Add a book
                    </Link>
                </div>
            </div>
        );
    }
}

export default ListBooks;
