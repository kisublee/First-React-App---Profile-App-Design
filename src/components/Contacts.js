import Contact from "./Contact";
import {Component} from 'react';
class Contacts extends Component{

    render() {
    return (
      <div className="contacts">
          <b>Contacts</b>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      </div>
    );
    }
  }

export default Contacts;