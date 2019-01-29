import React, { Component } from 'react'
import './NewSection.css';
import Title from '../../components/Title/Title';
import { connect } from 'react-redux';
import { updateInput, setInputToTrue, checkInputs, addSection } from '../../store/actions/sectionAction';

class NewSection extends Component {
    addSection = (event) => {
        event.preventDefault();
        if (this.isValid(this.props.newSection)) {
            this.props.addSection(this.props.newSection)
        } else {
            console.log('nije valid')
        }
    }

    onChangeHandler = (event, type) => {
        this.props.updateInput(event.target.value, type)
        this.props.setInputToTrue(type)
    }

    isValid(newSection) {
        let retVal = true;
        let validInputs = {
            name: true,
            desctiption: true
        }
        if (newSection['name'].trim().length < 5) {
            validInputs['name'] = false;
            retVal = false;
        }

        if (newSection['desctiption'].trim().length < 10) {
            validInputs['desctiption'] = false;
            retVal = false;
        }
        this.props.checkValidInputs(validInputs)
        return retVal;
    }

    render() {
        return (

            <div className='NewSection'>
                <Title title={'Nova oblast'} />
                <form>
                    <div className="form-group">
                        <input type='text' className='Input' placeholder='Naslov...'
                            onChange={(event) => this.onChangeHandler(event, 'name')} value={this.props.newSection.name} />
                        {!this.props.validInputs['name']
                            ? <p className='WarningWrongInput'>* Naslov mora imati bar 5 karaktera</p>
                            : null
                        }

                    </div>
                    <div>
                        <textarea className='InputTextarea' placeholder='Sadrzaj...'
                            onChange={(event) => this.onChangeHandler(event, 'desctiption')} value={this.props.newSection.desctiption}>
                        </textarea>
                        {!this.props.validInputs['desctiption']
                            ? <p className='WarningWrongInput'>* Sadrzaj mora imati bar 10 karaktera</p>
                            : null
                        }
                    </div>
                    <button className='btn btn-primary' onClick={this.addSection}>Potvrdi</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        newSection: state.section.newSection,
        validInputs: state.section.validInputs
    }
}

const mapDispatchToProps = dispatch => {
    // return bindActionCreators({
    //     addSection,
    //     updateInput,
    //     ...
    // }, dispatch);
    return {
        addSection: (newSection) => dispatch(addSection(newSection)),
        updateInput: (value, type) => dispatch(updateInput(value, type)),
        setInputToTrue: (type) => dispatch(setInputToTrue(type)),
        checkValidInputs: (validInputs) => dispatch(checkInputs(validInputs))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSection);