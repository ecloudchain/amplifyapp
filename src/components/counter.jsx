import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5,
  };

  render() {
    

    return (
      <React.Fragment>

        <span className = {this.badgeMethod()}>{this.formatCount()} </span>
        <button >Increment</button>

      </React.Fragment>
    );

    }

  badgeMethod() {
    let myclasses = "badge m-2 badge-";
    myclasses += (this.state.count === 0) ? "warning" : "primary";
    return myclasses;
  }

formatCount(){

return this.state.count ===0 ?  'Zero' : this.state.count

 }

}

export default Counter;
