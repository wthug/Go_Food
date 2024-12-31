
import Footer from "../components/footer"
import Navbar from "../components/navbar"

import { useState,useEffect } from "react"
import FoodCard from "../components/FoodCard";

const Home = () => {
    const [foodItems,setFoodItems] = useState([]);
    const [foodCategory,setFoodCategory] = useState([]);
    const [search , setSearch] = useState("");
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
        <Navbar/>
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                    <img src="https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0=" className="d-block w-100" alt="..." style={{"max-height":"35rem"}}/>
                    </div>
                    
                    {
                        foodItems != []
                        ? foodItems.filter((item,index)=>(index%2==0)).map((foodItem,index)=>{
                            
                            return(
                                <div className="carousel-item">
                                <img src={foodItem.img} className="d-block w-100" alt="..." style={{"max-height":"35rem"}}/>
                                </div>
                            )
                        })
                        : "No food Items"
                    }
                    <div className="carousel-caption" style={{zIndex:"10"}}>
                        <form class="d-flex" onSubmit={(e)=>{e.preventDefault()}}>
                            <input class="form-control me-2" type="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search" aria-label="Search" />
                        </form>
                    </div>  
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                
                
            </div>
        </>
        <>
            <div className="m-2">
                {
                    foodCategory != [] 
                    ? foodCategory.map((foodCat)=>{
                        
                        return<div >
                            <div className="p-1 m-2 fs-3 ">{foodCat.CategoryName} </div>
                            <div className="row mb-3" >
                            {
                                foodItems != []
                                ? foodItems.filter((item)=>(item.CategoryName === foodCat.CategoryName ) && (item.name.toLowerCase().includes(search.toLowerCase()))).map((foodItem)=>{
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
                            <hr />
                        </div>
                    })
                    : "No Food category"
                } 
            </div>
        </>
        <Footer/>
    </>
}
export default Home