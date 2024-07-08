import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import PostDisplay from './components/PostDisplay';
import CreatePost from './components/CreatePost';
import Update from './components/Update';
import './App.css';

const postsData = [
  {
    id: uuidv4(),
    username: "Shanmukh Surya",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    postPic: "https://picsum.photos/600/400?random=1",
    description: "We provide web development services. If interested, contact me."
  },
  {
    id: uuidv4(),
    username: "Emma Watson",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    postPic: "https://picsum.photos/600/400?random=2",
    description: "Enjoying a sunny day at the beach!"
  },
  {
    id: uuidv4(),
    username: "John Doe",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    postPic: "https://picsum.photos/600/400?random=3",
    description: "Exploring beautiful landscapes in the mountains."
  },
  {
    id: uuidv4(),
    username: "Sarah Parker",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    postPic: "https://picsum.photos/600/400?random=4",
    description: "Capturing the city lights at night."
  },
  {
    id: uuidv4(),
    username: "Michael Johnson",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    postPic: "https://picsum.photos/600/400?random=5",
    description: "A peaceful morning at the lake."
  },
  {
    id: uuidv4(),
    username: "Sophia Adams",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    postPic: "https://picsum.photos/600/400?random=6",
    description: "Cooking delicious food in the kitchen."
  },
  {
    id: uuidv4(),
    username: "David Brown",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    postPic: "https://picsum.photos/600/400?random=7",
    description: "Gardening in the backyard."
  },
  {
    id: uuidv4(),
    username: "Emily White",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    postPic: "https://picsum.photos/600/400?random=8",
    description: "Admiring beautiful architecture."
  },
  {
    id: uuidv4(),
    username: "Daniel Green",
    profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
    postPic: "https://picsum.photos/600/400?random=9",
    description: "Exploring the vibrant streets of Tokyo."
  },
  {
    id: uuidv4(),
    username: "Olivia Taylor",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
    postPic: "https://picsum.photos/600/400?random=10",
    description: "Enjoying a peaceful sunset by the sea."
  }
];


class App extends Component {
  state = {
    data: postsData
  };

  addPost = updated => {
    this.setState(prevState => ({
      data: [updated, ...prevState.data]
    }));
  };

  render() {
    const { data } = this.state;
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PostDisplay data={data} />} />
          <Route path='/create-post' element={<CreatePost addPost={this.addPost} />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
