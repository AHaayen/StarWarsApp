import React from 'react';


export default function Pagination(props) {
    return (
        <div>
            <button className="btn btn-primary" onClick={props.previousPage}>
                Previous page
        </button>
            <button  className="btn btn-primary" onClick={props.nextPage}>
                Next page
        </button>
        </div>
    )
}