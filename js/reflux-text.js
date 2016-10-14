"use strict";

import React from "react";
import {render} from "react-dom";
import Reflux from "reflux";

const action = Reflux.createActions(["getValue"]);

const stores = Reflux.createStore({

    listenables: [action],
    onGetValue: function (value) {
        this.trigger(value);
    }
});

const App = React.createClass({

    render: function () {
        return <div className="row">
            <div className="col-md-6 text-center ">
                <Left/>
            </div>
            <div className="col-md-6 text-center">
                <Right/>
            </div>
        </div>
    }
});

const Left = React.createClass({

    handleChange: function () {
        let text = this.refs.myInput.value;
        action.getValue(text);
    },
    render: function () {
        return <div>
            <input type="text" ref="myInput" onChange={this.handleChange}/>
        </div>
    }

});

const Right = React.createClass({

    mixins: [Reflux.connect(stores, "value")],

    render: function () {
        return <div>
            {this.state.value}
        </div>
    }

});

render(<App/>, document.getElementById("content"));
