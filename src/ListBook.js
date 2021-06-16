import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Bookshelf from "./Bookshelf";

class ListBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentlyReading: [],
            wantToRead: [],
            read: [],
        };
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            let currentlyReading = [];
            let wantToRead = [];
            let read = [];
            for (let key in books) {
                const book = books[key];
                if (book.shelf === "currentlyReading") {
                    currentlyReading.push(book);
                } else if (book.shelf === "wantToRead") {
                    wantToRead.push(book);
                } else {
                    read.push(book);
                }
            }
            this.setState(() => ({
                currentlyReading: currentlyReading,
                wantToRead: wantToRead,
                read: read,
            }));
        });
    }
    render() {
        return (
            <div className="list-books">
                <header className="title">
                    <h1>My Reads</h1>
                </header>
                <div className="main-content">
                    <Bookshelf
                        books={this.state.currentlyReading}
                        title={"Currently Reading"}
                    />
                    <Bookshelf
                        books={this.state.wantToRead}
                        title={"Want to Read"}
                    />
                    <Bookshelf books={this.state.read} title={"Read"} />
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
