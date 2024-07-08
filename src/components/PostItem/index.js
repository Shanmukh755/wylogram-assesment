import React, { Component } from "react";
import { FaRegComment } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import './index.css';

class PostItem extends Component {
  state = {
    like: 0,
    isLiked: false,
    isClickEdit: false,
    name: '',
    caption: '',
    profile: '',
    post: '',
    data: []
  };

  onClickLikeBtn = () => {
    this.setState(prevState => ({
      like: prevState.like+1,
      isLiked: !prevState.isLiked
    }));
  };

  onChangeUsername = event => {
    this.setState({ name: event.target.value });
  };

  onChangeCaption = event => {
    this.setState({ caption: event.target.value });
  };

  onChangeProfile = event => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.setState({ profile: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  onChangePost = event => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.setState({ post: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  submitForm = event => {
    event.preventDefault();
    const { name, caption, profile, post } = this.state;
    const updated = { name, caption, profile, post };

    this.setState(prevState => ({
      data: [...prevState.data, updated],
      name: '',
      caption: '',
      profile: '',
      post: '',
      isClickEdit: true
    }));

    // Close modal programmatically
    window.bootstrap.Modal.getInstance(document.getElementById('staticBackdrop')).hide();
  };

  render() {
    const { eachPost } = this.props;
    const { username, profilePic, postPic, description } = eachPost;
    const { like, isLiked, isClickEdit, name, data, caption } = this.state;
    
    const updatedUser = isClickEdit && data[0].name !=="" ? data[0].name : username;
    const updatedCaption = isClickEdit && data[0].caption !== "" ? data[0].caption : description;
    const updatedProfile = isClickEdit && data[0].profile !== "" ? data[0].profile : profilePic;
    const updatedPost = isClickEdit && data[0].post !== "" ? data[0].post : postPic;

    return (
      <li className='post-item-container'>
        <div className='post-user-c'>
          <div className="post-user-info">
            <img src={updatedProfile} className='profile-pic' alt='profile' />
            <p className='profile-name'>{updatedUser}</p>
          </div>

          <button onClick={this.onClickEdit} type="button" className="x" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <BsThreeDotsVertical className="icon" style={{ marginRight: '1rem', cursor: 'pointer' }} />
          </button>

          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <form onSubmit={this.submitForm} className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Post</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body w-100">
                  <input className="model-item" type="text" placeholder="Username" onChange={this.onChangeUsername} value={name} />
                  <br />
                  <input className="model-item" type="file" accept="image/*" onChange={this.onChangeProfile} />
                  <br />
                  <input className="model-item" type="file" accept="image/*, video/*" onChange={this.onChangePost} />
                  <br />
                  <textarea className="model-item" cols={3} placeholder="Edit Caption" onChange={this.onChangeCaption} value={caption} />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <img src={updatedPost} className='post-pic' alt='post' />
        <div className='likes-cont'>
          <button type="button" className="like-btn" onClick={this.onClickLikeBtn}>
            {isLiked ? <FcLike className="icon-red" /> : <FaRegHeart className="icon" />}
          </button>
          <FaRegComment className="icon" />
          <TbShare3 className="icon" />
        </div>
        <div className="comment-cont">
          <p className="comment">{like} likes</p>
          <p className="comment">{updatedCaption}</p>
        </div>
      </li>
    );
  }
}

export default PostItem;
