import { Link  } from "react-router-dom"

const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem("authToken");

    }
    return<>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">

                
                <Link className="navbar-brand fs-4 fst-italic" to="/">GoodFood</Link>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-auto">
                        <li className="nav-item active">
                            <Link className="nav-link active fs-5" to="/">Home</Link>
                        </li>
                        {(localStorage.getItem("authToken")) ? 
                            <li className="nav-item active">
                                <Link className="nav-link active fs-5" to="/">My Orders</Link>
                            </li>
                            : ""
                        }
                    </ul>
                    <div className="d-flex">
                        {!(localStorage.getItem("authToken")) ? 
                            <>
                            <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                            <Link className="btn bg-white text-success mx-1" to="/signup">SignUp</Link>
                            </>
                            :
                            <>
                            <Link className="btn bg-white text-success mx-1" to="/">Cart</Link>
                            <Link className="btn bg-white text-danger mx-1" to="/login"  onClick={handleLogout}>Logout</Link>
                            </>
                        }
                    </div>
                </div>
                </div>
            </nav>

        </div>
    </>
}

export default Navbar