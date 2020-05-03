import React from 'react';
import {Education} from '../interfaces/resumejson';

function Educations(educations: Education[]) {
 return (
    <div className="box">
    <h2>
      <i className="fa fa-university ico"></i> Education
    </h2>
    <ul id="education" className="clearfix">
      {educations.map(education=>(
      <li>
      <div className="year pull-left">{education.startDate} - {education.endDate}</div>
      <div className="description pull-right">
        <h3>{education.institution}</h3>
        {education.studyType && education.studyType.length >0 ? (<p><i className="fa fa-graduation-cap ico"></i> {education.studyType}</p>): null}
        {education.area && education.area.length > 0 ? (<p>{education.area}</p>): null}
        {education.gpa && education.gpa.length > 0 ? (<p>GPA: {education.gpa}</p>): null}
        {education.courses && education.courses.length >0 ? (<div>Courses</div>): null}
        <ul className="list-group">
          {education.courses && education.courses.map(course=>(
          <li className="list-group-item">{course}</li>
          ))}
        </ul>
      </div>
    </li>        
      ))}
    </ul>
  </div>
 )
};

export default Educations