import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import List from './components/List'
import Create from './components/Create'
import CompareWindow from './components/CompareWindow'
import ProsCons from './components/ProsCons'

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      // add selectedItem1 and selectedItem2
      compareItemLeft: [],
      compareItemRight: [], 

      deleteItemLeft: [],
      deleteItemRight: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/list")
      .then(res => {
        this.setState({ list: res.data });
        console.log("hit");
        console.log(this.state.list)
      })
      .catch(err => {
        console.log("error", err);
      });
      console.log(this.state.list)
  }

  updateList = (newList)  => {
    this.setState({list : newList})
  }

      render(){
        return (
          <div className="App">
            <List  listProp={this.state.list}/>
            {/* pass props to list of selectedItem1 and selectedItem2 */}
            
            <div>
              <Create updateList={this.updateList}/>
              <CompareWindow />
              <ProsCons />
            </div>
          </div>
        )
      }
}

export default App;