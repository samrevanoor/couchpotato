import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import image from './couchimage.png'
import './SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignupPage'>
        <div className="SignupPage-text">
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
        </div>
        <img src={image} alt="couch" width="400px"/>
      </div>
    );
  }
}

export default SignupPage;