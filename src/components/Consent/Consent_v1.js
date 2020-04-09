import React from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import Checkbox from '../Checkbox/Checkbox';

import './Consent.css';
// import './bootstrap.min.css';


// Fetch participant data onClick after veryfing that all the boxes are ticked 
const checkboxes = [
  {
    name: 'I have read the information above, and understand what the study involves',
    key: 'checkBox1',
    label: 'check-box-1',
  },
  {
    label: 'check-box-2',
    key: 'checkBox2',
    name: 'I understand that my anonymised personal data can be shared with others for future research, shared in public databases and in scientific reports.',
  },

  {
    label: 'check-box-3',
    key: 'checkBox3',
    name: 'I understand that I am free to withdraw from this study at any time without giving a reason and this will not affect my future medical care or legal rights.',
  },
  {
    label: 'check-box-4',
    key: 'checkBox4',
    name: 'I understand the potential benefits and risks of participating, the support available to me should I become distressed during the research, and who to contact if I wish to lodge a complaint.',
  },
  {
    label: 'check-box-5',
    key: 'checkBox5',
    name: 'I understand the inclusion and exclusion criteria in the Information Sheet and as explained to me by the researcher.  I confirm that I do not fall under the exclusion criteria.',
},
  {
    label: 'check-box-6',
    key: 'checkBox6',
    name: 'I agree that the research project named above has been explained to me to my satisfaction and I agree to take part in this study.',
  },
];



class Consent extends React.Component {
  constructor(props) {
    super(props);

    const prolific_id = this.props.location.state.prolific_id
    const study_id    = this.props.location.state.study_id
    const longit_id   = this.props.location.state.longit_id
    
    
      this.state = {
      checked: false,
      prolific_id: prolific_id, 
      study_id : study_id,
      longit_id: longit_id,
      checkedItems: new Map(),
    }

    console.log(this.state.checkedItems) 
  
    this.redirectToTarget.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  static contextTypes = {
    router: PropTypes.object
  }
    
  
  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    console.log(this.state.checked) 
    console.log(this.state.checkedItems) 

    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));

  }

  redirectToTarget = () => {

  this.props.history.push({
    pathname: `/Survey`, 
    state: {participant_info: this.state} 
  })
}
    

  handleCheckboxChange = event =>
    this.setState({checked: event.target.checked})

    
render() {
  return (
      <div className='textbox'>
       <React.Fragment>
        {
          checkboxes.map(item => (
            <label key={item.key}>
            <p></p>
              {item.name}
              <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} className='checkbox'/>
            </label>
          ))
        }
      </React.Fragment>
      </div>
    );
  }
}
 
export default withRouter(Consent);
