import React, { Component } from 'react';
import './Menu.css';
import MenuItem from './MenuItem/MenuItem';
import MenuHeader from './MenuHeader/MenuHeader';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllSections, changeShow } from '../../store/actions/sectionAction'
class Menu extends Component {

    componentDidMount() {
        this.props.getAllSections();
    }

    changeShow = () => {
        this.props.changeShow()
    }

    render() {
        return (
            <div className="Menu">
                <div className="header">
                    CSS je sranje
                </div>

                <div className='containter'>
                    <MenuHeader content={'Oblasti'} show={this.props.show} clicked={this.changeShow} />
                    {this.props.show ?
                        this.props.sections.map(s => {
                            return <MenuItem key={s.id}
                                linkTo={'/sections/' + s.id}
                                content={s.name} />
                        }
                        )
                        : null}
                </div>
                {localStorage.getItem('token') !== null && localStorage.getItem('role') === 'ADMIN'
                    ? <NavLink to='/new-section' activeStyle={{
                        fontWeight: "bold",
                        color: "rgb(173,173,173)",
                        fontSize: '35px'
                    }}><div className='AddNew'>Nova oblast {' '}
                            <p className='glyphicon glyphicon-plus'></p></div>
                    </NavLink>
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sections: state.section.sections,
        show: state.section.show
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllSections: () => { dispatch(getAllSections()) },
        changeShow: () => { dispatch(changeShow()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);