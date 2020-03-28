import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './firebase/firebase';

class List extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('board');
        this.unsubscribe = null;
        this.state = {
          boards: []
        };
      }
    
      onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
          const { Product, Amount } = doc.data();
          boards.push({
            key: doc.id,
            doc, // DocumentSnapshot
            Product,
            Amount
          });
        });
        this.setState({
          boards
       });
      }
    
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      }
    
      render() {
        return (
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  BOARD LIST
                </h3>
              </div>
              <div class="panel-body">
                <h4><Link to="/create" class="btn btn-primary">Add Board</Link></h4>
                <table class="table table-stripe">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.boards.map(board =>
                      <tr>
                        <td><Link to={`/show/${board.key}`}>{board.Product}</Link></td>
                        <td>{board.Amount}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }
}

export default List;
