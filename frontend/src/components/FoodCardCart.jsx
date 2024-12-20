
const FoodCardCart=(props)=>{
    return(
        <div className="card m-2 " style={{}}>
            <img className="card-img-top" src={props.food.img} alt="Card image cap" style={{"height":"12rem", "objectFit":"fill"}}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className=" w-100">
                    <div  className="bg-success m-0 h-100 " >
                        {props.qty}
                    </div>
                    <div className="bg-success mx-4 h-100" >
                        { props.size }
                        
                    </div>
                    <div className="d-inline h-100 fs-5">
                        {props.price} /-
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default FoodCardCart;    