import React from 'react'

class Start extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.getFiles}>Connect</button>
            </div>
        )
    }
}

export default Start