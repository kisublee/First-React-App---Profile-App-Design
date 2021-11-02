import Post from "./Post"
import {Component} from 'react';
class Posts extends Component{

    render() {
    return (
      <div className="posts">
          <b>Posts</b>
          <Post />
          <Post />
          <Post />
      </div>
    );
    }
  }

export default Posts;