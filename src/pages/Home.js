import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import HomeImg from '../img/Home.png'
import styled from "styled-components";


const HomeBackground = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 61%,
    rgba(249, 189, 189, 1) 61%
  );
  height: 100vh;
`;

const Home = () => {
    return (
        <HomeBackground>
            <section>
                <Navbar />
                <article className="home-container">
                    <div className="headline-container">
                        <h2 className="sub-head">Are you looking for <span>woodden furniture</span>  for your place?</h2>
                        <h1>This is the Right Place</h1>
                        <Link to="/products">Explore Categories</Link>
                    </div>
                    <img src={HomeImg} className="home-img"></img>
                </article>
            </section>
        </HomeBackground>
    );
}

export default Home;