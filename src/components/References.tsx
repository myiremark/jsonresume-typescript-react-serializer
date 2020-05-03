import React from 'react';
import {Reference} from '../interfaces/resumejson';

function References(references: Reference[]) {
 return (
<div className="box">
    <h2>
        <i className="fa fa-check-square ico"></i> References
    </h2>
    {references && references.map(reference => (
    <>
    <blockquote>
        <div>
        {reference.reference}
        </div>
        <footer>
        <a href="/">{reference.name}</a>
        </footer>
    </blockquote>
    <br />
    </>
    )   
    )}
</div>
 )
};

export default References;