import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ListPost from './components/Page/Blog/ListPost'
import ViewPost from './components/Page/Blog/ViewPost/ViewPost'
import SearchPosts from './components/Page/SearchPosts/SearchPosts'
import SignIn from './components/Page/SignIn/SignIn'
import SignUp from './components/Page/SignUp/SignUp'
import Success from './components/Page/Success/Success'
import { useThemeContext } from './provider/ThemeProvider'
import { Post } from './interface/interfacePosts'

function App() {

  const [isSignIn, setIsSignIn] = useState (false);
  const {theme} = useThemeContext()

  const [postInfo, setPostInfo] = useState <Post | null>(null);

  const getPost = async () => {
    const response = await fetch('https://studapi.teachmeskills.by/blog/posts/615');
    const postData: Post = await response.json();


    setPostInfo(postData);
  };

  useEffect(() => {
    getPost();
  }, []);
  
  return (
    <>
      <div className={theme}>
        <div className="App">
          <Header />

          <SignUp />

          {!isSignIn ? <SignIn setIsSignIn = {setIsSignIn}/> : <Success />}

          {postInfo && <ViewPost title={postInfo?.title} text={postInfo.text} image={postInfo.image} />}

          {postInfo && <ListPost date={postInfo?.date} title = {postInfo?.title} text={postInfo.text} image={postInfo.image} />}

          {postInfo && <SearchPosts date={postInfo?.date} title={postInfo?.title} image={postInfo.image}/>}

          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
