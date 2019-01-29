import React from 'react';
import './Section.css';
import { withRouter } from 'react-router-dom';


const section = (props) => {
    return (
        <div className="Section" onClick={() => {
            props.history.push('/sections/' + props.section.id)
        }}>
            <p className="SectionTitle">{props.section.name}</p>
            <p className="SectionBody">{props.section.description}</p>
        </div>
    )
}

export default withRouter(section);
