import React from "react";
import { Route } from "react-router-dom";
import ListBooks from "./ListBook";
import AddBooks from "./AddBook";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => <ListBooks />}></Route>
                <Route path="/search" render={() => <AddBooks />}></Route>
            </div>
        );
    }
}

export default App;
