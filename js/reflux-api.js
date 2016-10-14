'use strict';

import React from 'react';
import Reflux from 'reflux';
import {render} from 'react-dom';
import request from 'superagent';

const action = Reflux.createActions(['getHello']);

const store = Reflux.createStore({

    listenables: [action],

    onGetHello: function () {

        request.get("/hello")
            .end((err, res)=> {

                const value = res.body;
                console.log(value);

                this.trigger(value);
            });

    }
});

const App = React.createClass({
    mixins: [Reflux.connect(store, "hello")],

    componentDidMount: function () {
        action.getHello();
    },

    render: function () {
        return <div>
            {this.state.hello}
        </div>
    }
});

render(<App/>, document.getElementById("content"));