import React from 'react';
import Start from './components/start'
import View from './components/view'

const OAuth = "AgAAAAAbvuzgAAXrhsCxoKMQ90LItLm0854HfUo";
const ID = "5a9a2f163d2c467aa9900ec25d73993f";
const password = "65e6e91a2c8147acb1c63e18c7800b3b";

class App extends React.Component {
  getInfo = async (event) => {
    event.preventDefault();
    const api_url = await fetch(`https://cloud-api.yandex.net/v1/disk/`, {
      // method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Authorization': `OAuth ${OAuth}`,
      },
    });
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <h2>Файлы</h2>
        <Start get={this.getInfo} />
        <View />
      </div>
    )
  }
}

export default App;
