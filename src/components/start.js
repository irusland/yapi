import React from 'react'

class Start extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.get}>
                <input type="text" name="start" placeholder="Start" />
                <button>Start</button>
            </form>
        )
    }
}

export default Start