import {Component} from 'react';
import logo from "../media/profile.png"
class UserInfo extends Component{

    render() {
    return (
      <div className="userinfo">
      <img src={logo} alt = "logo" />
      <div className = 'userDescription'>
        <h3>
        Ki Sub Leeeeee
        </h3>
        <h4>
        React Creator
        </h4>
        <p>
        Lalalalalalala
        </p>
      </div>
      </div>
    );
    }
  }

export default UserInfo;