import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <h1>{this.props.nama}</h1>
                <h1>{this.props.umur}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        nama: state.dashboardReducer.nama,
        umur: state.dashboardReducer.umur
    }
}

const mapDispatchToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
