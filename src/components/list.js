import React from 'react'

function list() {
    const persons= [
        {
            id: 1,
            name: 'mercy',
            age: 30,
            skills: 'react'
        },
        {
            id: 2,
            name: 'susan',
            age: 25,
            skills: 'angular'  
        },
        {
            id: 3,
            name: 'diana',
            age: 28,
            skills: 'vue'
        }
    ]

    const personlist = persons.map(person => <person key={person.id} person={person}/>)
    return <div>{personlist}</div>
    
}

export default list;