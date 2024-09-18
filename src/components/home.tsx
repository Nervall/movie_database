import { Link } from 'react-router-dom';
import { Movie1, Movie2, Movie3, Movie4 } from '../assets/index';
import './home.css';

const Home = () => {
  // This is hardcoded in this test, data should be fetched from api
  const movieArr = [
    {
      img: Movie1,
      imdbID: 'tt3411444',
    },
    {
      img: Movie2,
      imdbID: 'tt0120338',
    },
    {
      img: Movie3,
      imdbID: 'tt3766354',
    },
    {
      img: Movie4,
      imdbID: 'tt2446042',
    },
  ];

  return (
    <>
      <p className="home-header">POPULAR MOVIES</p>
      <div className="home-img-wrapper">
        {movieArr.map(({ img, imdbID }) => {
          return (
            <Link to={'/movie/' + imdbID} key={imdbID} className="home-link">
              <img
                className="home-img"
                src={img}
                alt="images from Netflix in educational purpose"
                width="299px"
                height="168px"
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
