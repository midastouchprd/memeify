// bring in React from React
import React from 'react';

//Real-time chat 
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

// import Dislikes from './components/Dislike';
// import Likes from './components/Likes';
import Dislikes from './components/Dislike';
import Likes from './components/Likes';
import Nav from './components/Nav';
import PostForm from './components/PostForm';

// define our Welcome functional component
// function Welcome() {
  // what should the component return
  // return (
    // Make sure to return some UI
//     <div>
//       <h1>Welcome to Memeify!</h1>
//       <LikeTwoTone />
//       <DislikeTwoTone />
//     </div>
    
//   );
// }
    <div>
      <Nav />
      <PostForm />
      <h1>Welcome to Memeify!</h1>
      <Likes />
      <Dislikes />
      <h1>Welcome to Meme-ification!</h1>
      <Likes />
      <Dislikes /> 
    </div>
  );
}

export default Welcome;
// npm i react-router-dom bcryptjs body-parser concurrently express is-empty jsonwebtoken mongoose passport passport-jwt validator cors multer
// export default Welcome;
// npm i react-router-dom bcryptjs body-parser concurrently express is-empty jsonwebtoken mongoose passport passport-jwt validator cors

const projectID = 'c8fbd595-a1d6-4bc0-b2b4-7f7d139a8e61';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};


export default App;
