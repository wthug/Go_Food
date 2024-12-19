import { useEffect, useState } from "react";

const FoodCard = (props) => {
    const name=props.food.name;
    const imgUrl=props.food.img;
    const options= props.food.options[0];
    const priceOption = Object.keys(options);
    return <>
        <div className="card m-2 " style={{}}>
            <img className="card-img-top" src={imgUrl} alt="Card image cap" style={{"height":"12rem", "objectFit":"fill"}}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className=" w-100">
                    <select  className="bg-success m-0 h-100 ">
                        {Array.from(Array(5),(e,index)=>{
                            return (
                                <option key={index+1} value={index+1}>{index+1}</option>
                            )
                        })}
                    </select>
                    <select className="bg-success mx-4 h-100">
                        {
                            priceOption.map((tag)=>{
                                return <option key={tag} value={tag}>{tag}</option>
                            })
                        }
                        
                    </select>
                    <div className="d-inline h-100 fs-5">
                        1500
                    </div>
                    <hr />
                    <button className="btn bg-success text-white">Add to cart</button>
                </div>
            </div>
        </div> 
    </>
}

export default FoodCard