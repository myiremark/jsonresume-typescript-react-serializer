import React from 'react';
import {Volunteer} from '../interfaces/resumejson';

function Volunteers(volunteers: Volunteer[]) {
 return (
    <div className="box">
    <h2>
      <i className="fa fa-group ico"></i> Volunteer
    </h2>
    {volunteers.map(volunteer=>(
    <div className="job clearfix">
      <div className="row">
        <div className="details">
          <div className="where">{volunteer.organization}</div>
          <div className="address">
            <a href={volunteer.url} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-globe ico"></i>{' '}
              {volunteer.url}
            </a>
          </div>
          <div className="year">{volunteer.startDate} – {volunteer.endDate}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-11 pull-right">
          <div className="profession">{volunteer.position}</div>
          <div className="description">
            <div className="highlights">Highlights</div>
            <ul className="list-group">
              {volunteer.highlights && volunteer.highlights.map(hl=>(
              <li className="list-group-item">{hl}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    ))}
  </div>
 )
}
export default Volunteers;