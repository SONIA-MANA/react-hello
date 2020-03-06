import React, {component} from 'react'

class message extends component {
    constructor() {
        super()
        this.state = {
            message: 'welcome visitor'
        }
    }

    changemessage() {
        this.setState({
           message:'Thank you for subscribing' 
        })
    }

    render(){
      return (
          <div>
             <h1>{this.state.message}</h1>
             <button onClick={() => this.changemessage()}>subscribe</button>
          </div>
        
      );
    }
}

export default message;