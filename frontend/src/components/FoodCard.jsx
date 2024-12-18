import { useEffect, useState } from "react";

const FoodCard = (props) => {
    const name=props.food.name;
    const imgUrl=props.food.img;
    const options= props.food.options[0];
    const priceOption = Object.keys(options);
    return <>
        <div className="card m-2 " style={{"height": "21rem"}}>
            <img className="card-img-top" src={imgUrl} alt="Card image cap" style={{"height":"70%", "objectFit":"fill"}}/>
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
                </div>
            </div>
        </div> 
    </>
}

export default FoodCard