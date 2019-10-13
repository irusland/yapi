import React from 'react'

class ViewOld extends React.Component {

    render() {
        console.log(this.props.tree);
        var html = this.listHtml(this.props.tree) || '';
        return (
            <div dangerouslySetInnerHTML={{ __html: html }}>
            </div>
        )
    }
}

const data = {
    nodes: [
        {
            id: 'abc_172.22.22.214',
            name: 'abc',
            nodes: [
                {
                    id: 'abc_172.22.22.214.if.1',
                    name: '0'
                },
                {
                    id: 'abc_172.22.22.214.if.3',
                    name: '0'
                },
                {
                    id: 'abc_172.22.22.214.if.2',
                    name: '0'
                }
            ]
        },
        {
            id: 'MON_LOGS_192.168.1.53',
            name: 'MON_LOGS',
            nodes: [
                {
                    id: 'MON_LOGS_192.168.1.53.if.1',
                    name: 'lo'
                },
                {
                    id: 'MON_LOGS_192.168.1.53.if.2',
                    name: 'eth0'
                }
            ]
        }
    ]
};

class View extends React.Component {
    listHtml = (children) => {
        if (!children)
            return;
        var subfolders = [];
        Object.keys(children).forEach((key) => {
            var res = (
                <li key={key} onClick={() => this.expandParent(key)}>
                    {key}
                    {key === this.state.displayChild && this._renderChildren(children[key].children)}
                </li>
            );
            subfolders.push(res);
        });
        return subfolders;
    }

    state = {
        data: this.props.tree,
        displayChild: null
    };

    render() {
        if (!this.props.tree)
        return <div></div>;
        return (
            <div className="wrapper">
                {this.listHtml(this.props.tree['disk:'].children)}
            </div>
        );
    }

    _renderChildren = (nodes) => {
        const result = this.listHtml(nodes);

        return (
            <ul>
                {result}
            </ul>
        )
    };

    expandParent = (id) => {
        if (this.state.displayChild == id) {
            this.setState({
                displayChild: null
            });    
        }
        this.setState({
            displayChild: id
        });
    };
}



export default View