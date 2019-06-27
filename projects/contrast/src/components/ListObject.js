//create component that represents one box

//statefull.\
import React, { Component } from "react";
import axios from "axios";
import "./listObject.css";

class ListObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }

  render() {
      console.log('hit list object, props:', this.props.obj)
    return (

        <div className='left-bar-object'>
        <img width="100%" src={this.props.obj.img}/>
        <section className='product-name'>{this.props.obj.name}</section>
        <button className='delete-button' >Delete</button>
        <button className='switch-out-button'>Compare</button>
        {/* onClick needs to fire a function which updates state on App.js for selectedItem*/}
        </div>
    )
  }
}

export default ListObject;
