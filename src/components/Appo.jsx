import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Appo extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="row mt-5">
                <h2>Weather report</h2>
            </div>
        )
    }
}
