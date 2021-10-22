import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [data, setData] = useState(
    {
      total: 0,
      next: 0,
      operation: '',
    },
  );

  const handleClick = (e) => {
    const res = calculate(data, e);
    setData(res);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-end bg-secondary text-white pb-5 pt-5">
          {data}
        </div>
      </div>
      <div className="row border-bottom border-secondary">
        <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="AC" onClick={() => { handleClick('AC'); }}>AC</button>
        <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="+/-" onClick={() => { handleClick('+/-'); }}>+/-</button>
        <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="%" onClick={() => { handleClick('%'); }}>%</button>
        <button className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5" type="button" name="÷" onClick={() => { handleClick('÷'); }}>÷</button>
      </div>
      <div className="row border-bottom border-secondary">
        <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="7" onClick={() => { handleClick('7'); }}>7</button>
        <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="8" onClick={() => { handleClick('8'); }}>8</button>
        <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="9" onClick={() => { handleClick('9'); }}>9</button>
        <button className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5" type="button" name="x" onClick={() => { handleClick('x'); }}>x</button>
      </div>
      <div className="row border-bottom border-secondary">
        <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="4" onClick={() => { handleClick('4'); }}>4</button>
        <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="5" onClick={() => { handleClick('5'); }}>5</button>
        <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="6" onClick={() => { handleClick('6'); }}>6</button>
        <button className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5" type="button" name="-" onClick={() => { handleClick('-'); }}>-</button>
      </div>
      <div className="row border-bottom border-secondary">
        <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="1" onClick={() => { handleClick('1'); }}>1</button>
        <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="2" onClick={() => { handleClick('2'); }}>2</button>
        <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="3" onClick={() => { handleClick('3'); }}>3</button>
        <button className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5" type="button" name="+" onClick={() => { handleClick('+'); }}>+</button>
      </div>
      <div className="row">
        <button className="col-md-6 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="0" onClick={() => { handleClick('0'); }}>0</button>
        <button className="col-md-3 border-right border-secondary text-center bg-grey pb-5 pt-5" type="button" name="." onClick={() => { handleClick('.'); }}>.</button>
        <button className="col-md-3 border-right border-secondary text-center bg-orange pb-5 pt-5" type="button" name="=" onClick={() => { handleClick('='); }}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
