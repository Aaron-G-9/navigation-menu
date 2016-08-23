import React, { Component } from 'react';
import './App.css';
import MenuButton from './MenuButton';
import DropDownButton from './DropDownButton'

class TabNavigation extends Component {
  componentWillMount(){
      this.state = ({
          showDropdown: false,
      })
  }

  changeDropdown() {
    this.setState({showDropdown: !this.state.showDropdown})
  }

  render() {
    return (
      <div className="aaron-tab-navigation">
          <MenuButton title="Fall Semester 2015" buttonNumber="1"/>
          <MenuButton title="Winter Semester 2016" buttonNumber="2" />
          <DropDownButton showDropdown={this.state.showDropdown} changeDropdown={this.changeDropdown.bind(this)} />
      </div>
    );
  }
}






export default TabNavigation;
