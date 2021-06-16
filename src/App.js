import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import ListBooks from "./ListBook";
import AddBooks from "./AddBook";
import * as BooksAPI from "./BooksAPI";

class App extends React.Component {
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

    render() {
        const shelves = {
            currentlyReading: this.state.currentlyReading,
            wantToRead: this.state.wantToRead,
            read: this.state.read,
        };
        return (
            <div className="app">
                <Route
                    exact
                    path="/"
                    render={() => (
                        <ListBooks
                            shelves={shelves}
                            getBooks={this.getBooks}
                            moveBook={this.moveBook}
                        />
                    )}
                ></Route>
                <Route
                    path="/search"
                    render={() => (
                        <AddBooks
                            state={this.state}
                            getBooks={this.getBooks}
                            moveBook={this.moveBook}
                        />
                    )}
                ></Route>
            </div>
        );
    }
}

export default App;
