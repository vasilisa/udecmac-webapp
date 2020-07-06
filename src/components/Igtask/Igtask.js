import React from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { API_URL } from '../../config';
import { handleResponse } from '../helpers';
import queryString from 'query-string';
import './Igtask.css';
// import './bootstrap.min.css';


// we might need it for the survey part after the Igt task 

const survey_list = [
// this goes on each time point 
'pad', 
'ocir',
'hads', 
'covidprotbeh',
'covidinfos',
'covidpersimp',
'feedback'
 ] 


 
const n =  survey_list.length-1;   

class Igtask extends React.Component {
  constructor(props) {
    super(props);

    let url    = this.props.location.search;
    console.log(url) 
    let params = queryString.parse(url);

    // console.log(params) 
    const prolific_id       = (params['prolific_id']=== undefined ? 'undefined' : params['prolific_id']) 
    const participant_id    = (params['participant_id']=== undefined ? 'undefined' : params['participant_id']) 

    var currentDate   = new Date(); // maybe change to local 
    var date          = currentDate.getDate();
    var month         = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year          = currentDate.getFullYear();
    var dateString    = date + "-" +(month + 1) + "-" + year;
    
    
   this.state = {
      participant_id: 1, // by default 
      prolific_id: prolific_id,
      study_id: 'COVID-T2',
      longit_id: 2, // by default the first presentation of task, might be subject to modifications 
      block_number : 0, // has to be in the parent for Survey component for proper functioning 
      TotalBlock: n, // has to be in the parent for Survey component for proper functioning 
      beginexp: currentDate,
      endexp: '',
      survey_list: survey_list, // might not need it here
      date: dateString,  
  }


    this.redirectToTarget.bind(this);
    // this.fetchParticipantInfo.bind(this); TO BE CHANGED 
  }


  static contextTypes = {
    router: PropTypes.object
  }

  // Mount the component to call the BACKEND and GET the information
    componentWillMount() {
    document.body.style.background = "fff";  
    // this.fetchParticipantInfo(); // TO BE CHANGED 
    } 
    
  
  redirectToTarget(){
// This is for debug purposes only 
  this.props.history.push({
      pathname: `/Survey`, 
      state: {participant_info: this.state, newblock_frame: true} // to be changed
  })

}

  // fetchParticipantInfo () {
  //        fetch(`${API_URL}/participants_question_data/last_participant_id`) 
  //          .then(handleResponse)
  //          .then((data) => {
  //            const participant_id_ = parseInt(data['new_participant_id'])
  //            // console.log(participant_id_)

  //            this.setState({
  //                    participant_id : participant_id_,
  //                });
  //        })
  //          .catch((error) => {
  //           console.log(error)
  //        });
  //       }

render() {
  return (
      <div>
        <div className="IntroConsentText">

          <p><span className="bold">IFG task is not ready yet!</span></p>
          <p>Please, proceed to the survey directly.</p>
          <p>Thank you!</p>
          <br></br>

        <div className="buttonContainer">
          <Button type="button" onClick={()=>this.redirectToTarget()}>NEXT</Button>
        </div>
        </div>
        </div>  
    );
  }
}
 
export default withRouter(Igtask);
