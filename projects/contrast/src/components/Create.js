import React, { Component } from "react";

import "./create.css";

class Create extends Component {
  constructor() {
    super();

    this.state = {
      fakeval: 0
    };
  }

  render() {
    return (
      <div>
        <section className="create-box">
        <head className='create-box-header'>ADD TO LIST</head>
          <input placeholder='...name' className='name-input'/>
          <input placeholder='...img url' className='image-url-input'/>
          <button className='add-button'>Add to List</button>
        </section>
      </div>
    );
  }
}

export default Create;
