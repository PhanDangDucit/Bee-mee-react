import { Link } from "react-router-dom";

const Footer = () => {
  const loginState = true;
  return (
    <footer className="footer footer-center p-10 bg-orange-200 text-base-content rounded mt-10 max-md:px-0">
      <nav className="grid grid-flow-col max-sm:grid-flow-row gap-4">
        <Link to="/" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
            Home
        </Link>
        <Link to="/shop" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
            Shop
        </Link>
        <Link to="/about" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
            About us
        </Link>
        <Link to="/contact" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
            Contact
        </Link>
            {!loginState && (
                <>
                <Link
                    to="/login"
                    className="link link-hover text-2xl max-md:text-xl text-accent-content"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    Login
                </Link>
                <Link
                    to="/register"
                    className="link link-hover text-2xl max-md:text-xl text-accent-content"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    Register
                </Link>
                </>
            )}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
            <svg className="text-6xl max-sm:text-4xl text-accent-content" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
            <svg 
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                className="text-6xl max-sm:text-4xl text-accent-content lucide lucidce-facebook"
            >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
        </div>
      </nav>
      <aside>
        <p className="text-2xl max-sm:text-sm text-accent-content">
            Copyright © 2023 - All right reserved by Kuzma Clothing & Shoes
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
