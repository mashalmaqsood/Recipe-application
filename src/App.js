import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='category/:category' element={<Categories/>}/>
      <Route path='recipe/:id' element={<RecipeDetails/>}/>
    </Routes>
   </>
  );
}

export default App;
