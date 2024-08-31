import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import AddPostPage from './pages/AddPostPage';
import EditPostPage from './pages/EditPostPage';
import LoginPage from './pages/LoginPage';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="add-post" element={<AddPostPage />} />
          <Route path=":id/edit" element={<EditPostPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path=":id" element={<PostsPage />} />
          <Route path="posts" element={<PostPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
