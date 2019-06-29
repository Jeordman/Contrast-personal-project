import React, { Component } from "react";

import "./prosCons.css";

class ProsCons extends Component {
  constructor() {
    super();

    this.state = {
      
    };
  }

  render() {
    let { currentItemLeft, currentItemRight } = this.props;
    console.log("this is in proscons", currentItemLeft, currentItemRight);
    return (
      <article classname="full-pros-cons">
        <section className="left-pros-cons">
          <section className="left-pros">
            {" "}
            {currentItemLeft.pros &&
              currentItemLeft.pros.map(obj => {
                return <li className="all-lists">{obj.description}</li>;
              })}
          </section>
          <section className="left-cons">
            {currentItemLeft.cons &&
              currentItemLeft.cons.map(obj => {
                return <li className="all-lists">{obj.description}</li>;
              })}
          </section>
        </section>

        <section className="right-pros-cons">
          <ul className="right-pros">
            {" "}
            {currentItemRight.pros &&
              currentItemRight.pros.map(obj => {
                return <li className="all-lists">{obj.description}</li>;
              })}
          </ul>
          <ul className="right-cons">
            {currentItemRight.cons &&
              currentItemRight.cons.map(obj => {
                return <li className="all-lists">{obj.description}</li>;
              })}
          </ul>
        </section>

        <div className="left-foot">
          <input placeholder="...pro" className='add-pro-input-left'/> 
          <button className='add-pro-left-button' > Add</button>

          <input placeholder="...pro" className='add-pro-input-right'/> 
          <button className='add-pro-right-button' > Add</button>
        </div>
        <div className="right-foot">
        <input placeholder="...pro" className='add-pro-input-left-2'/> 
          <button className='add-pro-left-button-2' > Add</button>

          <input placeholder="...pro" className='add-pro-input-right-2'/> 
          <button className='add-pro-right-button-2' > Add</button>
        </div>
      </article>
    );
  }
}

export default ProsCons;
