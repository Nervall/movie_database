import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Movies from './components/movies';
import MovieDetails from './components/movieDetails';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path={"movies/:search"} element={<Movies />} />
        <Route path={"movie/:id"} element={<MovieDetails />} />
      </Routes>
    </Router>

  </>
  )
}

export default App
