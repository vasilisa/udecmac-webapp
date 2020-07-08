import React from 'react';
import { API_URL } from '../../config';
// import { handleResponse } from '../helpers';
import {withRouter} from 'react-router-dom';

import './ist.css';

import Field from './Field.js'

import clsjson from './cls.json'; // A JSON with the colour pairs 
import sqsjson from './sqs.json'; // A JSON with the coloured block positions for 2 game rounds 


class IgtBoard extends React.Component {
  constructor(props){
    super(props);

    const participant_info = this.props.location.state.participant_info
    
    const pot_win_      = (this.props.location.state.participant_info.run===3) ? 250 : 100
    
    // console.log(this.props.location.state.participant_info)

    const sequence_  = sqsjson[this.props.location.state.participant_info.run-1][this.props.location.state.participant_info.game-1] // 0 should be the 1st game of the run 
    const cols_      = clsjson[this.props.location.state.participant_info.run-1][this.props.location.state.participant_info.game-1] 
    
    const totalTrial_ = this.props.location.state.participant_info.run ===1 ? 1: 15 // ORIG 15 First run is a training one with just 1 game. 

    this.state = {
      participant_info: participant_info,
      run: this.props.location.state.participant_info.run,
      game: this.props.location.state.participant_info.game, 
      bup_col: clsjson,  // this.props.location.state.block_info.cls,
      bup_seq: sqsjson, // this.props.location.state.block_info.seq,
      cols: cols_, // Array(2).fill(null),
      openfields: Array(25).fill(null),
      sequence: sequence_, // Array(25).fill(null),
      opened_seq: Array(25).fill(null),
      color: Array(25).fill(null),
      n_opened: 0,
      outcome: [],
      start: 1,
      chosen: [],
      clickable: true,
      pot_win: pot_win_,
      pot_loss: -100,
      // history: [],
      end: 0, 
      totalOutcome:0, 
      cashed: {},
      totalTrial: totalTrial_, 
      correct: [], 
      totalOpened: [], 
      chosen: [], 
      totalSeq: [],
      outcomes: [] 
    };

    this._isMounted     = false;
    // this.initialiseGame = this.initialiseGame.bind(this) 
    this.evalOutcome.bind(this) 
    this.redirectToBlock.bind(this) // when the run ends redirect to block 
    this.handleEndOfGame.bind(this)

    var time_date_first               = new Date()
    this.prev_reaction_time_date      = time_date_first.getTime() // the beginning of the trial 
    this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(this) 
  };  

componentDidMount() {
    
    document.body.style.background = "fff";
    this._isMounted = true;
    document.body.style.background= '#fff';   
    // window.history.pushState(window.state, null, window.location.href);
    // window.addEventListener('popstate', e => this._handleGoBack(e));
    // window.onbeforeunload = this._handleRefresh

    this.hydrateStateWithLocalStorage();


//     this.initialiseGame()
  
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


  hydrateStateWithLocalStorage() {

      // if the key exists in localStorage
      if (sessionStorage.hasOwnProperty('cashed')) {
        let cashed_ = sessionStorage.getItem('cashed');

        try {
          cashed_ = JSON.parse(cashed_);
          this.setState({'cashed': cashed_ });
        } catch (e) {
          // handle empty string
          this.setState({'cashed': cashed_ });
        }

      }
   //    console.log('retreived cash', this.state.cashed)
    }
  

    handleFieldClick(i) {
    if (this.state.clickable) {

      const openfields    = this.state.openfields.slice();
      const seq           = this.state.sequence.slice();
      const n_opened_prev = this.state.n_opened;
      const opened_seq    = this.state.opened_seq.slice();
      const color         = this.state.color.slice();

      if (openfields[i] === null){
        openfields[i] = seq[n_opened_prev];
        this.setState({openfields: openfields});
        if ( seq[n_opened_prev]===1){
          color[i] = this.state.cols[0];
        } else if (seq[n_opened_prev]===2){
          color[i] = this.state.cols[1];
        }
        this.setState({color: color});

      }

      const n_opened = openfields.filter(openfields => openfields !== null).length;
      this.setState({n_opened: n_opened});

      if (n_opened > n_opened_prev){
        opened_seq[n_opened-1] = openfields[i];
        this.setState({opened_seq: opened_seq})
        // console.log('Opened seq',opened_seq)
      }

      // adjust pot_outcomes
      if (this.state.run == 3) {
        const potw = 250 - n_opened * 10;
        // console.log(potw)
        this.setState({pot_win: potw});
      }

    }


  }

  renderField(i){
    return (
      <Field
      value={this.state.openfields[i]}
      color={this.state.color[i]}
      onClick={() => this.handleFieldClick(i)}
      />
    );
  }

  renderOutField(){
    return (
      <Field
      value={this.state.outcome}
      />
    );
  }


  evalOutcome(seq,chos,pot_w,pot_l){
  var outcome = 0;
  const cola = seq.filter(function(cols){return cols === 1;}).length;
  const colb = seq.filter(function(cols){return cols === 2;}).length;
  // console.log(cola);
  // console.log(colb);
  if (cola > colb && chos === 1) {
    outcome = pot_w;
  } else if (cola > colb && chos === 2) {
    outcome = pot_l;
  } else if (cola < colb && chos === 1) {
    outcome = pot_l;
  } else if (cola < colb && chos === 2) {
    outcome = pot_w;
  } else {
    outcome = -999;
  }
  return outcome;
}

  redirectToBlock ()

  // Compute the block relative performance: 

  {
    console.log('Redirect')

    const score = this.state.totalOutcome

    // console.log('Score',score)
    
    this.props.history.push({
      pathname: `/IgtBlock`,
      state: {participant_info:this.state.participant_info, newblock_frame: false, score: score}
    })    
  }

    renderSubmButton(i){
      return(
        <Field
        color={this.state.cols[i-1]}
        onClick={() => this.handleEndOfGame(i)}
        />
      );
    }

    renderPotOutcome(){
      return(
        <div><table><tbody><tr><td style={{textAlign:"left"}}>
        correct: {this.state.pot_win}
        </td><td  style={{textAlign:"right"}}>
        incorrect: {this.state.pot_loss}
        </td></tr></tbody></table></div>
      )
    }

    handleEndOfGame(i) {

    
    if (((this.state.run < 3) && (this.state.n_opened > 0)) || (this.state.run == 3)) {

      // evaluate result
      const outcome = this.evalOutcome(this.state.sequence,i,this.state.pot_win,this.state.pot_loss);
      const game_   = this.state.game + 1 

      // console.log("submitted: " + i)
      // console.log("outcome: "+outcome)
      // console.log('Total opened', this.state.n_opened)

    
      let chosen_ = this.state.chosen; //
      chosen_.push(i)

      let correct_ = this.state.correct;
      correct_.push(outcome >0 ? 1:0)

      let outcomes_ = this.state.outcomes
      outcomes_.push(outcome)

      let totalOpened_ = this.state.totalOpened;
      totalOpened_.push(this.state.n_opened)

      let totalSeq_ = this.state.totalSeq
      totalSeq_.push(this.state.opened_seq.slice(0, this.state.n_opened))

      
      this.setState({
      chosen: i,
      outcome: outcome,
      totalOutcome: this.state.totalOutcome + outcome,
      cols: Array(2).fill(null),
      openfields: Array(25).fill(null),
      sequence: Array(25).fill(null),
      opened_seq: Array(25).fill(null),
      color: Array(25).fill(null),
      n_opened: 0,
      totalOpened:totalOpened_, 
      chosen: chosen_, 
      correct: correct_,
      totalSeq: totalSeq_,
      completed: 'no', 
      outcomes: outcomes_ 
          
      }); // the one of the chosen colours : left or right -> how is it mapped to colours 


      if (game_ <=this.state.totalTrial) {

        // console.log('Run',this.state.run)
        // console.log('Game',game_)

        const win_ = this.state.run === 3 ? 250: 100 
        

        // next game 
        const sequence_  = this.state.bup_seq[this.state.run-1][game_-1] // 0 should be the 1st game of the run 
        const cols_      = this.state.bup_col[this.state.run-1][game_-1] 
        
        setTimeout(() => this.setState({
        game: game_,
        cols: cols_,
        sequence: sequence_,
        outcome: [],
        start: 1,
        chosen: [],
        clickable: true,
        pot_win: win_
    
      }),1000);

      }

      else {

      var completed_ = 'no'
      if (this.state.run === 3) 
      {
        var completed_ = 'yes' 
      }
      
      // Save data
      let block_id    = this.state.participant_info.run

      var current_date = new Date().toLocaleString();
      
      let body     = {  'block_number'     : this.state.participant_info.run, 
                      'chosen' : this.state.chosen,
                      'opened': this.state.totalOpened,
                      'correct': this.state.correct, 
                      'sequence': this.state.totalSeq, 
                      'completed' : completed_,
                      'beginexp'  : this.state.participant_info.beginexp,
                      'endexp'    : current_date, 
                      'outcomes'  : this.state.outcomes
                  }  

       fetch(`${API_URL}/igtask/create/`+this.state.participant_info.participant_id +'/'+this.state.participant_info.run+'/'+this.state.participant_info.prolific_id, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(body)
     })

//         console.log('Redirect to Block')
        setTimeout(() => this.redirectToBlock(),1000)
        // redirect to Block 
      }

    };
    }

    render(){

      const progress = 'Game ' + this.state.game + ' of ' + this.state.totalTrial

      if (this.state.run<3) {
          var correct = 'Correct: 100'
      }
      else {
          var  correct = 'Correct: ' + this.state.pot_win
      }
      return(
        <div>
        <center>

        <div className="score">
        <div>{progress}</div>
        <tr>
          <td>{correct}</td>
          <td>Incorrect: -100</td>
        </tr>
        </div>

        <div className="board">

        <div className="board-row">
        {this.renderField(0)}
        {this.renderField(1)}
        {this.renderField(2)}
        {this.renderField(3)}
        {this.renderField(4)}
        </div>


        <div className="board-row">
        {this.renderField(5)}
        {this.renderField(6)}
        {this.renderField(7)}
        {this.renderField(8)}
        {this.renderField(9)}
        </div>

        <div className="board-row">
        {this.renderField(10)}
        {this.renderField(11)}
        {this.renderField(12)}
        {this.renderField(13)}
        {this.renderField(14)}
        </div>

        <div className="board-row">
        {this.renderField(15)}
        {this.renderField(16)}
        {this.renderField(17)}
        {this.renderField(18)}
        {this.renderField(19)}
        </div>

        <div className="board-row">
        {this.renderField(20)}
        {this.renderField(21)}
        {this.renderField(22)}
        {this.renderField(23)}
        {this.renderField(24)}
        </div>

        </div>
        <div className="response-row">

        <tr>
          <td>{this.renderSubmButton(1)}</td>
          <td>{this.renderSubmButton(2)}</td>
        </tr>
        
        <div className="gap">{this.state.outcome}</div>
        
        </div>
        
        </center>
        </div>
      )
    }
}

export default withRouter(IgtBoard);






