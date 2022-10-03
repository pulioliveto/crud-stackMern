import './App.css';
import Home from './pages/Home'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import NotFound from './pages/NotFound'
import NewPost from './pages/NewPost'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import PostProvider from './context/PostContext'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Header/>
      
      <PostProvider >
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/posts/:id" element={<NewPost />} />

        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <Toaster />
      </PostProvider>
      {/* <Footer /> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
