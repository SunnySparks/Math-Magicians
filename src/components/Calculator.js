import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState((state) => calculate(state, e));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-end bg-secondary text-white pb-5 pt-5">0</div>
        </div>
        <div className="row border-bottom border-secondary">
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="AC" onClick={() => { this.handleClick('AC'); }}>AC</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="+/-">+/-</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="%">%</button>
          <button className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5" type="button" name="÷">÷</button>
        </div>
        <div className="row border-bottom border-secondary">
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="7" onClick={() => { this.handleClick('7'); }}>7</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="8" onClick={() => { this.handleClick('8'); }}>8</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="9" onClick={() => { this.handleClick('9'); }}>9</button>
          <button className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5" type="button" name="x">x</button>
        </div>
        <div className="row border-bottom border-secondary">
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="4" onClick={() => { this.handleClick('4'); }}>4</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="5" onClick={() => { this.handleClick('5'); }}>5</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="6" onClick={() => { this.handleClick('6'); }}>6</button>
          <button className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5" type="button" name="-">-</button>
        </div>
        <div className="row border-bottom border-secondary">
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="1" onClick={() => { this.handleClick('1'); }}>1</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="2" onClick={() => { this.handleClick('2'); }}>2</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="3" onClick={() => { this.handleClick('3'); }}>3</button>
          <button className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5" type="button" name="+">+</button>
        </div>
        <div className="row">
          <button className="col-md-6 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="0" onClick={() => { this.handleClick('0'); }}>0</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="." onClick={() => { this.handleClick('.'); }}>.</button>
          <button className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5" type="button" name="=" onClick={() => { this.handleClick('='); }}>=</button>
        </div>
      </div>
    );
  }
}
