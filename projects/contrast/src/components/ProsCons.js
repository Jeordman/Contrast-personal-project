import React, { Component } from "react";

import "./prosCons.css";

class ProsCons extends Component {
  constructor() {
    super();

    this.state = {
      fakeVariable: 0
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
                return <li className='all-lists'>{obj.description}</li>;
              })}
          </section>
          <section className="left-cons">
            {currentItemLeft.cons &&
              currentItemLeft.cons.map(obj => {
                return <li className='all-lists'>{obj.description}</li>;
              })}
          </section>
        </section>


          <section className="right-pros-cons">
            <ul className="right-pros">
            {" "}
            {currentItemRight.pros &&
              currentItemRight.pros.map(obj => {
                return <li className='all-lists'>{obj.description}</li>;
              })}
            </ul>
            <ul className="right-cons">
            {currentItemRight.cons &&
              currentItemRight.cons.map(obj => {
                return <li className='all-lists'>{obj.description}</li>;
              })}
            </ul>
         </section>

         <footer className='left-foot' > EY</footer>
         <footer className='right-foot'> EY</footer>

      </article>
    );
  }
}

export default ProsCons;
