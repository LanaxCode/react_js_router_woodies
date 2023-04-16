import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <section>
            <Navbar />
            <h1>Products</h1>
            <article>
                <div>
                    <h2>Jenson</h2>
                    <button className="shopNow"><Link to="/products/JensonProduct">Shop Now</Link></button>
                </div>
                <div>
                    <h2>Deon</h2>
                    <button className="shopNow"><Link to="/products/DeonProduct">Shop Now</Link></button>
                </div>

                <button className="shopNow"><Link to="/products/KrishaProduct">Shop Now</Link></button>
            </article>
        </section>
    );
}

export default Products;