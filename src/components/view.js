import React from 'react'

class View extends React.Component {
    listHtml = (children) => {
        if (!children)
            return;
        var subfolders = [];
        Object.keys(children).forEach((key) => {
            var res = (
                <li key={key} onClick={() => this.expandParent(key)}>
                    {key}
                    {children[key].children && this._renderChildren(children[key].children)}
                </li>
            );
            subfolders.push(res);
        });
        return subfolders;
    }

    state = {
        data: this.props.tree,
        displayChild: []
    };

    expands = (key) => {
        this.state.displayChild.forEach((el) => {
            if (el === key)
                return true;
        })
        return false;
    }

    render() {
        if (!this.props.tree)
        return <div></div>;
        return (
            <div className="wrapper">
                {this.listHtml(this.props.tree)}
            </div>
        );
    }

    _renderChildren = (nodes) => {
        return (
            <ul>
                {this.listHtml(nodes)}
            </ul>
        )
    };

    expandParent = (id) => {
        this.state.displayChild.push(id);
        this.render();
    };
}



export default View