import React from "react";
import { Route } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => <h1>Show Book</h1>}></Route>
                <Route path="/search" render={() => <h1>Add Book</h1>}></Route>
            </div>
        );
    }
}

export default App;
