import React from 'react';
import {Award} from '../interfaces/resumejson';

function Awards(awards: Award[]) {
 return (
    <div className="box">
      <h2>
        <i className="fa fa-certificate ico"></i> Awards
      </h2>
      <ul id="awards" className="clearfix">
        {awards && awards.map(award =>(
        <li>
          <div className="year pull-left">{award.date}</div>
          <div className="description pull-right">
            <h3>{award.awarder}</h3>
            <p>
              <i className="fa fa-trophy ico"></i> {award.title}
            </p>
            <p>{award.summary}</p>
          </div>
        </li>
        ))}
      </ul>
  </div>
 )
};

export default Awards