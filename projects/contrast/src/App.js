import React, { Component } from 'react'
import './App.css';
import List from './components/List'
import Create from './components/Create'
import CompareWindow from './components/CompareWindow'
import ProsCons from './components/ProsCons'

class App extends Component {
      render(){
        return (
          <div className="App">
            <List  />
                        {/* will use < ListObject /> in  */}
            <div>
              <Create />
              <CompareWindow />
              <ProsCons />
            </div>
                        {/* made props right down here brudduh */}
            {/* <List compare='right' /> */}
          </div>
        )
      }
}

export default App;
