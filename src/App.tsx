import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Movies from './components/movies';
import MovieDetails from './components/movieDetails';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <>
    <Router basename='/'>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"movies/:search"} element={<Movies />} />
        <Route path={"movie/:id"} element={<MovieDetails />} />
      </Routes>
    </Router>

  </>
  )
}

export default App
