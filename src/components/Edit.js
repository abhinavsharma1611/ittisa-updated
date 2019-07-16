import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      description: '',
      author: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          title: board.title,
          description: board.description,
          author: board.author
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author } = this.state;

    const updateRef = firebase.firestore().collection('boards').doc(this.state.key);
    updateRef.set({
      title,
      description,
      author
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        description: '',
        author: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="panel-default">
          <div className="panel-heading">
            
          </div>
          <div className="panel-form">
          <h3>Please Edit the Details </h3>
            
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="title">Name</label>
                <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Name" />
                
              </div>
              <div className="form-group">
                <label for="description">Contact no.</label>
                <input type="text" className="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="Contact No." />
              </div>
              
              <button type="submit" className="btn btn-success">Submit</button>
              
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;