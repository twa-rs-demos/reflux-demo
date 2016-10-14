'use strict';

import React from 'react';
import Reflux from 'reflux';
import {render} from 'react-dom';


const action = Reflux.createActions(['getHello']);

const store = Reflux.createStore({

    listenables: [action],

    onGetHello: function (hello) {
        this.trigger(hello);
    }
});

const App = React.createClass({
    mixins: [Reflux.connect(store, "hello")],

    componentDidMount: function () {
        action.getHello("hello world!");
    },

    render: function () {
        return <div>
            {this.state.hello}
        </div>
    }
});

render(<App/>, document.getElementById("content"));