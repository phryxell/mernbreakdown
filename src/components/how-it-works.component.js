import React, { Component } from 'react';

export default class HowItWorks extends Component {

  render() {
    return (
      <div>
        <h4>This is how it works!</h4>

        <p>Step 1 - Create user. Add your name at the 'Create User' page.</p>

        <p>Step 2 - Select your name at the 'Add Breakdown' page and fill in the rest of the fields with your favorite breakdown.</p>
     
        <p>Step 3 - Listen to the rest of the breakdowns in the breakdowns list!</p>

        <h4>Adding YouTube link</h4>

        <p>For the link to work you need to copy the entire URL from the video and paste it in the correct field. If you want to, you can copy the link with a timestamp from YouTube, this results in links that automatically redirects visitors to the breakdown time!</p>
      </div>
    )
  }
}