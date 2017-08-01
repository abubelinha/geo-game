import React from 'react';
import {Link} from 'react-router-dom';

import Continents from '../../maps/continents/Continents';

export default (props) => (
  <div
    className="d-flex no-gutters
        flex-column align-items-stretch
        flex-sm-row flex-sm-wrap justify-content-sm-center align-items-sm-center
        pt-md-2 pb-md-2 align-content-md-start text-capitalize">
    {props.items.map(i => (
      <div className="col-12 col-lg-6" key={i}>
        <div className="bg-faded
          p-3 p-sm-4
          mb-2 mb-sm-3 m-lg-3">
          <h3 className="mb-4">{i}</h3>
          <div className="d-flex no-gutters">
            <div className="col-6 col-sm-4">
              <div className="mt-1 mb-2">
                <Link className="btn btn-outline-primary" to={{pathname: i + '/countryName'}}>Country name</Link>
              </div>
              <div className="mt-1 mb-2">
                <Link className="btn btn-outline-primary" to={{pathname: i + '/capital'}}>Capital</Link>
              </div>
              <div className="mt-1 mb-2">
                <Link className="btn btn-outline-primary" to={{pathname: i + '/flag'}}>Flag</Link>
              </div>
            </div>
            <div className="col-6 col-sm-8">
              <Continents active={i}/>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
