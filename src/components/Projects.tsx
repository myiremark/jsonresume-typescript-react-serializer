import React from 'react';
import { Project} from '../interfaces/resumejson';

function Projects(projects: Project[]) {
 return (
    <div className="box">
    <h2>
      <i className="fa fa-cogs ico"></i> Projects
    </h2>
    {projects && projects.map(project=>(
    <div className="job clearfix">
        <div className="row">
          <div className="details">
            <div className="where">{project.name}</div>
            <div className="address">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-globe ico"></i> {project.entity}
              </a>
            </div>
            <div className="year">{project.startDate}{project.endDate && project.endDate.length >0 ? (" – " + project.endDate):null}</div>
          </div>
        </div>
        <div className="row">
          <div className="job-details col-xs-11">
            <div className="profession">{project.roles.join(", ")}</div>
            <div className="description">
              {project.description}
              {project.highlights && project.highlights.length >0 ? (<div className="highlights">Highlights</div>):null}
              <ul className="list-group">
                {project.highlights && project.highlights.map(hl=>(
                <li className="list-group-item">{hl}</li>
                ))}
              </ul>
            </div>
            {project.keywords && project.keywords.map(keyword=>(
            <span className="skill badge">{keyword}</span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
 )
}

export default Projects;