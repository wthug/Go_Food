
const OrderCard = (props) =>{

    return (
        <div className="card m-1" style={{"maxWidth":"13rem" ,"maxHeight":"20rem"}}>
            <img className="card-img-top" src={props.img} alt="Card image cap" style={{"height":"9rem", "objectFit":"fill"}}/>
            <div className="card-body">
                <h5 className="card-title  d-inline"><b>{props.name}</b></h5>
                <div className=" w-100">
                    <div  className="h-100 fs-5 " >
                        Quantity : {props.qty}
                    </div>
                    <div className="h-100 fs-5" >
                        Size : { props.size }
                    </div>
                    <div className="h-100 fs-5">
                        Price : {props.price} /-
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCard