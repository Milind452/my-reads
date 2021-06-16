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
        this.getBooks = this.getBooks.bind(this);
        this.moveBook = this.moveBook.bind(this);
    }

    getBooks() {
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

    moveBook(value, book) {
        if (value !== "move" && value !== "none" && value !== book.shelf) {
            BooksAPI.update(book, value).then(this.getBooks);
        }
    }

    componentDidMount() {
        this.getBooks();
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
                        moveBook={this.moveBook}
                    />
                    <Bookshelf
                        books={this.state.wantToRead}
                        title={"Want to Read"}
                        moveBook={this.moveBook}
                    />
                    <Bookshelf
                        books={this.state.read}
                        title={"Read"}
                        moveBook={this.moveBook}
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
