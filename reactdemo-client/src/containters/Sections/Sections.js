import React, { Component } from 'react';
import Section from './Section/Section'
import axios from 'axios'
import './Sections.css';
import Title from '../../components/Title/Title'

class Sections extends Component {
    state = {
        sections: []
    }

    componentDidMount() {
        axios.get('/section/getAllSections')
            .then(respnse => {
                this.setState({ sections: respnse.data })
            })
    }
    render() {
        let sections = [];
        this.state.sections.map(section => {
            sections.push(<Section key={section.id} section={section} />)
            return section
        })
        return (
            <React.Fragment>
                <div className="Sections">
                    <Title title='Oblasti' />
                    {sections}
                </div>
            </React.Fragment>
        )
    }
}

export default Sections;