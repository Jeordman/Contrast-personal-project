import React, { Component } from "react";
import axios from "axios";
import "./compareWindow.css";
import ProsCons from "./ProsCons";

class CompareWindow extends Component {
  constructor() {
    super();

    this.state = {
      fakeVariable: 0
    };
  }

  componentDidMount() {
    axios
      .get("/api/list")
      .then(res => {
        this.setState({ list: res.data });
        console.log("hit");
        console.log(this.state.list);
      })
      .catch(err => {
        console.log("error", err);
      });

     
  }


  render() {

    let { listProp, currentItemLeft, currentItemRight } = this.props
    console.log('list', listProp)
    console.log(currentItemLeft);
    return (
      <div>
        <section className="compare-window-holder">
          <section className="compare-left">
            <img className='img-all' width="70%" src={currentItemLeft.img} />
            <section className='name-title' >{currentItemLeft.name} </section>
          </section>
          <section className="compare-right">
            {" "}
            <img className='img-all' width="70%" src={currentItemRight.img} />
            <article className='name-title' >{currentItemRight.name}</article>
          </section>
        </section>

        <ProsCons currentItemLeft={currentItemLeft} currentItemRight={currentItemRight}/>
      </div>
    );
  }
}

export default CompareWindow;
