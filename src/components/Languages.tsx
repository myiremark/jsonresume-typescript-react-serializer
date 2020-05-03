import React from 'react';
import {Language} from '../interfaces/resumejson';

function Languages(languages: Language[]) {
 return (
    <div className="box">
    <h2>
      <i className="fa fa-language ico"></i> Languages
    </h2>
    <ul className="list-group">
      {languages.map(language=>(
      <li className=" list-group-item">
      {language.language}
      <span className="skill badge pull-right">{language.fluency}</span>
    </li>        
      ))}
    </ul>
  </div>
 )
};

export default Languages;