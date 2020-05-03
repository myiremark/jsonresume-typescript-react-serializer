import React from 'react';
import {Skill} from '../interfaces/resumejson';

function Skills(skills: Skill[]) {
 return (
  <div className="box">
  <h2>
    <i className="fa fa-tasks ico"></i> Skills
  </h2>
  {skills.map(skill=>(
  <div className="skills clearfix">
    <div className="item-skills">
      {skill.name}
      <span className="skill-level">{skill.level}</span>
    </div>
    <div className="col-sm-offset-1 col-sm-12 clearfix">
      {skill.keywords && skill.keywords.map(keyword=>(
      <span className="skill badge">{keyword}</span>
      ))}
    </div>
  </div>
  ))}
</div>
 )
}
export default Skills;