'use strict';

import React, {Component} from 'react';

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            greeting: 'Hello World'
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.greeting}</h1>
            </div>
        );
    }
}


export default Welcome;
