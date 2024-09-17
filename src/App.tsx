import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Movies from './components/movies';
import './App.css';

function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path={"movies/:search"} element={<Movies />} />
      </Routes>
    </Router>

  </>
  )
}

export default App
