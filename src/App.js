import React, {component} from 'react'
import './App.css';
import greet from './components/greet.js'
import hello from './components/hello.js'
import message from './components/message.js'
import counter from './components/counter.js'
import list from './components/list.js'
import form from './components/form.js'


 class App extends component {
   render(){
     return (
     <div className="App">
       <form/>
       <list/>
       <message/>
       <counter/>
       <greet name="bruce"  heroName="Batman">
         <p>you are welcome</p>
       </greet>
       <greet name="claire" heroName="Supermanman">
         <button>Action</button>
       </greet> 
       <greet name="susan" heroName="Wonder Woman"/>
       <hello/>
     </div>
    );
  }
}

export default App;
