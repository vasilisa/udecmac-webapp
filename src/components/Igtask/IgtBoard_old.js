import React from 'react';
import {withRouter} from 'react-router-dom';

import './ist.css';
// import clsjson from './cls.json';
// import sqsjson from './sqs.json';

import Field from './Field.js'
// import evalOutcome from './evalOutcome.js'

import clsjson from './cls.json'; // A JSON with the colour pairs 
import sqsjson from './sqs.json'; // A JSON with the coloured block positions for 2 game rounds 


class IgtBoard extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.location.state.block_info)
    super(props);
    this.state = {
      run: this.props.location.state.block_info.run,
      game: this.props.location.state.block_info.game, 
      bup_col: clsjson,  // this.props.location.state.block_info.cls,
      bup_seq: sqsjson, // this.props.location.state.block_info.seq,
      cols: Array(2).fill(null),
      openfields: Array(25).fill(null),
      sequence: Array(25).fill(null),
      opened_seq: Array(25).fill(null),
      color: Array(25).fill(null),
      n_opened: 0,
      outcome: [],
      start: 1,
      chosen: [],
      clickable: true,
      pot_win: 100,
      pot_loss: -100,
      // history: [],
      end: 0, 
      totalOutcome:0 
    };

  this._isMounted = false;
  this.initialiseGame = this.initialiseGame.bind(this) 
  this.evalOutcome = this.evalOutcome.bind(this) 

  }


componentWillMount() {
    document.body.style.background = "fff";
    this._isMounted = true;
    document.body.style.background= '#fff';   
    window.history.pushState(window.state, null, window.location.href);
    window.addEventListener('popstate', e => this._handleGoBack(e));
    window.onbeforeunload = this._handleRefresh

    this.initialiseGame()
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

    

  initialiseGame(){
    if (this.state.start === 1){
      console.log("run number " + this.state.run);
      console.log("game number " + this.state.game);
      
      
      this.setState({
        // sequence: this.state.bup_seq[this.state.run-1][this.state.game-1], 
        // cols: this.state.bup_col[this.state.run-1][this.state.game-1],
        start: 0

      });
    
      console.log("Seq " + this.state.sequence);
    
      if (this.state.run == 3) {
        this.setState({pot_win: 250});
      };
//       console.log(this.state);
    };
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
      }


      // adjust pot_outcomes
      if (this.state.run == 3) {
        const potw = 250 - n_opened * 10;
          // console.log(potw)
        this.setState({pot_win: potw});
      }

      // console.log(opened_seq)
      // console.log(n_opened)
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


  handleEndOfGame(i) {
    if (this.state.n_opened > 0) {

      console.log("submitted: " + i)
      this.setState({chosen: i}); // the one of the chosen colours : left or right -> how is it mapped to colours 


      // evaluate result
      const outcome = this.evalOutcome(this.state.sequence,i,this.state.pot_win,this.state.pot_loss);
      const game_   = this.state.game + 1 
      
      console.log("outcome: "+outcome)
      this.setState({
        totalOutcome: this.state.totalOutcome + outcome,
        // game: this.state.game + 1,

        cols: Array(2).fill(null),
        openfields: Array(25).fill(null),
        sequence: Array(25).fill(null),
        opened_seq: Array(25).fill(null),
        color: Array(25).fill(null),
        n_opened: 0,
        outcome: [],
        start: 1,
        chosen: [],
        clickable: true,
    
        // history: this.state.history.concat(this.state) 
      });


  
      // next game
      if (this.state.run > 1 && this.state.game >= 15) {
        this.setState({end: 1});
      }else if (this.state.run == 1) {
        this.setState({end: 1});
      } else {
        this.setState({
          game: this.state.game + 1,
          end: 0,
          sequence: this.state.bup_seq[this.state.run-1][game_-1], 
          cols: this.state.bup_col[this.state.run-1][game_-1],
    
        });
      };

      // prepare next game & pause for 1 sec
      // setTimeout(() => this.initialiseGame,1000);
      
      if (this.state.run == 3) {
         this.setState({pot_win: 250});
       };


      // console.log(this.state);


    };
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

    render(){
      return(
        <div>
        {this.initialiseGame()}
        {this.renderPotOutcome()}
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

        <div className="response-row">
        {this.renderSubmButton(1)}
        <div className="gap">{this.state.outcome}</div>
        {this.renderSubmButton(2)}
        </div>
        </div>
      )
    }
  }

  export default IgtBoard;
