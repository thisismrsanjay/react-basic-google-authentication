import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import  firebase from './firebase';
import db from './db';


class App extends Component {

  state={
    user:{},
    isLoggedIn:false
  }


  login = async()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await firebase.auth().signInWithPopup(provider);
    this.setState({
      user:{
        id:user.uid,
        name:user.displayName,
        image:user.photoURL,
        created_at:firebase.firestore.FieldValue.serverTimestamp(),
      },
      isLoggedIn:true
    })
    console.log("logged in by api call");
    db.collection('users').doc(user.uid).set(this.state.user);
    
  }
  logout = async()=>{
    await firebase.auth().signOut();
    this.setState({
      user:{
      },
      isLoggedIn:false
    })
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        this.setState({
          user:{
            id:user.uid,
            name:user.displayName,
            image:user.photoURL,
            created_at:firebase.firestore.FieldValue.serverTimestamp(),
          },
          isLoggedIn:true
        })
        console.log("logged in onLoad");
      } else {
        console.log('no user');
      }
    });
  }

  test(){
    console.log('test');
  }


  render() {
    return (
      <div className="App ">
        <Navbar state={this.state} login={this.login} logout={this.logout}/>
        <div className="container">
          <h1>HOME</h1>
          <button className="btn btn-danger" onClick={this.login}>Login With Google</button>
        </div>
        
        
      </div>
    );
  }
}

export default App;
