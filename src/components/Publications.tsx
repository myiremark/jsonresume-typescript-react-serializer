import React from 'react';
import {Publication} from '../interfaces/resumejson';

function Publications(publications: Publication[]) {
 return (
  <div className="box">
    <h2>
      <i className="fa fa-book ico"></i> Publications
    </h2>
    {publications && publications.map(publication =>(
    <div className="publication panel panel-default">
      <div className="panel-heading">
        <div className="name panel-title">
          {publication.name}
        </div>
      </div>
      <div className="panel-body">
        <div className="publisher">
          <i className="fa fa-bookmark ico"></i> {publication.publisher}
        </div>
        <div className="year">{publication.releaseDate}</div>
        <div className="address">
          <a href={publication.url} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-globe ico"></i>{' '}
            {publication.url}
          </a>
        </div>
        <p>
          {publication.summary}
        </p>
      </div>
    </div>
    ))}
    </div>
  )
};

export default Publications