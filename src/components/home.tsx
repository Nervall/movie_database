import {
    Movie1,
    Movie2,
    Movie3,
    Movie4,
} from '../assets/index';
import './home.css';

const Home = () => {
    const imgArr = [ Movie1, Movie2, Movie3, Movie4 ];

    return (
        <>
            <p className='home-header'>POPULAR MOVIES</p>
            <div className='home-img-wrapper'>
                {imgArr.map((img) => {
                    return (
                        <img className='home-img' src={img} alt="images from Netflix in educational purpose" />
                    )
                })}
            </div>
        </>
    )
};

export default Home;
