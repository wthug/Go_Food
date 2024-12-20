import { useEffect, useState } from "react";
import { useDispatchCard ,useCart} from "./Contextreducer";

const FoodCard = (props) => {
    const name=props.food.name;
    const imgUrl=props.food.img;
    const options= props.food.options[0];
    const priceOption = Object.keys(options);
    const [qty,setQty] = useState(1);
    const [size,setSize] = useState(priceOption[0]);
    let dispatch = useDispatchCard();

    let data = useCart();

    const finalPrice = qty * parseInt(options[size]);
    const handleAddToCart = async() =>{
        await dispatch({type:"ADD" , id:props.food._id ,name:name ,price:finalPrice,qty:qty,size:size , img:imgUrl});
        console.log(data);
    }

    return <>
        <div className="card m-2 " style={{}}>
            <img className="card-img-top" src={imgUrl} alt="Card image cap" style={{"height":"12rem", "objectFit":"fill"}}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className=" w-100">
                    <select  className="bg-success m-0 h-100 " onChange={(e)=>{setQty(e.target.value)}}>
                        {Array.from(Array(5),(e,index)=>{
                            return (
                                <option key={index+1} value={index+1}>{index+1}</option>
                            )
                        })}
                    </select>
                    <select className="bg-success mx-4 h-100" onChange={(e)=>{setSize(e.target.value)}}>
                        {
                            priceOption.map((tag)=>{
                                return <option key={tag} value={tag}>{tag}</option>
                            })
                        }
                        
                    </select>
                    <div className="d-inline h-100 fs-5">
                        {finalPrice} /-
                    </div>
                    <hr />
                    <button className="btn bg-success text-white" onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </div> 
    </>
}

export default FoodCard