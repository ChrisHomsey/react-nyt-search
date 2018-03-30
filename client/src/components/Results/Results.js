import React from "react";

export const Results = props =>
<div className="panel panel-primary">

    <div className="panel-heading">
    <h3 className="panel-title"><strong><i className="fa fa-table"></i>   {props.title}</strong></h3>
    </div>

    <div className="panel-body" id="well-section">
        {props.children}
    </div>
</div>;