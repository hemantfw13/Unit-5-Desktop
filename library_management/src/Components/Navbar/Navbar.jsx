import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-dark bg-dark text-center p-4">
        <button className="home btn btn-outline-secondary">
          <Link className="text-decoration-none" to="/">
            Home
          </Link>
        </button>
        <button className="mystery btn btn-outline-secondary">
          <Link className="text-decoration-none" to="/section/:mystery">
            Mystery
          </Link>
        </button>
        <button className="technology btn btn-outline-secondary">
          <Link className="text-decoration-none" to="/section/:technology">
            Technology
          </Link>
        </button>
        <button className="history btn btn-outline-secondary">
          <Link className="text-decoration-none" to="/section/:history">
            History
          </Link>
        </button>
        <button className="mythology btn btn-outline-secondary">
          <Link className="text-decoration-none" to="/section/:mythology">
            Mythology
          </Link>
        </button>

        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
