/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h2><u>HELLO</u></h2>
        <p>
          Back in the floppy-in-a-box days we tried to ship no more than twice a year or so, as it cost money to ship a new version and often we had to charge the customers at least something for it.
        </p>

        <p>For Trapeze and Deltagraph back then we never had to ship any “patch disks” or emergency fixes so the only releases were generally major ones. Our releases had to be of quality to stand on their own for at least 6 months. Most of the time we did not even know who any new buyers were unless they told us.</p>

        <p>For the purposes of this post I want to talk mostly about apps, particularly mobile apps since that I what I do today. While shipping these days is easy (even Apple is fairly quick these days) and free, the question of how often is still a valid one.</p>

      </div>
    );
  }
}

export default Home;
