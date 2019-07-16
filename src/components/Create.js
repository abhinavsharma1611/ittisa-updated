import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      title: '',
      description: '',
      author:''
    
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author } = this.state;

    this.ref.add({
      title,
      description,
      author
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        author:''
    
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { title,description} = this.state;
    return (
      <div className="dayNight">
        <div className="panel-default">
          <div className="panel-heading">
            <h3 align="center" class="panel-title">
            Drop Your Contact. Our Team will get in touch with you.
            </h3>
          </div>
          <div className="panel-body">
           
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="title">Name</label>
                <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="" />
              </div>
              <div className="form-group">
                <label for="description">Contact No.</label>
                <input type="text" className="form-control" name="description"value={description} onChange={this.onChange} placeholder=""  />
              </div>
              
              <button color="yellow" align="center" type="submit" className="btn btn-success" >Submit</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Create;