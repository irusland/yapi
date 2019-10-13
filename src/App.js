import React from 'react';
import Start from './components/start'
import View from './components/view'

const OAuth = "AgAAAAAbvuzgAAXrhsCxoKMQ90LItLm0854HfUo";
const ID = "5a9a2f163d2c467aa9900ec25d73993f";
const password = "65e6e91a2c8147acb1c63e18c7800b3b";

class App extends React.Component {
  state = {
    tree: undefined
  }
  getFiles = async (event) => {
    event.preventDefault();
    const path = '/disk:/';
    const api_url = await fetch(`https://cloud-api.yandex.net/v1/disk/resources/files`, {
      headers: {
        'Authorization': `OAuth ${OAuth}`,
      },
    });
    const answer = await api_url.json();
    // console.log(answer);

    const folder = this.toFolderTree(answer).root.children;
    this.setState({ tree: folder });
  };

  toFolderTree = (data) => {
    let treePath = {
      'root': {
        type: 'folder',
        children: {}
      }
    };
    var root = treePath.root.children;

    data.items.forEach(f => {
      var path = f.path;
      let levels = path.split("/");
      let file = levels.pop();

      let prevLevel = root;
      let prevProp = levels.shift();

      levels.forEach(prop => {
        if (prevLevel[prevProp] == undefined) {
          var c = {};
          c['type'] = 'folder';
          c['children'] = {};
          prevLevel[prevProp] = c;
        }
        prevLevel = prevLevel[prevProp].children;
        prevProp = prop;
      });

      if (prevLevel[prevProp] == undefined) {
        var c = {};
        c[file] = { type: 'file' }
        prevLevel[prevProp] = { type: 'folder', children: c };
      } else {
        prevLevel[prevProp].children[file] = { type: 'file' };
      }
    });
    return treePath;
  }

  render() {
    return (
      <div className="App">
        <h2>Файлы</h2>
        <Start getFiles={this.getFiles} toFolderTree={this.toFolderTree} />
        <View tree={this.state.tree} />
      </div>
    )
  }
}

export default App;
