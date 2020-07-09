import React from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

// import other questionnaires the same way
import * as ocir from '../../questionnaires/OCIR'; 
import * as hads from '../../questionnaires/HADS';
import * as pad from '../../questionnaires/PADWSUR';
import * as feedback from '../../questionnaires/FEEDBACK';
// Questions specific for part 1 COVID19:
import * as covidprotbeh from '../../questionnaires/COVID19_protbehav_part3.js';
import * as covidinfos from '../../questionnaires/COVID19_infos_part4.js';
import * as covidpersimp from '../../questionnaires/COVID19_persimp_part6.js';


var quizData = {
  covidprotbeh: covidprotbeh,
  covidinfos: covidinfos,
  covidpersimp: covidpersimp,
  ocir: ocir,
  pad: pad,
  hads: hads,
  feedback: feedback
}


function createQuiz(id,survey_name) {
     return {
         id: id,
         surveytag: survey_name,
         quizQuestions: quizData[survey_name]
     };
 }


// var list = [];
//  for(var i = 0; i < n; i++) {
//     var obj = createQuiz(i,survey_list[i]); //add other params if you need
//     list.push(obj);
//  }
//  console.log(list);


class Survey extends React.Component {
  constructor(props){
    super(props);

    // Information about a specific block of the Survey:
    const block_info = {
      surveytag  : this.props.location.state.participant_info.survey_list[0], // First questionnaire in the list
     }

    var currentDate   = new Date().toLocaleString(); // maybe change to local 
    
    this.state = {
      participant_info : this.props.location.state.participant_info,
      block_info       : block_info,
      newblock_frame   : this.props.location.state.newblock_frame,
      questions        : quizData[this.props.location.state.participant_info.survey_list[0]].default,
      finished         : false,
      beginexp         : currentDate, 

    }


    this.getSurveyBlock.bind(this);
    this.redirectToQuiz.bind(this);
    this.redirectToEnd.bind(this); 
    this._isMounted = false;
    this._handleGoBack.bind(this);
    this._handleTimeOut.bind(this);
  }


  redirectToQuiz () {
      if((this.props.location.state.participant_info.block_number <= (this.props.location.state.participant_info.TotalBlock)))
          {
          if (this.state.newblock_frame){ // TRUE
          this.setState({newblock_frame : false})

          // console.log(this.state.newblock_frame)
          this.props.history.push({
           pathname: `/QuizBlock`,
           state: {participant_info: this.state.participant_info,
                   block_info      : this.state.block_info,
                   questions       : this.state.questions,
                   beginexp        : this.state.beginexp
                 }
          })}
          else // FALSE
          {
            if (this._isMounted)
            {

              // console.log('Block number',this.props.location.state.participant_info.block_number)

              if (this.props.location.state.participant_info.block_number===this.props.location.state.participant_info.TotalBlock){ // just finished the LAST BLOCK

                // redirect to the final
                this.setState({finished: true})

              }
              else if (this.props.location.state.participant_info.block_number<this.props.location.state.participant_info.TotalBlock){ // just finished the LAST BLOCK

              const newblocknumber = this.props.location.state.participant_info.block_number + 1
              // console.log(newblocknumber)
              this.getSurveyBlock(newblocknumber,this.props.location.state.participant_info.survey_list)
              this.setState({newblock_frame: true, participant_info : {...this.state.participant_info, block_number:newblocknumber},})
              }

            }
          }
        }
      }

  componentDidMount() {
  this._isMounted = true;
  document.body.style.background= '#fff';
  // this._isMounted && this.getSurveyBlock(this.props.location.state.participant_info.block_number,this.props.location.state.participant_info.survey_list);
    window.history.pushState(window.state, null, window.location.href);
    window.addEventListener('popstate', e => this._handleGoBack(e));
    window.onbeforeunload = this._handleRefresh

  }

  componentWillUnmount() {
    clearTimeout(this._handleTimeOut);
  }

  _handleRefresh(evt){
    return false // error message when refresh occurs
  }

  _handleGoBack(event){
    window.history.go(1);
  }

  componentWillUnmount()
  {
   this._isMounted = false;
  }

  _handleTimeOut() {
    setTimeout(() => {
     this.redirectToQuiz()
    }, 1500);
}

 // Get info about the specific Survey Block:
 getSurveyBlock(block_number_,survey_list_) {

    // console.log('Block Number Get Survey Block:',block_number_+1)

    const surveytag_block = survey_list_[block_number_]
    // console.log('SurveyTag Block:',surveytag_block)

    this.setState({ loading: true , questions: quizData[survey_list_[block_number_]].default, block_info : {...this.state.block_info, surveytag:surveytag_block}});

}

 redirectToEnd(){

    // Push cashed data to DB: 
    let cashed_ = {}
    if (sessionStorage.hasOwnProperty('cashed')) {
        cashed_ = sessionStorage.getItem('cashed');

        try {
          cashed_ = JSON.parse(cashed_);
          // console.log('parsed cash',cashed_)
        } catch (e) {
          console.log('Cannot parse cashed')
        }
    }

    alert("You will now be redirected to the validation page. Please, confirm leaving the page. Thank you!")
    // window.location.replace('https://app.prolific.co/submissions/complete?cc=1A496EDB')
    window.location = 'https://app.prolific.co/submissions/complete?cc=67D0ACA0' 

}


render()
  {
    let text
    if ((this.state.block_info.surveytag === this.props.location.state.participant_info.survey_list[0]) && (this.state.newblock_frame))
    {
      text = <div className='SurveyIntroText'> <p>Dear Participant,</p>
      <p><span className="bold">Thank you for completing the two games!</span></p>
      <p>This part of the study will take about 15 minutes.</p>
      <p>You will now be asked to complete several questionnaires.</p>
      <p>You have already seen some of these surveys in the previous study but some questionnaires are new.</p>
      
      </div>

          
    return (
      <div>
      <center>
      <div className="instructionsButtonContainer">
        <div>
          {text}
        </div>
        <center>
          <Button className="buttonInstructionStart" onClick={()=>this.redirectToQuiz()}>
          <span className="bold">START</span>
          </Button>
        </center>
      </div>
      </center>
      </div>);
    }

     else if ((this.state.block_info.surveytag !== this.props.location.state.participant_info.survey_list[0]) && (this.state.newblock_frame))
      {
        return(<div>{this._handleTimeOut()}</div>);
      }

    else if ((this.props.location.state.participant_info.block_number === this.props.location.state.participant_info.TotalBlock) && (this.state.finished===true))
    {
      
        text = <div className='SurveyIntroText'> <p><span className="bold">You completed all the questionnaires!</span></p>
            
            <p>For information about the COVID-19 (coronavirus), please visit the following websites:
            <a style={{display: "table-cell"}} href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank">WHO</a> 
            </p>
            <p>
            <a style={{display: "table-cell"}} href="https://www.gov.uk/coronavirus" target="_blank">GOV.UK</a>
            </p> 
           
            <p>If you have any questions related to this study, please contact a.loosen.17@ucl.ac.uk.</p> 

            <p>You will now be redirected to the validation page.</p>
            <p>Please, confirm leaving the page when prompted by the browser. Thank you!</p>
            </div>
    
      return (
          <div>
          <center>
          <div className="restarttraining">
              {text}  <div className="translate"/>
          </div>
          <div>
            <Button variant="secondary" color="danger" size="sm" className="buttonInstructionFinal" type="submit" onClick={() => this.redirectToEnd()}>Continue</Button>
          </div>
          </center>
          </div>);
    }
    else
    {
          text = 'Thanks a lot for you input so far, please continue with the next section'
        return (
      <div>
      <center>
      <div className="SurveyIntroText">
        {text}
      </div>
      <center>
            <Button className="buttonInstructionStart" onClick={()=> this.state.finished ? this.redirectToEnd() : this.redirectToQuiz()}>
            &#8594;
            </Button>
            </center>
    </center>
    </div>);
    }
  }

}

export default withRouter(Survey);
