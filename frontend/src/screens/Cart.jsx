import { Link  } from "react-router-dom"
import FoodCardCart from "../components/FoodCardCart";
import { useDispatchCard ,useCart} from "../components/Contextreducer";
const Cart = () => {
    const data= useCart();
    
    let dispatch = useDispatchCard();
    const handleCheckout = async()=>{
        if( data.length == 0 ) {
            return;
        }
        const Email = localStorage.getItem("authEmail");
        const date = new Date().toDateString();
        const newBody = {data,Email,date};
        let response = await fetch("/api/orderData",{
            method:'POST',
            body: JSON.stringify(newBody),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()
        if(response.ok){
            console.log(json)
            await dispatch({type:"DROP"});
        }
        else{
            console.log(json.error)
        }
    }
    let totalPrice = data.reduce((total,food)=>total+food.price,0)
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
                        <li className="nav-item active">
                            <Link className="nav-link active fs-5" to="/">My Orders</Link>
                        </li>
                    </ul>
                    
                </div>
                </div>
            </nav>  
            
            
            {
                data.length !== 0 
                ? <div className="row mb-3" >
                    {
                        data.map((foodItem)=>{
                            return(
                                <div className="col-12 col-md-6 col-lg-3">
                                <FoodCardCart
                                    key={foodItem.id}
                                    food={foodItem}
                                />
                                </div>
                            )
                        })
                    }
                    <hr />
                    <div className="d-flex m-3">
                        <div className="fs-3"><b>Total :  {totalPrice}/-</b></div>
                        <button className="btn bg-white text-success mx-3" onClick={handleCheckout}>Check Out</button>   
                    </div>
                </div>
                :<div className="text-center my-5">
                    <h4>The cart is empty</h4>
                </div>
            }


        </div>
    </>
}

export default Cart