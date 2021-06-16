const Bookshelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book) => {
                        // console.log(book);
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
                                            <select
                                                onClick={(event) => {
                                                    props.moveBook(
                                                        event.target.value,
                                                        book
                                                    );
                                                }}
                                            >
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

export default Bookshelf;
