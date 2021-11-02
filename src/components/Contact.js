import {Component} from 'react';
import logo from "../media/profile.png"
class Contact extends Component{

    render() {
    return (
      <div className="contact">
         <img src={logo} alt = "logo" />
      <div className = 'contactDescription'>
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

export default Contact;