import { Link  } from "react-router-dom"

const Logout = () => {
    const handleLogout = ()=>{
        localStorage.removeItem("authToken");
        localStorage.removeItem("authEmail")
    }
    return <>
        <Link className="btn bg-white text-danger mx-1" to="/login"  onClick={handleLogout}>Logout</Link>
    </>
}

export default Logout