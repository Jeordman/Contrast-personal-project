import React, {Component} from 'react'

import './list.css'

class List extends Component {
constructor(){
    super()
    
    this.state = {
        hello : 0
    }
}

render(){
    return (
        <div>
            <section className='left-bar'></section>
            <section className='right-bar'></section>
            
        </div>
    )
}
}

export default List