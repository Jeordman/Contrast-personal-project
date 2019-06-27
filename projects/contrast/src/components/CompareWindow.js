import React, { Component } from 'react'

import './compareWindow.css'

class CompareWindow extends Component{
    constructor(){
        super()

        this.state = {
            fakeVariable : 0
        }
    }

    render(){
        return (
            <div>
                <section className='compare-window-holder'>
                <section className='compare-left'>ey</section>
                <section className='compare-right'>ey</section>
                </section>
            </div>
        )
    }
}

export default CompareWindow