import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Bookshelf from "./Bookshelf";

class AddBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            books: [],
        };
        this.updateQuery = this.updateQuery.bind(this);
    }

    updateQuery(query) {
        this.setState(() => ({
            query: query.trim(),
        }));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query) {
            BooksAPI.search(this.state.query).then((books) => {
                this.setState(() => ({
                    books: books,
                }));
            });
        }
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
                            value={this.state.query}
                            onChange={(event) => {
                                this.updateQuery(event.target.value);
                            }}
                        ></input>
                    </div>
                </div>
                <div className="search-result">
                    <Bookshelf
                        books={this.state.books}
                        moveBook={this.moveBook}
                    />
                </div>
            </div>
        );
    }
}

export default AddBooks;
