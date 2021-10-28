import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import React from 'react';

const Quote = () => (
  <div className="jumbotron">
    <div className="container">
      <div className="title-cont pt-5 pl-5">
        <h1>
          Quote of the day
        </h1>
      </div>
    </div>
    <nav className="container vertical-center column pt-5">
      <div className="p-5 text-cont">
        <h4>
          Mathematics as an expression of the human mind
          reflects the active will, the contemplative reason,
          and the desire for aesthetic perfection.
          Its basic elements are logic and intuition,
          analysis and construction, generality and individuality.
          — Richard Courant, German-American mathematician
        </h4>
      </div>
    </nav>
  </div>
);

export default Quote;
