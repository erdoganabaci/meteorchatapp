import React, { Component } from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import { Button, Form, Container, Divider } from 'semantic-ui-react';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Messages } from '../api/messages.js';




class App extends Component {
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    console.log(this.userId);
    Messages.insert({
      messageText : text,
      owner : this.userId,
      createdAt : new Date(), // current time
    });

    //console.log(Messages.find({}).fetch());

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderTasks() {
      return this.props.Users.map((user) => (
        <li> id: {user._id} text: {user.username} </li>

      ));
    }
    renderMessages() {
        return this.props.Messages.map((msg) => (
          <li> owner: {msg.owner} text: {msg.messageText} </li>

        ));
      }
  render() {
  
    //{JSON.stringify(this.props.Users)}
    return (
    <div>
    {this.renderTasks()}
    {this.renderMessages()}
    <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
           <input
             type="text"
             ref="textInput"
             placeholder="Type to add new tasks"
           />
         </form>

    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>


    <Container textAlign='left'><AccountsUIWrapper /></Container>
    <Container textAlign='center'>Center Aligned</Container>
    <Container textAlign='right'>Right Aligned</Container>
    <Container textAlign='justified'>
    <b>Justified</b>
    <Divider />
    <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
    Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
    consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
    pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
    Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
    ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
    nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
    augue. Curabitur ullamcorper ultricies nisi.
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
    Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
    consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
    pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
    Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
    ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
    nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
    augue. Curabitur ullamcorper ultricies nisi.
    </p>
    <Form>
    <Form.Group widths='equal'>
    <Form.Input fluid label='First name' placeholder='Read only' readOnly />
    <Form.Input fluid label='Last name' placeholder='Read only' readOnly />
    </Form.Group>
    </Form>

    </Container>

    </div>
);
  }


};

export default withTracker(() => {
  return {
    Users: Meteor.users.find().fetch(),
    Messages: Messages.find().fetch()
    };
})(App);
