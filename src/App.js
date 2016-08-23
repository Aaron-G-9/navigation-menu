import React, { Component } from 'react';
import './App.css';
import MenuButton from './MenuButton';
import DropDownButton from './DropDownButton'

class TabNavigation extends Component {

  createMenuItems(){
    let menuButtonArray = [];

    menuButtonArray.push(<div>asdf</div>)
    return menuButtonArray;
  }

  render() {
    return (
      <div className="aaron-tab-navigation">
          <MenuButton title="Fall Semester 2015" buttonNumber="1"/>
          <MenuButton title="Winter Semester 2016" buttonNumber="2" />
          <DropDownButton />
      </div>
    );
  }
}






export default TabNavigation;
