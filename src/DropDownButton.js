/**
 * Created by aaron on 23/08/16.
 */
import React, { Component } from 'react';
import './DropDownButton.css';

class DropDownButton extends Component {

    constructor(){
        super();
        this.state=({
            displayDropdownMenu: false,
        })
    }

    setDisplayTrue(){
        this.setState({
            displayDropdownMenu: !this.state.displayDropdownMenu,
        });
    }

    render(){
        if (this.state.displayDropdownMenu === true){
            return(

                <button className="app-menu-dropdown" onClick={this.setDisplayTrue.bind(this)}>
                    BOOM
                </button>


            );
        }else{
            return(
                <button className="app-menu-dropdown" onClick={this.setDisplayTrue.bind(this)}>
                    More Terms
                </button>
            );
        }

    }
}

class DropDownMenu extends Component{


    render(){
        return(
            <div className="app-menu-menu">
                asdf
            </div>
        );
    }
}



export default DropDownButton;

