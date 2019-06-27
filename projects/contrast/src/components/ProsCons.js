import React, { Component } from "react"

import './prosCons.css'

class ProsCons extends Component{
    constructor(){
        super()

        this.state = {
            fakeVariable: 0
        }
    }

    render(){
        return(
            <div>
                <section className='left-pros-cons'></section>
                <section className='right-pros-cons'></section>
            </div>
        )
    }
}

export default ProsCons