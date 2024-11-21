import { Link } from "react-router-dom"

const Footer = () => {
    return<>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-2 border-top">
            <div className="col-md-4 d-flex align-items-center mx-3">
            {/* <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg className="bi" width="30" height="24"></svg>
            </Link> */}
            <span className="text-muted ml-1 ">© 2024 GoodFood, Inc</span>
            </div>
        </footer>
    </>
}

export default Footer