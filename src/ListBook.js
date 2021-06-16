import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class ListBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                books,
            }));
            console.log(this.state.books);
        });
    }
    render() {
        return (
            <div className="list-books">
                <h1>Show Book</h1>
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
