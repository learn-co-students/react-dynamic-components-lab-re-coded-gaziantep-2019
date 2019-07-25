// add Comment component here
import React from 'react';


  export default class Comment extends React.Component {
  
    render() {
      return (
        <div className="Comment">
        {this.props.commentText}
      </div> 
      )
    }
    
  }