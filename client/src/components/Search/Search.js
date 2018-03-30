import React from "react";

const Search = props =>

<div>
    <br />
                    
    <div className="panel panel-primary">
        <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
        </div>
        <div className="panel-body">
            {props.children}
        </div>
    </div>
</div>
;

export default Search;