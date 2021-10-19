import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-end bg-secondary text-white pb-5 pt-5">0</div>
        </div>
        <div className="row border-bottom border-secondary">
          <div className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5">AC</div>
          <div className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5">+/-</div>
          <div className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5">%</div>
          <div className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5">÷</div>
        </div>
        <div className="row border-bottom border-secondary">
          <div className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5">7</div>
          <div className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5">8</div>
          <div className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5">9</div>
          <div className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5">x</div>
        </div>
        <div className="row border-bottom border-secondary">
          <div className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5">4</div>
          <div className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5">5</div>
          <div className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5">6</div>
          <div className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5">-</div>
        </div>
        <div className="row border-bottom border-secondary">
          <div className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5">1</div>
          <div className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5">2</div>
          <div className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5">3</div>
          <div className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5">+</div>
        </div>
        <div className="row">
          <div className="col-md-6 border-right border-secondary text-center bg-grey pb-5 pt-5">0</div>
          <div className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5">.</div>
          <div className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5">=</div>
        </div>
      </div>
    );
  }
}
