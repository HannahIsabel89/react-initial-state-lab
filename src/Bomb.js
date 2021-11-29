// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {

    constructor (props) {
        super()
        this.state= {
            secondsLeft: props.initialCount // set an initial state baes off the components props  comes from index.js
        }
    }
    render () {
        const message = this.state.secondsLeft === 0 ? 'Boom' : `${this.state.secondsLeft} seconds left before I go boom!`

    return (
        <div>{message}</div>
    )
}
}

export default Bomb;
