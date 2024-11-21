import { useState,useEffect } from "react"
import FoodCard from "./FoodCard";

const Category = () => {
    const [foodItems,setFoodItems] = useState([]);
    const [foodCategory,setFoodCategory] = useState([]);
    const fetchData = async()=>{
        const response = await fetch('/api/foodData');
        const json = await response.json()
        if(response.ok) {
            const food_category= json[0];
            const food_items=json[1];
            setFoodCategory(food_category)
            setFoodItems(food_items)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])  
    return <>
        <div className="m-2">
            {
                foodCategory != [] 
                ? foodCategory.map((foodCat)=>{
                    return<div >
                        <div className="p-1 m-1 fs-3 ">{foodCat.CategoryName} </div>
                        <div className="row mb-3" >
                        {
                            foodItems != []
                            ? foodItems.filter((item)=>(item.CategoryName === foodCat.CategoryName)).map((foodItem)=>{
                                return(
                                    <div className="col-12 col-md-6 col-lg-3">
                                    <FoodCard
                                        key={foodItem._id}
                                        food={foodItem}
                                    />
                                    </div>
                                )
                            })
                            : "No food Items"
                        }
                        </div>
                    </div>
                })
                : "No Food category"
            } 
        </div>
    </>
}

export default Category