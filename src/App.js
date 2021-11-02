
import {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import UserInfo from './components/UserInfo';
import Contacts from './components/Contacts';
import Posts from './components/Posts';

class App extends Component{
  constructor () {
    super()
  }

  render() {
  return (
    <div className="app">
    <NavBar />
    <UserInfo />
    <Contacts />
    <Posts />
    </div>
  );
  }
}

export default App;
