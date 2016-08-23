/**
 * Created by aaron on 8/22/16.
 */
import React, { Component } from 'react';
import './MenuButton.css';

class MenuButton extends Component {

    render(){
        return(
            <button className="app-menu-button">{this.props.title}</button>
        )
    }
}

export default MenuButton
