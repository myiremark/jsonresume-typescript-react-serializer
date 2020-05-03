import React from 'react';
import {Work} from '../interfaces/resumejson';

function WorkExperiences(experiences: Work[]) {
 return (
    <div className="box">
    <h2>
      <i className="fa fa-suitcase ico"></i> Work Experience
    </h2>
    {experiences && experiences.map(work=>(
    <div className="job clearfix">
        <div className="row">
          <div className="details">
            <div className="where">{work.location}</div>
            <div className="address">
              <a href={work.url} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-globe ico"></i> {work.url}
              </a>
            </div>
            <div className="year">{work.startDate} – {work.endDate}</div>
          </div>
        </div>
        <div className="row">
          <div className="job-details col-xs-11">
            <div className="profession">{work.position}</div>
            <div className="description">
              {work.description}
              {work.highlights && work.highlights.length >0 ? (<div className="highlights">Highlights</div>):null}
              <ul className="list-group">
                {work.highlights && work.highlights.map(hl=>(
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

export default WorkExperiences;