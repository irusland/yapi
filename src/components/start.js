import React from 'react'

class Start extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.get}>
                <button>Update</button>
            </form>
        )
    }
}

export default Start