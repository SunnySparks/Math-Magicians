import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-end bg-secondary text-white pb-5 pt-5">0</div>
        </div>
        <div className="row border-bottom border-secondary">
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="AC" onClick={() => calculate(this, 'AC')}>AC</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="+/-">+/-</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="%">%</button>
          <button className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5" type="button" name="÷">÷</button>
        </div>
        <div className="row border-bottom border-secondary">
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="7" onClick={() => calculate(this, '7')}>7</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="8" onClick={() => calculate(this, '8')}>8</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="9" onClick={() => calculate(this, '9')}>9</button>
          <button className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5" type="button" name="">x</button>
        </div>
        <div className="row border-bottom border-secondary">
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="4" onClick={() => calculate(this, '4')}>4</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="5" onClick={() => calculate(this, '5')}>5</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="6" onClick={() => calculate(this, '6')}>6</button>
          <button className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5" type="button" name="-">-</button>
        </div>
        <div className="row border-bottom border-secondary">
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="1" onClick={() => calculate(this, '1')}>1</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="2" onClick={() => calculate(this, '2')}>2</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="3" onClick={() => calculate(this, '3')}>3</button>
          <button className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5" type="button" name="+">+</button>
        </div>
        <div className="row">
          <button className="col-md-6 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="0" onClick={() => calculate(this, '0')}>0</button>
          <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name=".">.</button>
          <button className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5" type="button" name="=">=</button>
        </div>
      </div>
    );
  }
}
