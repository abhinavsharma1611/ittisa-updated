import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';
import Create from './components/Create'
import Ittpic from "./ittisa.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
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
      <div className="container">
        <div className="panel panel-default"></div>
          <div className="panel-heading">
          <img src={Ittpic} alt="A LOGO"></img>
            <h3 >
            Lets Create A Digital Strategy
              </h3>
              <Create/>
          </div>
          
          <div className="panel-body">
          
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact No.</th>
                  
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr>
                    <td><Link to={`/show/${board.key}`}>{board.title}</Link></td>
                    <td>{board.description}</td>
                    <td>{board.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        
      </div>
    );
  }
}

export default App;