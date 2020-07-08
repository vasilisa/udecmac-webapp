import React from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { API_URL } from '../../config';
import { handleResponse } from '../helpers';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'; // for newer version 


class IgtBlock extends React.Component {
  constructor(props){
    super(props);

    const participant_info = this.props.location.state.participant_info // information you receive from router component (e.g IgtBoard)

    this.state = {
      participant_info      : participant_info,
      newblock_frame        : this.props.location.state.newblock_frame,
      currentInstructionText: 1, // this is for the transition between the instructions screens without changing the block number
      readyToProceed        : false,
      score: this.props.location.state.score
      }

    this.redirectToSurvey.bind(this);
     
    this._isMounted = false;
    this._handleGoBack.bind(this);
    
  }

  redirectToTarget () {
      // console.log('Redirect to IgtBoard')
      if((this.state.participant_info.run <= (this.state.participant_info.TotalRun)))
          {           
          if (this.state.newblock_frame){
          this.setState({newblock_frame : false})
          this.props.history.push({
           pathname: `/IgtBoard`,
           state: {
              participant_info: this.state.participant_info
            }
          })}
          else
          {
            if (this._isMounted)
            {
              
              const newblocknumber = this.state.participant_info.run + 1
              // console.log('Newblocknumber',newblocknumber)

              if (newblocknumber === this.state.participant_info.TotalRun+1){ 
                // console.log('End of the task')
                this.redirectToSurvey() 
                }

              else {
                
                this.setState({newblock_frame: true, participant_info : {...this.state.participant_info, run:newblocknumber},}) // what gets updated 
              }
            }
          }
        }
      }
    
  
redirectToSurvey = () => {

    // console.log('Redirect to survey', this.state.participant_info)
    this.props.history.push({
      pathname: `/Survey`,
      state: {participant_info: this.state.participant_info, newblock_frame: true} // to verify what is actually imported to a new page and what you need 
    })
  } 
  
  componentDidMount() {  
  this._isMounted = true;
  document.body.style.background= '#fff';   
  window.history.pushState(window.state, null, window.location.href);
  window.addEventListener('popstate', e => this._handleGoBack(e));
  window.onbeforeunload = this._handleRefresh
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


render()
  { 
    let text
    if ((this.state.participant_info.run === 1) && (this.state.newblock_frame))
    { 
      text = <div className='textbox'> <p>This is a practice round. Try to find which of the two colours is <span className="bold">more plentiful!</span></p> 
            </div>

    return (
      <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}>

      <div>
      <center> 
      <div className="instructionsButtonContainer">
        <div>
          {text}           
        </div> 
        <center>
          <Button className="buttonInstructionsBlock" onClick={()=>this.redirectToTarget()}>
            &#8594;
          </Button>
        </center>
      </div>
      </center> 
      </div>
      </CSSTransitionGroup>);
    } 

    // Start the Full run 1 after the practice round 

    else if ((this.state.participant_info.run===1) && (this.state.newblock_frame===false)) 
      { 

       if (this.state.score===100) {
          var textscore = 'Well done! You got it!'
      }
      else {
          var textscore = 'Oops! but you got the idea!'
      }

      text = <div className='textbox'> 
        <p>{textscore}</p>
      </div>

      return (
          <CSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}>
        <div>
        <center>

        <div>
            {text}           
        </div> 
          
        <div className="instructionsButtonContainer">
          <Button id="start" className="buttonInstructionsBlock" onClick={()=>this.redirectToTarget()}>
              &#8594;
          </Button>
          </div>
          </center>
        </div>
      </CSSTransitionGroup>);
    }

    else if ((this.state.participant_info.run===2) && (this.state.newblock_frame===true))

    {
        text = <div className='textbox'> 
                <p>Let's start the real game now!</p>
                <p>You will play several rounds.</p>
                </div>
    
        return (
          <CSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}>
        <div>
        <center>

        <div>
            {text}           
        </div> 
          
        <div className="instructionsButtonContainer">
            <Button id="start" className="buttonInstructionsBlock" onClick={()=>this.redirectToTarget()}>
              START
            </Button>
        </div>
          </center>
          </div>
      </CSSTransitionGroup>);
      }

    else if ((this.state.participant_info.run===3) && (this.state.newblock_frame===true))

      {
        text = <div className='textbox'> 
                <p>The next game is a little bit different.</p>
                <p><span className="bold">With every box you open, you will win 10 points less.</span></p>
                <p>This time, the wins start at 250 points.</p>
                <p>If you would decide without opening any card, you would win 250 points.</p>
                <p>If you open, let's 3 cards and you choose the correct colour, then you would win 220 points.</p>
                <p>However if you are wrong, you will <span className="bold">always loose 100 points</span>.</p>
                <p>You can see how much you can win on the score board on the top.</p>
                <p>You will play several rounds.</p>
                </div>
    
        return (
          <CSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}>
        <div>
        <center>

        <div>
            {text}           
        </div> 
        <div className="symbolframe">    
            <img className="introsymbol"  src={require('../../images/IGT_inst2.png')} alt='introsymbol'/> 
        </div>
        <div className="instructionsButtonContainer">
            <Button id="start" className="buttonInstructionsBlock" onClick={()=>this.redirectToTarget()}>
              START
            </Button>
        </div>
          </center>
          </div>
      </CSSTransitionGroup>);
      }


    else if 
      (this.state.participant_info.run===this.state.participant_info.TotalRun+1)
     
    {
      return(
          <div>{this.redirectToSurvey()}</div> // to be changed        
        )
    }

    else
    {
      
      if (this.state.newblock_frame) 
        {
          text = <div><p>Try to find which of the two colours is <span className="bold">more plentiful!</span></p></div>
        }
      else
        { 
          text = <div><p>Doing great!</p>
                <p>Your score: {this.state.score}</p>
                </div> //'End of block feedback 
        }
        return (
      <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={800}
      transitionAppear
      transitionAppearTimeout={800}>

      <div>
      <center>
      <div className="textbox">
        {text}           
      </div>
        <center>
        <Button className="buttonInstructionStart" onClick={()=>this.redirectToTarget()}>
          &#8594;
        </Button>
        </center>
    </center>
    </div>
    </CSSTransitionGroup>);
    }    
  }

}

export default withRouter(IgtBlock);