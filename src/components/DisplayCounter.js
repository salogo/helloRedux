
import React from 'react';
import { connect } from 'react-redux'

function DisplayCounter(props) {

    return (
        <div>
            <h1>Display Counter</h1>
            <i>{props.ctr}</i>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter 
    }
}

export default connect(mapStateToProps)(DisplayCounter)