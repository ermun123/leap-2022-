import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SingleCategory from './components/SingleCategory';
import Article from './pages/Article';
import ChatScreen from './pages/ChatScreen';
import Home from './pages/Home';
import Products from './pages/Products';
import ListedProduct from './pages/ListedProduct';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/category/:id" element={<SingleCategory />} />
        <Route path='/products' element={<Products />} />
        <Route path='/ListedProduct' element={<ListedProduct />} />
      </Routes>
      {/* <ChatScreen /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
