import React, { Component, Fragment } from 'react';
import { extendObservable, observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class App extends Component {
    @observable counter = 0;
    constructor() {
        super();

        /*
        extendObservable(this, {
            counter: 0
        })*/
    }

    _increment = () => {
        this.counter++;
    }

    _decrement = () => {
        this.counter--;
    }

    render() {
        return (
            <Fragment>
                <button onClick={this._increment}>Increment</button>
                <button onClick={this._decrement}>Decrement</button>
                <h1>Value: {this.counter}</h1>
            </Fragment>
        );
    }
}

//export default observer(App);
export default App;
