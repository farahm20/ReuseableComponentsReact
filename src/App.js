import './App.css';
import React, { Component } from 'react';
import InputField from './components/InputField';
import { Validators } from './utilities/Validator';
import Button from './components/Button'


export default class App extends Component {
  state = {
    text: '',
    number: '',
    email: ''
  }

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  }

  handleClick = (event) => {
    event.preventDefault();
    alert('button clicked.')
  }

  render() {
    const { text, number, email } = this.state;
    return (
      <div className="container" >
        <h2>Reuseable container</h2>
        <h4>Input field</h4>
        <InputField
          value={text}
          placeholder='Text field'
          type="text"
          label="Username"
          validators={[
            {
              check: Validators.required,
              message: 'This field is required'
            }
          ]}
          onChange={this.handleChange('text')} />

        <InputField
          value={number}
          placeholder='Number field'
          type="number"
          label="Number"
          validators={[
            {
              check: Validators.number,
              message: 'This number is not valid'
            }
          ]}
          onChange={this.handleChange('number')} />

        <InputField
          value={email}
          placeholder='Email field'
          type="email"
          label="Email"
          validators={[
            {
              check: Validators.required,
              message: 'Email is not valid'
            }
          ]}
          onChange={this.handleChange('email')} />

        <Button
          onClick={this.handleClick}
          value='Click me!'
        />


      </div>
    );
  }
}

