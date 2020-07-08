import React from 'react';
import {withRouter} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import queryString from 'query-string';


import { API_URL } from '../../config';
import { handleResponse } from '../helpers';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'; // for newer version 

import './InstructionsIgt.css';


/*
Instruction component is created when the particpant accepts terms and conditions and proceeds to the experiment. 
It loads the participant id, and the block configurations that will be played during the game. 
*/

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


class InstructionsIgt extends React.Component {
    constructor(props) {
        super(props);

        let url    = this.props.location.search;
        // console.log(url) 
        let params = queryString.parse(url);

        // console.log(params) 
        const prolific_id       = (params['PROLIFIC_PID']=== undefined ? 'undefined' : params['PROLIFIC_PID']) 
        const participant_id    = (params['PARTICIPANT_ID']=== undefined ? 1000 : params['PARTICIPANT_ID']) 


//         const participant_info = this.props.location.state.participant_info
  
//         console.log('Participant info from props', participant_info)


        var current_date = new Date().toLocaleString();

        this.state = {
            prolific_id : prolific_id,    
            participant_id : participant_id,
            study_id: 'COVID-T2',
            longit_id: 2,
            survey_list: survey_list,
            date_time: current_date, 
            block_number: 0, // participant_info.block_number, // not sure it should go here ! 
            survey_list: survey_list, // participant_info.survey_list, // not sure it should go here ! 
            TotalBlock: n, // participant_info.survey_list.length-1,
            TotalRun: 3, 
            run: 1,
            game: 1,   
            newblock_frame : true, 
            readyToProceed: false,
            beginexp: current_date, 
            currentInstructionText: 1,
            score: 0, 
        }

    // console.log('Instructions', this.state)

    this.handleInstructionsLocal = this.handleInstructionsLocal.bind(this) // bind the method to avoid error on frames collapsed
    }; 

    // Mount the component to call the BACKEND and GET the information
    componentWillMount() {
    document.body.style.background = "fff";  
    } 
    
    // Transition between the instruction screens   
    handleInstructionsLocal(event){
        var curText     = this.state.currentInstructionText;
        var whichButton = event.currentTarget.id;
    
        if(whichButton==="left" && curText > 1){
        this.setState({currentInstructionText: curText-1});
        }
        else if(whichButton==="right" && curText < 2){ // this only for the 1st part of instructions right now: to be changed 
      
        this.setState({currentInstructionText: curText+1});
        }
        if(whichButton==="right" && curText === 1){
        this.setState({readyToProceed: true});
        }
    }

    // change the router type to pass the props to the child component 
    redirectToTarget = () => {

    this.props.history.push({
       pathname: `/IgtBlock`,  
       state: {participant_info: this.state, newblock_frame:this.state.newblock_frame} 
     })
    }


    render() {
        let mytext
        if (this.state.currentInstructionText===1) {
            mytext = <div className='textbox'> <p></p><p>In this game you will see <span className="bold">25 boxes</span> and each of these boxes is one of <span className="bold">2 colours</span>.</p>
            <p>For example, you might see <span className="yellow bold">yellow</span>  and <span className="blue bold">blue</span> boxes.</p>
           
            <p> At the beginning all boxes are covered.</p>

            <p><span className='bold'>To open the box you, you need to click on it </span>, and it will reveal its colour.</p>
            <p><span className='bold'>Your goal is to choose the colour that you think is more plentiful</span>.</p>
            <p>If you choose a correct colour you will earn <span className="bold">100 points</span>, otherwise you will loose <span className="bold">-100 points</span>.</p>
            </div> 
        }

        else if (this.state.currentInstructionText===2) {
        mytext = <div className='textbox'> <p></p><p>Before you make your choice, you can <span className="bold"> open as many boxes as you want untill you feel certain enough</span></p>
                <p>Once you feel certain enough, you can decide for the colour by clicking on the coloured boxes below.</p>
                <div className="symbolframe">    
                    <img className="introsymbol"  src={require('../../images/IGT_inst1.png')} alt='introsymbol'/> 
                </div>
                </div>
            }
        // To maybe put within Block 
        else if (this.state.currentInstructionText===3) {
            mytext = <div className='textbox'> <p></p> <p> Well done so far!</p>
            <p>The next games are a bit different.</p>
            <p><span className="bold">With every box open</span>, you will earn <span className="bold">10 points less </span>.</p>
            <p>This time the wins start at 250 points.</p>
            <p>If you would decide without opening any boxes, you would win 250 points.</p>

            <div className="symbolframe">    
                    <img className="introsymbol"  src={require('../../images/IGT_inst2.png')} alt='introsymbol'/> 
            </div>
            </div>;
        }
        else if (this.state.currentInstructionText===4) {
            mytext = <div className='textbox'> <p></p> <p>There is <span className="bold">always</span> a slot machine that gives <span className="bold">currenty</span> more points on average then the other one.</p>
            <p> If you open let's say 3 cards and you choose a correct colour, then you would win 220 points.</p>
            <p>However, if  you're wrong, you will <span className="bold">always lose 100 points</span>.</p>
            <p>You can see how much you can win on the score board on the top.</p>
            </div>;
        }

        return (
            <CSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}>
            <div className="center translate">
            <div className="InstructText">
            <center> 
            <p className='title'><span className="bold">INSTRUCTIONS</span></p>
            </center>
                <center> 
                <div className="instructionsButtonContainer">

                    {this.state.currentInstructionText > 1 ? // id helps get which button was clicked to handle the 

                        <Button id="left" className="buttonInstructions" onClick={this.handleInstructionsLocal}> 
                            <span className="bold">&#8592;</span>
                        </Button>
                        :
                        <Button id="left" className="buttonInstructionsHidden">
                            <span className="bold">&#8592;</span>
                        </Button>
                    }

                    {this.state.currentInstructionText < 4 ?
                        <Button id="right" className="buttonInstructions" onClick={this.handleInstructionsLocal}>
                            <span className="bold">&#8594;</span>
                        </Button>
                        :
                        <Button id="right" className="buttonInstructionsHidden">
                            <span className="bold">&#8594;</span>
                        </Button>
                    }

                    <div>
                        {mytext}
                    </div>
                    {this.state.readyToProceed ?
                    <div className="buttonInstruction">
                    <center>
                        <label className='textbox'> Let's try it first!</label><br/>
                        <Button className="buttonInstructionStart" onClick={()=>this.redirectToTarget()}>
                            <span className="bold">START</span>
                        </Button>
                    </center>
                    
                    </div>
                    : null}

            </div>
        </center>
        </div>
        </div>
        </CSSTransitionGroup>
        ) 
    }
}

export default withRouter(InstructionsIgt);
