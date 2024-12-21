import { Link  } from "react-router-dom"
import FoodCardCart from "../components/FoodCardCart";
import { useDispatchCard ,useCart} from "../components/Contextreducer";
const Cart = () => {
    const data= useCart();
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
                </div>
                </div>
            </nav>  
            <div className="row mb-3" >
                {
                    data != []
                    ? data.map((foodItem)=>{
                        return(
                            <div className="col-12 col-md-6 col-lg-3">
                            <FoodCardCart
                                key={foodItem.id}
                                food={foodItem}
                            />
                            </div>
                        )
                    })
                    : "No food Items"
                }
                </div>

        </div>
    </>
}

export default Cart