import React from 'react'

const hello= () => {
//    return (
//        <div classname='dummyclass'>
//            <h1>Hello world</h1>
//        </div>
//    )
return React.createElement(
    'div',
    {id: 'Hello', className: 'dummyclass'},
    React.createElement('h1', null, 'Hello world')
    )
}

export default hello;