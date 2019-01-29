import React from 'react';
import './MenuHeader.css'

const menuHeader = (props) => {

    return (
        <div className='MenuHeader' onClick={props.clicked}>
            {props.content} {' '}
            {!props.show
                ? <p className='glyphicon glyphicon-triangle-left'></p>
                : <p className='glyphicon glyphicon-triangle-bottom'></p>
            }
        </div>
    )
}

export default menuHeader;