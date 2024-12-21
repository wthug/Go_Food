import { useDispatchCard } from "./Contextreducer";

const FoodCardCart=(props)=>{
    let dispatch = useDispatchCard();
    const removeFromCart = async()=>{
        await dispatch({type:"DELETE" , id:props.food.id,size:props.food.size});
    }
    return(
        <div className="card m-2 " style={{}}>
            <img className="card-img-top" src={props.food.img} alt="Card image cap" style={{"height":"12rem", "objectFit":"fill"}}/>
            <div className="card-body">
                <h5 className="card-title  d-inline">{props.food.name}</h5>
                <div className=" w-100">
                    <div  className="h-100 fs-5 " >
                        Quantity : {props.food.qty}
                    </div>
                    <div className="h-100 fs-5" >
                        Option : { props.food.size }
                        
                    </div>
                    <div className="h-100 fs-5">
                        Price : {props.food.price} /-
                    </div>
                </div>
                <hr></hr>
                <button className="d-inline btn bg-success text-white bg-danger"  onClick={removeFromCart}>delete</button>
               
            </div>
        </div> 
    )
}

export default FoodCardCart;    