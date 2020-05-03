import React from 'react';
import {Interest} from '../interfaces/resumejson';

function Interests(interests: Interest[]) {
 return (
  <div className="box">
    <h2>
      <i className="fa fa-heart ico"></i> Interests
    </h2>
    {interests.map(interest=>(
    <div className="interests clearfix">
      <div className="item-interests">{interest.name}</div>
      <div className="col-sm-offset-1 col-sm-12 clearfix">
      {interest.keywords && interest.keywords.map(keyword=>(
        <span className="interest badge">{keyword}</span>
      ))}
      </div>
    </div>
    ))}
  </div>
 )
};

export default Interests;