import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container, Divider, Image } from 'semantic-ui-react';
import ContactListPage from '../ContactList/Page';
import OfferJobPage from '../OfferJob/Page';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Image src="images/logo.svg" size="small" className="menu__logo--padding"/>
        <div className="ui two secondary pointing menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Legal Contacts List
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/offer/job">
            Legal Job Offer
          </NavLink>
        </div>
        <Route exact path="/" component={ContactListPage}/>
        <Route path="/offer/job" component={OfferJobPage}/>
        <Route path="/offer/job/:_id" component={OfferJobPage}/>
      </Container>
    );
  }
}

export default App;
