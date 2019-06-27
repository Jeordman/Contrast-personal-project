import React, { Component } from "react";
import axios from "axios";
import "./list.css";
import ListObject from './ListObject'

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  componentDidUpdate(prevProps) {
    if(this.props.listProp.length !== prevProps.listProp.length) {
      this.render()
    }
  }
  

  render() {

    // filter listProp to remove selectedItems, set equal to a variable
    // then map over that variable

    return (
      <div>
        <section  className="left-bar">{this.props.listProp.map(obj => {
            return (<div>
                <ListObject obj={obj} updateListFn={this.updateList} />
            </div>)
        })}</section>
        <section className="right-bar"> {this.props.listProp.map(obj => {
          return (<div>
            <ListObject obj={obj} />
          </div>)

        })}</section>
      </div>
    );
  }
}

export default List;
