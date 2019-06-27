import React, { Component } from 'react'
import axios from "axios"
import './compareWindow.css'

class CompareWindow extends Component{
    constructor(){
        super()

        this.state = {
            fakeVariable : 0
        }
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
      }

    render(){
        return (
            <div>
                <section className='compare-window-holder'>
                <section className='compare-left'></section>
                <section className='compare-right'>ey</section>
                </section>
            </div>
        )
    }
}

export default CompareWindow