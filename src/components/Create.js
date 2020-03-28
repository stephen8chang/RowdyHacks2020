import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'src\firebase\firebase.js';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('board');
    this.state = {
      Product: '',
      Amount: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { Product, Amount } = this.state;

    this.ref.add({
      Product,
      Amount
    }).then((docRef) => {
      this.setState({
        Product: '',
        Amount: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { Product, Amount } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD BOARD
            </h3>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="Product">Product:</label>
                <input type="text" class="form-control" name="Product" value={Product} onChange={this.onChange} placeholder="Product" />
              </div>
              <div class="form-group">
                <label for="Amount">Amount:</label>
                <input type="text" class="form-control" name="Amount" value={Amount} onChange={this.onChange} placeholder="Amount" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;