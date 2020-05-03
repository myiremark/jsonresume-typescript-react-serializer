import React from 'react';
import { Resume} from '../interfaces/resumejson';

function Header(resume: Resume) {
 return (
    <div className="row">
    <div className="col-xs-12">
      <div id="photo-header" className="text-center">
        <div id="photo">
          <img
            src="//www.gravatar.com/avatar/7e6be1e623fb85adde3462fa8587caf2?s=200&amp;r=pg&amp;d=mm"
            alt="avatar"
          />
        </div>
          <div id="text-header">
          <h1>
            {resume &&  resume.basics && resume.basics.name}
            <br />
            <span>{resume &&  
            resume.basics && resume.basics.label}</span>
          </h1>
        </div>
      </div>
    </div>
</div>
 )
}

export default Header;