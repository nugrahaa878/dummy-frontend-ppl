import React, { Component } from 'react'
import { connect } from 'react-redux'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Landing Page</h1>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        title: state.landingPage.title
    }
}

const mapDispatchToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
