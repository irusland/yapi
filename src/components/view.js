import React from 'react'

class View extends React.Component {

    listHtml = (children) => {
        if (!children)
            return;
        console.log(children);
        var subfolders = [];
        Object.keys(children).forEach((key) => {
            var internals = '';
            if (children[key].type != 'file') {
                internals = this.listHtml(children[key].children);
            }
            var res = '<li>' + key + internals + '</li>';
            subfolders.push(res);
        });
        var html = `<ul> 
      ${
            subfolders.join('\n')
            } 
    </ul>`;
        return html;
    }

    render() {
        console.log(this.props.tree);
        var html = this.listHtml(this.props.tree) || '';
        return (
            <div dangerouslySetInnerHTML={{__html: html}}>
            </div>
        )
    }
}

export default View