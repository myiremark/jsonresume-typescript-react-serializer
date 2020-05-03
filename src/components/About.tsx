import React from 'react';
import {Resume} from '../interfaces/resumejson';

function About(resume: Resume) {
 return (
    <div className="box">
    <h2>
      <i className="fa fa-user ico"></i> About
    </h2>
    <p>
      {resume && resume.basics && resume.basics.summary}
    </p>
  </div>
 )
};

export default About;