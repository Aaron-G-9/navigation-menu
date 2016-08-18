import React, { Component } from 'react';
import './App.css';

class App extends Component {

  createMenuItems(){
    let menuButtonArray = [];

    menuButtonArray.push(<div>asdf</div>)
    return menuButtonArray;
  }

  render() {
    return (
      <div className="aaron-menu-bar">
          <MenuButton />
          <MenuButton />
          <DropdownButton />
      </div>
    );
  }
}

class MenuButton extends Component {

    render(){
        return(
            <button className="app-menu-button">Fall Semester 2015</button>
        )
    }
}

class DropdownButton extends Component {

    constructor(){
        super();
        this.displayDropdownMenu = false;
    }

    setDisplayTrue(){
        this.displayDropdownMenu = true;
    }

    render(){
        return(
            <button className="app-menu-dropdown" onClick={this.setDisplayTrue.bind(this)}>
                More Terms
                <a title="aa;sldkfj" alt="a;sldkfj">hello</a>

            </button>
        );
    }
}

class DropDownMenu extends Component{


    render(){
        return(
          <div>

          </div>
        );
    }
}


export default App;
