import React, { Component } from "react";
import Checkbox from "../Checkbox/Checkbox";
import {withRouter} from 'react-router-dom';



const OPTIONS = ["One", "Two", "Three"];

class Consent extends Component {
  constructor(props) {
    super(props);


  this.state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({ // to change options and options for name, label for clarity 
        ...options,
        [option]: false
      }),
      {}
    ),
    verified: false, 
    count: 0
  };

  console.log(this.state.checkboxes)

  this.redirectToTarget.bind(this);
  this.handleFormSubmit.bind(this);
}

  
  // Tracks changes in clicking the box 
  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    console.log(name)

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      }
    }));

    
  };


  componentDidUpdate(prevState, prevProps) {
    // WHAT I WANT is that it checks how many boxes are checked and if 3 are checked it activate the submit button 
    // Right now I got an ERROR on Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
    const count = sumValues(this.state.checkboxes);
    console.log(count)

    if (count===3){
      this.setState({
      verified: true})
    }
    
  }
// Redirect to the next part of the study 
redirectToTarget = () => {
  this.props.history.push({
    pathname: `/Survey`, 
    state: {participant_info: this.state} 
  })
}

// Create the chekboxes 
createCheckbox = option => (
    <Checkbox
      label={option} // to be changed for clarity 
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option} // to be changed for clarity 
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);


  render() {
    return (
      <div className="container">
          {this.createCheckboxes()}
          <div className="form-group mt-2">
              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                disabled={!this.state.verified}
                onClick={this.redirectToTarget}>
                Submit
              </button>
          </div>
        
      </div>
    );
  }
}


export default withRouter(Consent);