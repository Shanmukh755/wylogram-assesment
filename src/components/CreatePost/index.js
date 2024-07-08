import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header';
import EndCard from '../EndCard';
import './index.css';

class CreatePost extends Component {
  state = {
    username: '',
    profilePic: '',
    postPic: '',
    description: '',
    postList: [],
    postUploaded: false
  };

  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };

  onChangeProfile = event => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.setState({ profilePic: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  onChangepost = event => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.setState({ postPic: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  onChangeCaption = event => {
    this.setState({ description: event.target.value });
  };

  onSubmitForm = event => {
    event.preventDefault();
    const { username, profilePic, postPic, description } = this.state;
    const updated = {
      id: uuidv4(),
      username,
      profilePic,
      postPic,
      description
    };
    this.props.addPost(updated)
    this.setState(prevState => ({
      postList: [...prevState.postList, updated],
      username: '',
      profilePic: '',
      postPic: '',
      description: '',
      postUploaded: !prevState.postUploaded
    }));
  };

  render() {
    const { username, description, postList, postUploaded, } = this.state;
    console.log(postList)
    return (
      <div className='create-post-container'>
        <Header />
        <div className='create-body'>
          <h1 className='create-head'>Upload your photos or videos in Wylogram</h1>
          <form onSubmit={this.onSubmitForm} className='create-form-container'>
            <h3 className='app-mini-logo'>Wylogram</h3>
            <input
              type='text'
              placeholder='Username'
              className='box'
              value={username}
              onChange={this.onChangeUsername}
            />
            <input
              type='file'
              accept='image/*'
              className='box1'
              onChange={this.onChangeProfile}
            />
            <input
              type='file'
              accept='image/*, video/*'
              className='box1'
              onChange={this.onChangepost}
            />
            <textarea
              cols={3}
              placeholder='Write a caption...'
              value={description}
              onChange={this.onChangeCaption}
            />
            <button type='submit' className='upload-btn'>
              Upload
            </button>
          </form>
          {postUploaded ? <p className='text-success'>Post Created and Uploaded</p> : <p></p>}
        </div>
        <EndCard />
      </div>
    );
  }
}

export default CreatePost;
