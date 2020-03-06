import React from 'react'

// function com() {
// return<h1>Hello world</h1>    
// }

const greet = props => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
    )
} 

export default greet;