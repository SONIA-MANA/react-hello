import React from 'react'

function person(person) {
    return (
        <div>
          <h2>
            i am {person.name}. i am {person.age} years old. i know {person.skill}
          </h2>
        </div>
    )
}

export default person;
