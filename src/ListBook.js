import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

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

const Bookshelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book) => {
                        console.log(book);
                        return (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div
                                            className="book-cover"
                                            style={{
                                                width: "148px",
                                                height: "193px",
                                                backgroundImage: `url(${book.imageLinks.thumbnail})`,
                                            }}
                                        ></div>
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option
                                                    value="move"
                                                    disabled=""
                                                >
                                                    Move to...
                                                </option>
                                                <option value="currentlyReading">
                                                    Currently Reading
                                                </option>
                                                <option value="wantToRead">
                                                    Want to Read
                                                </option>
                                                <option value="read">
                                                    Read
                                                </option>
                                                <option value="none">
                                                    None
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">
                                        {book.title}
                                    </div>
                                    <div className="book-authors">
                                        {book.authors}
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
};

export default ListBooks;
