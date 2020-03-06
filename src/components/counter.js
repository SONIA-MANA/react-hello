import React, {component} from 'react'

class counter extends component {
    constructor(props) {
        super(props)

        this.state={
            count:0
        }
    }

    increment() {
      //  this.setState({
      //     count: this.state.count + 1
      //}, 
      // () => {
      //     console.log('callback value', this.state.count)
      // }
      // )

      this.setState((prevState, Props) => ({
          count: prevState.count + 1
      }))
        console.log(this.state.count)
    }
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }



    render(){
        return (
          <div>
            <div>count - {this.state.count}</div>
            <button onclick={() =>this.incrementFive()}>increment</button>
          </div>
        );
    }
}

export default counter;